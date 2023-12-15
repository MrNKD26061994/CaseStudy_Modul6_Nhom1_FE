import "./style.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {closeFormEdit, editDetailUser, findUserById, getName, openFormEdit} from "../../../services/userService";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import {EmailSchema, FirstLastNameSchema, PhoneSchema} from "../../../validate/validate";
import {MdCloudUpload} from "react-icons/md";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../../../firebase/firebase";
import {v4} from "uuid";

export default function EditHouse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => {
        // console.log(state.userDetail.userDetail)
        return state.userDetail.userDetail
    })

    const attributeName = useSelector(state => {
        return state.nameEditOne.nameEditOne
    })
    const isActiveEdit = useSelector(state => {
        return state.isActiveEdit.isActiveEdit
    })

    const showFormEdit = async (attribute) =>{
        dispatch(openFormEdit()).then(() => {})
        dispatch(getName(attribute)).then(() => {})

    }
    function offFormEdit() {
        dispatch(closeFormEdit()).then(() => {})
        dispatch(getName("")).then(() => {})
    }

    async function handleEdit(values, {resetForm}) {
        let dataTemp = {...values};
        console.log(dataTemp)
        let data = {...user}
        Object.keys(data).map(key => {
            if(dataTemp[key] !== undefined) {
                data[key] = dataTemp[key];
            }
        })
        await dispatch(editDetailUser(data)).then((res) => {
            console.log("aaaaa",res)
            if(res.type === 'user/edit/rejected') {
                navigate('/user-info')
                toast.error("Cập nhật thất bại!");
            } else {
                navigate('/user-info')
                toast.success("Cập nhật thành công!");
            }
        })
        navigate('')
    }

    const [fileFront, setFileFront] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const uploadIdentify = (event) => {
        if (event.target.files[0] == null) return;
        const imageRef = ref(storage, `images/${event.target.files[0].name + v4()}`);
        const {name} = event.target;
        toast.info("Đang tải ảnh lên", {autoClose: 500,});
        uploadBytesResumable(imageRef, event.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                // toast.success("Tải ảnh thành công", {position: "top-center", autoClose: 2000,});
                await setAvatar(url);
                let data = {...user}

                data.avatar = url;
                console.log(data)

                await dispatch(editDetailUser(data)).then((res) => {
                    if (res.type === 'user/login/rejected') {
                        navigate('/user-info')
                        toast.error("Cập nhật thất bại!");
                    } else {
                        navigate('/user-info')
                        toast.success("Cập nhật thành công!");
                    }
                })
                navigate('')
            });
        })
    }

    return (
        <>
            <div className="container">
                <div className="nav-userInfo">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" style={{background: 'none'}}>
                            <li className="breadcrumb-item"><Link to={''}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin ngôi nhà</li>
                        </ol>
                    </nav>
                </div>
                <h1>Thông tin ngôi nhà</h1>


                <div className="user-info">
                    <div className={`user-info-left w-70`}>

                        <div className={`info-item ${(attributeName === `Name`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Tên ngôi nhà</p>
                                {user.lastname || user.firstname ?
                                    <p className='color-grey'>{user.lastname}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>

                            <div className="infoItem-right">
                                {user.lastname || user.firstname ?
                                    <div onClick={() => showFormEdit('Name')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Name')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Name`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Tên ngôi nhà</p>
                                <p className="color-grey">Tên ngôi nhà của bạn trên giấy tờ</p>
                                <Formik initialValues={{firstname: user.firstname}}
                                        enableReinitialize={true}
                                        validationSchema={FirstLastNameSchema}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6 color-red">
                                                <Field name={'firstname'} type="text" className={'form-control'} placeholder={'First Name:'} />
                                                <ErrorMessage name={'firstname'}></ErrorMessage>
                                            </div>

                                        </div>

                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>

                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEdit} className="editBtn">Hủy</div>
                            </div>
                        </div>


                        <div className={`info-item ${(attributeName === `Address`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Địa chỉ email</p>
                                {user.email ?
                                    <p className='color-grey'>{user.email}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>
                            <div className="infoItem-right">
                                {user.email ?
                                    <div onClick={() => showFormEdit('Address')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Address')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Address`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Địa chỉ email</p>
                                <p className="color-grey">Địa chỉ ngôi nhà của bạn</p>
                                <Formik initialValues={{email: user.email}}
                                        enableReinitialize={true}
                                        validationSchema={EmailSchema}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'email'} type="email" className={'form-control'} placeholder={'Địa chỉ:'} />
                                                <ErrorMessage name={'email'}></ErrorMessage>
                                            </div>
                                        </div>

                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>

                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEdit} className="editBtn">Hủy</div>
                            </div>
                        </div>


                        <div className={`info-item ${(attributeName === `Bedroom`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Số phòng ngủ</p>
                                {user.phone ?
                                    <p className='color-grey'>{user.phone}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>
                            <div className="infoItem-right">
                                {user.phone ?
                                    <div onClick={() => showFormEdit('Bedroom')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Bedroom')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Bedroom`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Số phòng ngủ</p>
                                <p className="color-grey">Số phòng ngủ trong ngôi nhà của bạn</p>
                                <Formik initialValues={{phone: user.phone}}
                                        enableReinitialize={true}
                                        validationSchema={PhoneSchema}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'phone'} type="text" className={'form-control'} placeholder={'Số phòng ngủ:'} />
                                                <ErrorMessage name={'phone'}></ErrorMessage>
                                            </div>
                                        </div>

                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>

                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEdit} className="editBtn">Hủy</div>
                            </div>
                        </div>


                        <div className={`info-item ${(attributeName === `Bathroom`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Số phòng tắm</p>
                                {user.address ?
                                    <p className='color-grey'>{user.address}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>
                            <div className="infoItem-right">
                                {user.address ?
                                    <div onClick={() => showFormEdit('Bathroom')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Bathroom')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Bathroom`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Số phòng tắm</p>
                                <p className="color-grey">Số phòng tắm trong ngôi nhà của bạn</p>
                                <Formik initialValues={{address: user.address}}
                                        enableReinitialize={true}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'address'} type="text" className={'form-control'} placeholder={'Số phòng tắm:'} />
                                            </div>
                                        </div>

                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>

                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEdit} className="editBtn">Hủy</div>
                            </div>
                        </div>

                        <div className={`info-item ${(attributeName === `Description`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Mô tả chung</p>
                                {user.address ?
                                    <p className='color-grey'>{user.address}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>
                            <div className="infoItem-right">
                                {user.address ?
                                    <div onClick={() => showFormEdit('Description')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Description')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Description`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Mô tả chung</p>
                                <p className="color-grey">Mô tả chung về ngôi nhà của bạn</p>
                                <Formik initialValues={{address: user.address}}
                                        enableReinitialize={true}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'address'} type="text" className={'form-control'} placeholder={'Mô tả chung về ngôi nhà của bạn:'} />
                                            </div>
                                        </div>

                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>

                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEdit} className="editBtn">Hủy</div>
                            </div>
                        </div>

                        <div className={`info-item ${(attributeName === `Price`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Giá nhà </p>
                                {user.address ?
                                    <p className='color-grey'>{user.address}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>
                            <div className="infoItem-right">
                                {user.address ?
                                    <div onClick={() => showFormEdit('Price')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Price')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Price`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Giá nhà</p>
                                <p className="color-grey">Giá ngôi nhà của bạn </p>
                                <Formik initialValues={{address: user.address}}
                                        enableReinitialize={true}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'address'} type="text" className={'form-control'} placeholder={'Giá ngôi nhà của bạn:'} />
                                            </div>
                                        </div>

                                        <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>

                                    </Form>
                                </Formik>
                            </div>
                            <div className="infoItem-right">
                                <div onClick={offFormEdit} className="editBtn">Hủy</div>
                            </div>
                        </div>

                        <div style={{paddingBottom: '16px'}} className={`info-item blogEdit`}>
                            <div className="infoItem-left">
                                <p>Ảnh đại diện</p>
                            </div>
                            <div className="infoItem-right">

                                <form className='identify'
                                      onClick={() => document.querySelector("#frontsideFile").click()}>
                                    <input type="file" id="frontsideFile" name="avatar" onChange={(event) => {
                                        event.target.files[0] && setFileFront(event.target.files[0].name);
                                        uploadIdentify(event)
                                    }} hidden accept={"image/jpeg ,image/png"}/>
                                    {user.avatar ?
                                        <img src={user.avatar} id="frontside" width={'100%'} height={'100%'} alt={'img'}/>
                                        :
                                        <MdCloudUpload />
                                    }
                                </form>

                            </div>
                        </div>


                    </div>
                    <div className="user-info-right w-25">
                        Right
                    </div>
                </div>
            </div>
        </>
    )
}
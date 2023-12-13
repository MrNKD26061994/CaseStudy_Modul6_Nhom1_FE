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
import {addInfoHouse} from "../../../services/houseService";

export default function HouseForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const house = useSelector(state => {
        console.log(state)
        return state.house.houseDetail
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
        let data = {...house}
        console.log(data)
        Object.keys(dataTemp).map(key => {
            if(dataTemp[key] !== undefined) {
                console.log("key", dataTemp[key])
                data[key] = dataTemp[key];
            }
        })
        console.log("AAAAAAA", data)

        await dispatch(addInfoHouse(data)).then((res) => {
        })
        navigate('')
    }

    const [fileFront, setFileFront] = useState(null);
    const [avatar, setAvatar] = useState(null);

    // const uploadIdentify = (event) => {
    //     if (event.target.files[0] == null) return;
    //     const imageRef = ref(storage, `images/${event.target.files[0].name + v4()}`);
    //     const {name} = event.target;
    //     toast.info("Đang tải ảnh lên", {autoClose: 500,});
    //     uploadBytesResumable(imageRef, event.target.files[0]).then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then(async (url) => {
    //             // toast.success("Tải ảnh thành công", {position: "top-center", autoClose: 2000,});
    //             await setAvatar(url);
    //             let data = {...user}
    //
    //             data.avatar = url;
    //             console.log(data)
    //
    //             await dispatch(editDetailUser(data)).then((res) => {
    //                 if (res.type === 'user/login/rejected') {
    //                     navigate('/user-info')
    //                     toast.error("Cập nhật thất bại!");
    //                 } else {
    //                     navigate('/user-info')
    //                     toast.success("Cập nhật thành công!");
    //                 }
    //             })
    //             navigate('')
    //         });
    //     })
    // }


    return (
        <>
            <div className="container">
                <div className="nav-userInfo">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb" style={{background: 'none'}}>
                            <li className="breadcrumb-item"><Link to={''}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin cá nhân</li>
                        </ol>
                    </nav>
                </div>
                <h1>Thông tin cá nhân</h1>


                <div className="user-info">
                    <div className={`user-info-left w-50`}>

                        <div className={`info-item ${(attributeName === `Room`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Thông tin phòng</p>
                                {house.bedroom || house.bed || house.bathroom ?
                                    <p className='color-grey'>{'Phòng ngủ ' + house.bedroom + 'phòng, phòng tắm ' + house.bathroom + 'phòng, số giường ' + house.bed}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>

                            <div className="infoItem-right">
                                {house.bedroom || house.bed || house.bathroom ?
                                    <div onClick={() => showFormEdit('Room')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Room')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Room`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Thông tin phòng</p>
                                <p className="color-grey">Đây là tên trên giấy tờ thông hành của bạn, có thể là giấy phép hoặc hộ chiếu</p>
                                <Formik initialValues={{bedroom: house.bedroom, bathroom: house.bathroom, bed: house.bed}}
                                        enableReinitialize={true}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-md-4 color-red">
                                                <Field name={'bedroom'} type="text" className={'form-control'} placeholder={'Phòng ngủ:'} />
                                                <ErrorMessage name={'bedroom'}></ErrorMessage>
                                            </div>

                                            <div className="form-group col-md-4 color-red">
                                                <Field name={'bathroom'} type="text" className={"form-control"} placeholder={'Phòng tắm:'}/>
                                                <ErrorMessage name={'bathroom'}></ErrorMessage>
                                            </div>
                                            <div className="form-group col-md-4 color-red">
                                                <Field name={'bed'} type="text" className={"form-control"} placeholder={'Số giường:'}/>
                                                <ErrorMessage name={'bed'}></ErrorMessage>
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


                        {/*<div className={`info-item ${(attributeName === `Email`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Địa chỉ email</p>*/}
                        {/*        {user.email ?*/}
                        {/*            <p className='color-grey'>{user.email}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {user.email ?*/}
                        {/*            <div onClick={() => showFormEdit('Email')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEdit('Email')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Email`) ?*/}
                        {/*                        isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*                        : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Địa chỉ email</p>*/}
                        {/*        <p className="color-grey">Sử dụng địa chỉ mà bạn luôn có quyền truy cập.</p>*/}
                        {/*        <Formik initialValues={{email: user.email}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                validationSchema={EmailSchema}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEdit(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'email'} type="email" className={'form-control'} placeholder={'Email:'} />*/}
                        {/*                        <ErrorMessage name={'email'}></ErrorMessage>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEdit} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className={`info-item ${(attributeName === `Phone`) ?*/}
                        {/*    isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*    : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Số điện thoại</p>*/}
                        {/*        {user.phone ?*/}
                        {/*            <p className='color-grey'>{user.phone}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {user.phone ?*/}
                        {/*            <div onClick={() => showFormEdit('Phone')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEdit('Phone')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Phone`) ?*/}
                        {/*                    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*                    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Số điện thoại</p>*/}
                        {/*        <p className="color-grey">Thêm số điện thoại để khách đã xác nhận và Airbnb có thể liên hệ với bạn. Bạn có thể thêm các số điện thoại khác và chọn mục đích sử dụng tương ứng.</p>*/}
                        {/*        <Formik initialValues={{phone: user.phone}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                validationSchema={PhoneSchema}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEdit(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'phone'} type="text" className={'form-control'} placeholder={'Số điện thoại:'} />*/}
                        {/*                        <ErrorMessage name={'phone'}></ErrorMessage>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEdit} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}


                        {/*<div className={`info-item ${(attributeName === `Address`) ?*/}
                        {/*                isActiveEdit ? `noneEdit` : `blogEdit`*/}
                        {/*                : `blogEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Địa chỉ</p>*/}
                        {/*        {user.address ?*/}
                        {/*            <p className='color-grey'>{user.address}</p>*/}
                        {/*            :*/}
                        {/*            <p className='color-grey'>Chưa được cung cấp</p>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        {user.address ?*/}
                        {/*            <div onClick={() => showFormEdit('Address')} className="editBtn">Chỉnh sửa</div>*/}
                        {/*            :*/}
                        {/*            <div onClick={() => showFormEdit('Address')} className="editBtn">Thêm</div>*/}
                        {/*        }*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={`info-item ${(attributeName === `Address`) ?*/}
                        {/*    isActiveEdit ? `blogEdit` : `noneEdit`*/}
                        {/*    : `noneEdit`}`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Địa chỉ</p>*/}
                        {/*        <p className="color-grey">Sử dụng địa chỉ thường trú để nhận thư.</p>*/}
                        {/*        <Formik initialValues={{address: user.address}}*/}
                        {/*                enableReinitialize={true}*/}
                        {/*                onSubmit={(values,formikBag) => {*/}
                        {/*                    handleEdit(values, formikBag);*/}
                        {/*                }}>*/}
                        {/*            <Form>*/}
                        {/*                <div className="form-row">*/}
                        {/*                    <div className="form-group col-12 color-red">*/}
                        {/*                        <Field name={'address'} type="text" className={'form-control'} placeholder={'Địa chỉ:'} />*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}

                        {/*                <button style={{marginBottom: '16px', padding: '12px 24px', fontWeight: '500', borderRadius: '10px'}} type="submit" className="btn btn-dark">Lưu</button>*/}

                        {/*            </Form>*/}
                        {/*        </Formik>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}
                        {/*        <div onClick={offFormEdit} className="editBtn">Hủy</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div style={{paddingBottom: '16px'}} className={`info-item blogEdit`}>*/}
                        {/*    <div className="infoItem-left">*/}
                        {/*        <p>Ảnh đại diện</p>*/}
                        {/*    </div>*/}
                        {/*    <div className="infoItem-right">*/}

                        {/*        <form className='identify'*/}
                        {/*              onClick={() => document.querySelector("#frontsideFile").click()}>*/}
                        {/*            <input type="file" id="frontsideFile" name="avatar" onChange={(event) => {*/}
                        {/*                event.target.files[0] && setFileFront(event.target.files[0].name);*/}
                        {/*                uploadIdentify(event)*/}
                        {/*            }} hidden accept={"image/jpeg ,image/png"}/>*/}
                        {/*            {user.avatar ?*/}
                        {/*                <img src={user.avatar} id="frontside" width={'100%'} height={'100%'} alt={'img'}/>*/}
                        {/*                :*/}
                        {/*                <MdCloudUpload />*/}
                        {/*            }*/}
                        {/*        </form>*/}

                        {/*    </div>*/}
                    </div>
                    <div className="user-info-right w-50">
                        Right
                    </div>

                </div>


            </div>
        </>
    )
}
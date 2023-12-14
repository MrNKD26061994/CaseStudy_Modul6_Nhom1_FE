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
import icon1 from "../../../assets/imgs/container/1.png"
import icon2 from "../../../assets/imgs/container/1-1.png"
import icon3 from "../../../assets/imgs/container/1-1-2.png"
import become from "../../../assets/imgs/container/become-an-owner.png"


export default function BecomeOwner() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => {
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
        let data = {...user, ...values}
        await dispatch(editDetailUser(data)).then((res) => {
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

     function handleProfileOwner() {
        let data = {...user}
         data.status = "AdminConfirm";
        console.log(data)
        dispatch(editDetailUser(data)).then((res) => {
            if (res.type === 'user/edit/rejected') {
                navigate('/')
                toast.error("Đăng ký thành chủ nhà thất bại!");
            } else {
                navigate('/')
                toast.success("Đăng ký thành chủ nhà thành công!");
            }
        })
        navigate('')
    }

    const uploadIdentify = (event) => {
        if (event.target.files[0] == null) return;
        const imageRef = ref(storage, `images/${event.target.files[0].name + v4()}`);
        const {name} = event.target;
        toast.info("Đang tải ảnh lên", {autoClose: 500,});
        uploadBytesResumable(imageRef, event.target.files[0]).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                let data = {...user}
                if (name === "frontside") {
                    data.frontside = url;
                } else if (name === "backside") {
                    data.backside = url;
                } else if (name === "avatar") {
                    data.avatar = url;
                }

                await dispatch(editDetailUser(data)).then((res) => {
                    if (res.type === 'user/edit/rejected') {
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

    function handleBecomeOwner() {
        if (!user.frontside) {
            document.getElementById("frontside-errors").innerHTML = "Bạn chưa chọn mặt trước CCCD";
        } else {
            document.getElementById("frontside-errors").innerHTML = "";

        }
        if (!user.backside) {
            document.getElementById("backside-errors").innerHTML = "Bạn chưa chọn mặt sau CCCD";
        } else {
            document.getElementById("backside-errors").innerHTML = "";
        }
        if(!user.avatar) {
            document.getElementById("avatar-errors").innerHTML = "Bạn chưa chọn mặt sau ảnh đại diện";
        } else {
            document.getElementById("avatar-errors").innerHTML = "";
        }
        if(!user.address) {
            document.getElementById("address-errors").innerHTML = "Bạn cần nhập địa chỉ";
        } else {
            document.getElementById("address-errors").innerHTML = "";
        }

        if(user.backside && user.frontside && user.avatar && user.address) {
            handleProfileOwner();
        }
    }

    return (
        <>
            <div className="container">
                <div className="nav-userInfo">
                    <nav style={{padding: '0'}} aria-label="breadcrumb">
                        <ol className="breadcrumb" style={{background: 'none'}}>
                            <li className="breadcrumb-item"><Link to={''}>Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thông tin cá nhân</li>
                        </ol>
                    </nav>
                </div>
                <h1>Thông tin cá nhân</h1>


                <div className="user-info">
                    <div className={`user-info-left w-65`}>

                        <div className={`info-item ${(attributeName === `Name`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Tên pháp lý</p>
                                {user.lastname || user.firstname ?
                                    <p className='color-grey'>{user.lastname + ' ' + user.firstname}</p>
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
                                <p>Tên pháp lý</p>
                                <p className="color-grey">Đây là tên trên giấy tờ thông hành của bạn, có thể là giấy phép hoặc hộ chiếu</p>
                                <Formik initialValues={{firstname: user.firstname, lastname: user.lastname}}
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

                                            <div className="form-group col-md-6 color-red">
                                                <Field name={'lastname'} type="text" className={"form-control"} placeholder={'Last Name:'}/>
                                                <ErrorMessage name={'lastname'}></ErrorMessage>
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


                        <div className={`info-item ${(attributeName === `Email`) ?
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
                                    <div onClick={() => showFormEdit('Email')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Email')} className="editBtn">Thêm</div>
                                }
                            </div>
                        </div>
                        <div className={`info-item ${(attributeName === `Email`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Địa chỉ email</p>
                                <p className="color-grey">Sử dụng địa chỉ mà bạn luôn có quyền truy cập.</p>
                                <Formik initialValues={{email: user.email}}
                                        enableReinitialize={true}
                                        validationSchema={EmailSchema}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'email'} type="email" className={'form-control'} placeholder={'Email:'} />
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


                        <div className={`info-item ${(attributeName === `Phone`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Số điện thoại</p>
                                {user.phone ?
                                    <p className='color-grey'>{user.phone}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                            </div>
                            {user.roles.some((item) => item.authority !== "ROLE_ADMIN") ?
                                <div className="infoItem-right">
                                    {user.phone ?
                                        <div onClick={() => showFormEdit('Phone')} className="editBtn">Chỉnh sửa</div>
                                        :
                                        <>
                                            <div onClick={() => showFormEdit('Phone')} className="editBtn">Thêm</div>
                                        </>
                                    }
                                </div> :
                                <></>}
                        </div>
                        <div className={`info-item ${(attributeName === `Phone`) ?
                            isActiveEdit ? `blogEdit` : `noneEdit`
                            : `noneEdit`}`}>
                            <div className="infoItem-left">
                                <p>Số điện thoại</p>
                                <p className="color-grey">Thêm số điện thoại để khách đã xác nhận và Airbnb có thể liên hệ với bạn. Bạn có thể thêm các số điện thoại khác và chọn mục đích sử dụng tương ứng.</p>
                                <Formik initialValues={{phone: user.phone}}
                                        enableReinitialize={true}
                                        validationSchema={PhoneSchema}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'phone'} type="text" className={'form-control'} placeholder={'Số điện thoại:'} />
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


                        <div className={`info-item ${(attributeName === `Address`) ?
                            isActiveEdit ? `noneEdit` : `blogEdit`
                            : `blogEdit`}`}>
                            <div className="infoItem-left">
                                <p>Địa chỉ</p>
                                {user.address ?
                                    <p className='color-grey'>{user.address}</p>
                                    :
                                    <p className='color-grey'>Chưa được cung cấp</p>
                                }
                                <span id='address-errors' className={'text-danger'}/>
                            </div>
                            <div className="infoItem-right">
                                {user.address ?
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
                                <p>Địa chỉ</p>
                                <p className="color-grey">Sử dụng địa chỉ thường trú để nhận thư.</p>
                                <Formik initialValues={{address: user.address}}
                                        enableReinitialize={true}
                                        onSubmit={(values,formikBag) => {
                                            handleEdit(values, formikBag);
                                        }}>
                                    <Form>
                                        <div className="form-row">
                                            <div className="form-group col-12 color-red">
                                                <Field name={'address'} type="text" className={'form-control'} placeholder={'Địa chỉ:'} />
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
                                <span id='avatar-errors' className={'text-danger'}/>
                            </div>
                            <div className="infoItem-right">

                                <form className='identify'
                                      onClick={() => document.querySelector("#avatarSideFile").click()}>
                                    <input type="file" id="avatarSideFile" name="avatar" onChange={(event) => {
                                        uploadIdentify(event)
                                    }} hidden accept={"image/jpeg ,image/png"}/>
                                    {user.avatar ?
                                        <img src={user.avatar} id="frontside" width={'80px'} height={'80px'} alt={'img'}/>
                                        :
                                        <MdCloudUpload color={"#1475cf"} size={80} />
                                    }
                                </form>
                            </div>
                        </div>

                        <div style={{paddingBottom: '16px'}} className={`info-item blogEdit`}>
                            <div className="infoItem-left">
                                <p>CCCD mặt trước</p>
                                <span id='frontside-errors' className={'text-danger'}/>
                            </div>
                            <div className="infoItem-right">

                                <form className='identify'
                                      onClick={() => document.querySelector("#frontSideFile").click()}>
                                    <input type="file" id="frontSideFile" name="frontside" onChange={(event) => {
                                        uploadIdentify(event)
                                    }} hidden accept={"image/jpeg ,image/png"}/>
                                    {user.frontside ?
                                        <img src={user.frontside} id="frontside" width={'80px'} height={'80px'} alt={'img'}/>
                                        :
                                        <MdCloudUpload color={"#1475cf"} size={80}/>
                                    }
                                </form>
                            </div>
                        </div>

                        <div style={{paddingBottom: '16px'}} className={`info-item blogEdit`}>
                            <div className="infoItem-left">
                                <p>CCCD mặt sau</p>
                                <span id='backside-errors' className={'text-danger'}/>
                            </div>
                            <div className="infoItem-right">

                                <form className='identify'
                                      onClick={() => document.querySelector("#backSideFile").click()}>
                                    <input type="file" id="backSideFile" name="backside" onChange={(event) => {
                                        uploadIdentify(event)
                                    }} hidden accept={"image/jpeg ,image/png"}/>
                                    {user.backside ?
                                        <img src={user.backside} id="frontside" width={'80px'} height={'80px'} alt={'img'}/>
                                        :
                                        <MdCloudUpload color={"#1475cf"} size={80}/>
                                    }
                                </form>
                            </div>
                        </div>

                        <div style={{width: '100%', marginTop: '16px', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{fontWeight: '700', padding: '16px 16px'}} className="btn btn-danger" onClick={handleBecomeOwner}><img style={{marginRight: '16px'}} src={become} alt=""/>Làm chủ nhà tại Airbnb</div>
                        </div>
                    </div>


                    <div className="user-info-right w-30">
                        <div className="user-right">
                            <div className="user-right-item">
                                <img src={icon1} alt=""/>
                                <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                                <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                            </div>
                            <hr/>
                            <div className="user-right-item">
                                <img src={icon2} alt=""/>
                                <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                                <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                            </div>
                            <hr/>
                            <div className="user-right-item">
                                <img src={icon3} alt=""/>
                                <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                                <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
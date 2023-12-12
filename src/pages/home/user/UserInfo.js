import "./style.css"
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {closeFormEdit, editDetailUser, findUserById, getName, openFormEdit} from "../../../services/userService";
import {toast} from "react-toastify";
import {useEffect} from "react";
import {EmailSchema, FirstLastNameSchema, PhoneSchema} from "../../../validate/validate";

export default function UserInfo() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => {
        console.log(state.userDetail.userDetail)
        return state.userDetail.userDetail
    })

    // useEffect(() => {
    //     dispatch(findUserById(JSON.parse(localStorage.getItem('user')).id));
    // },[])

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
            if(res.type === 'user/login/rejected') {
                navigate('/user-info')
                toast.error("Cập nhật thất bại!");
            } else {
                navigate('/user-info')
                toast.success("Cập nhật thành công!");
            }
        })
        navigate('')
    }

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
                    <div className={`user-info-left`}>

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
                            <div className="infoItem-right">
                                {user.phone ?
                                    <div onClick={() => showFormEdit('Phone')} className="editBtn">Chỉnh sửa</div>
                                    :
                                    <div onClick={() => showFormEdit('Phone')} className="editBtn">Thêm</div>
                                }
                            </div>
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



                    </div>
                    <div className="user-info-right">
                        Right
                    </div>
                </div>
            </div>
        </>
    )
}
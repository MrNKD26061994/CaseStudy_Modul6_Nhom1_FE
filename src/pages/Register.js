import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {register} from "../services/userService";
import {toast} from "react-toastify";
import {RegisterUserSchema} from "../validate/validate";

export default function Register({nameClass}) {
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function showModalRegister() {
        setShowRegisterModal(true);
    }

    const handleRegister = (values, {resetForm}) => {
        if(values.username === '' && values.password === '' && values.confirmPassword === '') {
            toast.error("Đăng ký không thành công!");
        } else {
            toast.success("Đăng ký thành công!")
            setShowRegisterModal(false)
            dispatch(register(values)).then((res) => {
                if(res.type === 'user/register/rejected') {
                    navigate('')
                    // toast.error("Đăng ký không thành công!");
                    resetForm();
                } else {
                    navigate('')
                }
            })
        }

    }

    return (
        <>
            <div onClick={() => showModalRegister()} className={`${nameClass}`}>Đăng ký</div>

            <Modal
                show={showRegisterModal}
                onHide={() => setShowRegisterModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Formik initialValues={{email: '', username: '', password: '', confirmPassword: '', phone: ''}}
                        validationSchema={RegisterUserSchema}
                        onSubmit={(values, formikBag) => {
                            handleRegister(values, formikBag);
                        }}>
                    <Form>

                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Đăng ký
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div>
                                <div className="form-group">
                                    <label>Email:<span className={'text-red'}> *</span></label>
                                    <Field name={'email'} type="email" className={'form-control'}/>
                                    <span className='color-red'><ErrorMessage name={'email'}></ErrorMessage></span>
                                </div>
                                <div className="form-group">
                                    <label>Tên đăng nhập:<span className={'text-red'}> *</span></label>
                                    <Field name={'username'} type="text" className={'form-control'}/>
                                    <span className='color-red'><ErrorMessage name={'username'}></ErrorMessage></span>
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu:<span className={'text-red'}> *</span></label>
                                    <Field name={'password'} type="password" className={"form-control"}/>
                                    <span className='color-red'><ErrorMessage name={'password'}></ErrorMessage></span>

                                </div>
                                <div className="form-group">
                                    <label>Nhập lại mật khẩu:<span className={'text-red'}> *</span></label>
                                    <Field name={'confirmPassword'} type="password" className={"form-control"}/>
                                    <span className='color-red'><ErrorMessage name={'confirmPassword'}></ErrorMessage></span>

                                </div>
                                <div className="form-group">
                                    <label>Số điện thoại:<span className={'text-red'}> *</span></label>
                                    <Field name={'phone'} type="text" className={'form-control'}/>
                                    <span className='color-red'><ErrorMessage name={'phone'}></ErrorMessage></span>
                                </div>
                                <button style={{width: '100%', borderRadius: '5px'}} type="submit"
                                        className="btn btn-primary">Đăng ký
                                </button>

                                <div onClick={() => setShowRegisterModal(false)} style={{width: '100%', borderRadius: '5px', marginTop: '16px'}}
                                     className="btn btn-secondary">Hủy bỏ
                                </div>
                            </div>
                        </Modal.Body>
                    </Form>
                </Formik>
            </Modal>
        </>
    )
}
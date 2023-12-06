import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {register} from "../services/userService";
import {toast} from "react-toastify";

export default function Register({nameClass}) {
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function showModalRegister() {
        setShowRegisterModal(true);
    }

    const handleRegister = (values, {resetForm}) => {
        if(values.username === '' && values.password === '' && values.confirmPassword === '') {
            toast.error("Register fail!");
        } else {
            dispatch(register(values)).then((res) => {
                if(res.type === 'user/register/rejected') {
                    navigate('')
                    toast.error("Register fail!");
                    resetForm();
                } else {
                    navigate('')
                    toast.success("Register successful!")
                    setShowRegisterModal(false)
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
                <Formik initialValues={{username: '', password: '', confirmPassword: ''}}
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
                                    <label htmlFor="exampleInputEmail1">Email/Uername:<span className={'text-red'}> *</span></label>
                                    <Field name={'username'} type="text" className={'form-control'} id='exampleInputEmail1'
                                           aria-describedby='emailHelp'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password:<span className={'text-red'}> *</span></label>
                                    <Field name={'password'} type="password" className={"form-control"}
                                           id="exampleInputPassword1"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Confirm Password:<span className={'text-red'}> *</span></label>
                                    <Field name={'confirmPassword'} type="password" className={"form-control"}
                                           id="exampleInputPassword2"/>
                                </div>
                                <button style={{width: '100%', borderRadius: '5px'}} type="submit"
                                        className="btn btn-primary">Submit
                                </button>

                                <div onClick={() => setShowRegisterModal(false)} style={{width: '100%', borderRadius: '5px', marginTop: '16px'}}
                                     className="btn btn-secondary">Cancel
                                </div>
                            </div>
                        </Modal.Body>
                    </Form>
                </Formik>
            </Modal>
        </>
    )
}
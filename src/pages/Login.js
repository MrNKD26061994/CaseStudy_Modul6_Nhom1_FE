import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../services/userService";
import {toast} from "react-toastify";
import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import Register from "./Register";
import '../components/Modal/style.css'
import iconGoogle from "../assets/imgs/icon-google.png"
import {LoginUserSchema} from "../validate/validate";
import {countUnreadNotify, countUnReadNotifyByAccountLogin} from "../services/notifyService";

export default function Login({props}) {

    const [showLoginModal, setShowLoginModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (values, {resetForm}) => {
        dispatch(login(values)).then((res) => {

            if (res.type === 'user/login/rejected') {
                navigate('')
                toast.error("Đăng nhập thất bại!");
                resetForm();
            }
            else {
                navigate('')
                toast.success("Đăng nhập thành công!");
                setShowLoginModal(false);
            }
        })
    }

    function showModalLogin() {
        setShowLoginModal(true);
    }

    return (
        <>
            <div onClick={() => showModalLogin()} className={`${props.nameClass}`}>{props.nameTitle}</div>

            <Modal
                show={showLoginModal}
                onHide={() => setShowLoginModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Formik initialValues={{username: '', password: ''}}
                        validationSchema={LoginUserSchema}
                        onSubmit={(values, formikBag) => {
                            handleLogin(values, formikBag);
                        }}>
                    <Form>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Đăng nhập
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Tên đăng nhập:<span className={'text-red'}> *</span></label>
                                    <Field name={'username'} type="text" className={'form-control'} id='exampleInputEmail1'
                                           aria-describedby='emailHelp'/>
                                    <span className='color-red'><ErrorMessage name={'username'}></ErrorMessage></span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Mật khẩu:<span className={'text-red'}> *</span></label>
                                    <Field name={'password'} type="password" className={"form-control"}
                                           id="exampleInputPassword1"/>
                                    <span className='color-red'><ErrorMessage name={'password'}></ErrorMessage></span>
                                </div>
                                <button type="submit" className="btn btn-primary btn-edit-modal">
                                    <img src="" alt=""/>
                                    Đăng nhập
                                </button>
                                <Register nameClass={"btn btn-secondary btn-edit-modal"}/>
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <div className="btn btn-outline-danger btn-edit-modal" style={{position: 'relative'}}>
                                <img style={{width: '20px', height: '20px', position: 'absolute', top: '8px', left: '8px'}} src={iconGoogle} alt=""/>
                                <span>Đăng nhập bằng Google</span>
                            </div>
                        </Modal.Footer>
                    </Form>
                </Formik>
            </Modal>
        </>
    )
}
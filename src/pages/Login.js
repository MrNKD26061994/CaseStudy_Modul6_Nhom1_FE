import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../services/userService";
import {toast} from "react-toastify";
import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import Register from "./Register";
import '../components/Modal/style.css'
import iconGoogle from "../assets/imgs/icon-google.png"

export default function Login() {

    const [showLoginModal, setShowLoginModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (values, {resetForm}) => {
        dispatch(login(values)).then((res) => {
            console.log(res);
            if (res.type === 'user/login/rejected') {
                navigate('')
                toast.error("Login fail!");
                resetForm();
            }
            else {
                if(res.payload.data.roles[0].authority==="ROLE_ADMIN"){
                    navigate('/admin/listUser')
                } else {
                navigate('')}
                toast.success("Login successful!");
                setShowLoginModal(false);
            }
        })
    }

    function showModalLogin() {
        setShowLoginModal(true);
    }

    return (
        <>
            <div onClick={() => showModalLogin()} className="sub-login-item">Đăng nhập</div>

            <Modal
                show={showLoginModal}
                onHide={() => setShowLoginModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Formik initialValues={{username: '', password: ''}}
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
                                    <label htmlFor="exampleInputEmail1">Email/Uername:<span className={'text-red'}> *</span></label>
                                    <Field name={'username'} type="text" className={'form-control'} id='exampleInputEmail1'
                                           aria-describedby='emailHelp'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password:<span className={'text-red'}> *</span></label>
                                    <Field name={'password'} type="password" className={"form-control"}
                                           id="exampleInputPassword1"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-edit-modal">
                                    <img src="" alt=""/>
                                    Submit
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
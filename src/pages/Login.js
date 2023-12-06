import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../services/userService";
import {toast} from "react-toastify";
import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import Register from "./Register";

export default function Login() {

    const [showLoginModal, setShowLoginModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (values, {resetForm}) => {
        dispatch(login(values)).then((res) => {
            if (res.type === 'user/login/rejected') {
                navigate('')
                toast.error("Login fail!");
                resetForm();
            } else {
                navigate('')
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
            >
                <Formik initialValues={{username: '', password: ''}}
                        onSubmit={(values, formikBag) => {
                            handleLogin(values, formikBag);
                        }}>
                    <Form>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email/Uername</label>
                            <Field name={'username'} type="text" className={'form-control'} id='exampleInputEmail1'
                                   aria-describedby='emailHelp'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <Field name={'password'} type="password" className={"form-control"}
                                   id="exampleInputPassword1"/>
                        </div>
                        <button style={{width: '100%', borderRadius: '5px'}} type="submit"
                                className="btn btn-primary">Submit
                        </button>

                        <Register />

                        <div style={{width: '100%', borderRadius: '5px', marginTop: '16px'}} type="submit"
                                    className="btn btn-secondary">Register
                        </div>
                    </Form>
                </Formik>
            </Modal>
        </>
    )
}
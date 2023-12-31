import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {editPasswordUser, findUserById} from "../../services/userService";
import {ChangePasswordSchema} from "../../validate/validate";

export default function ChangePassword({nameClass}) {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userDetail = useSelector(state => {
        return state.userDetail.userDetail
    })

    useEffect(() => {
        dispatch(findUserById(JSON.parse(localStorage.getItem('user')).id));
    },[])

    function showModalRegister() {
        setShowModal(true);
    }

    const handleSubmit = async (values, {resetForm}) => {

        if(values.oldPassword === '' && values.newPassword === '' && values.confirmNewPassword === ''
        || values.newPassword !== values.confirmNewPassword) {
            toast.error("Cập nhật mật khẩu thất bại!");
        } else {
            let id = JSON.parse(localStorage.getItem('user')).id;
            let data = {id: id, ...values};
            console.log(data)
            await dispatch(editPasswordUser(data)).then((res) => {
                console.log(res)
                if(res.type === 'user/editPassword/rejected') {
                    navigate('')
                    toast.error("Cập nhật mật khẩu thất bại!");
                } else {
                    navigate('')
                    toast.success("Cập nhật mật khẩu thành công!");
                    setShowModal(false);
                }
            })
        }
    }

    return (
        <>
            <div onClick={() => showModalRegister()} className={`${nameClass}`}>Đổi mật khẩu</div>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Formik initialValues={{oldPassword: '', newPassword: '', confirmNewPassword: ''}}
                        validationSchema={ChangePasswordSchema}
                        onSubmit={(values, formikBag) => {
                            handleSubmit(values, formikBag);
                        }}>
                    <Form>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Đổi mật khẩu
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Old Password:<span className={'text-red'}> *</span></label>
                                    <Field name={'oldPassword'} type="password" className={'form-control'}/>
                                    <span className='color-red'><ErrorMessage name={'oldPassword'}></ErrorMessage></span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password:<span className={'text-red'}> *</span></label>
                                    <Field name={'newPassword'} type="password" className={"form-control"}/>
                                    <span className='color-red'><ErrorMessage name={'newPassword'}></ErrorMessage></span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Confirm Password:<span className={'text-red'}> *</span></label>
                                    <Field name={'confirmNewPassword'} type="password" className={"form-control"}/>
                                    <span className='color-red'><ErrorMessage name={'confirmNewPassword'}></ErrorMessage></span>
                                </div>

                                <button style={{width: '100%', borderRadius: '5px'}} type="submit"
                                        className="btn btn-primary">Submit
                                </button>

                                <div onClick={() => setShowModal(false)} style={{width: '100%', borderRadius: '5px', marginTop: '16px'}}
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
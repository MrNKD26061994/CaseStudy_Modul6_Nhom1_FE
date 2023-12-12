import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {Modal} from "react-bootstrap";
import {closeFormEdit, editDetailUser, findUserById, getName, openFormEdit} from "../../../services/userService";
import {toast} from "react-toastify";

import "./style.css"

export default function UserDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showEditUserModal, setShowEditUserModal] = useState(false);

    const userDetail = useSelector(state => {
        return state.userDetail.userDetail
    })

    const showModalEditUser = async () => {
        setShowEditUserModal(true);
    }

    const handleEditUser = async (values, {resetForm}) => {
        if(values.phone === '' || values.phone === null) {
            toast.error("Phone number isEmpty!");
        } else {
            let dataTemp = {...values};
            let data = {...userDetail}
            Object.keys(data).map(key => {
                if(dataTemp[key] !== undefined) {
                    data[key] = dataTemp[key];
                }
            })
            await dispatch(editDetailUser(data)).then((res) => {
                if(res.type === 'user/login/rejected') {
                    navigate('')
                    toast.error("Login fail!");
                } else {
                    navigate('')
                    toast.success("Edit successful!");
                    setShowEditUserModal(false);
                }
            })
            navigate('')
        }

    }

    const attributeName = useSelector(state => {
        return state.nameEditOne.nameEditOne
    })
    const isActiveEdit = useSelector(state => {
        return state.isActiveEdit.isActiveEdit
    })
    const showFormEditFirstname = async (name) =>{
        dispatch(openFormEdit()).then(() => {})
        dispatch(getName(name)).then(() => {})

    }
    function offFormEditFirstname(name) {
        dispatch(closeFormEdit()).then(() => {})
        // dispatch(getName(name)).then(() => {})
    }

    return (
        <>
            <div className="container">
                <h1>Thông tin tài khoản</h1>
                <button onClick={() => showModalEditUser()} className={'btn btn-outline-warning'}>Cập nhật thông tin</button>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th scope="row">Username</th>
                        <td>{userDetail.username}</td>
                        <td>Action</td>
                    </tr>

                    <tr className={(attributeName === `FirstName`) ?
                                isActiveEdit ? 'noneEdit' : 'blogEdit'
                                : 'blogEdit'
                    } id={`blockFirstName`}>

                        <th scope="row">Firstname</th>
                        {userDetail.firstname === undefined ?
                            <td style={{opacity: '.5'}}>Cập nhật thông tin</td>
                            :
                            <td>{userDetail.firstname}</td>
                        }
                        <td>
                            <button className={"btn btn-outline-info"} onClick={() => showFormEditFirstname('FirstName')}>Sửa</button>
                        </td>

                    </tr>

                    <tr className={(attributeName === `FirstName`) ?
                        isActiveEdit ? 'blogEdit' : 'noneEdit'
                        : 'noneEdit'
                    } id={`formFirstName`}>

                        <th scope="row">Firstname</th>
                        {userDetail.firstname === undefined ?
                            <td style={{opacity: '.5'}}>Cập nhật thông tin</td>
                            :
                            <td>{userDetail.firstname}</td>
                        }
                        <td>
                            <button className={"btn btn-outline-info"}>Lưu</button>
                            <button className={"btn btn-outline-info"} onClick={offFormEditFirstname}>Tắt</button>

                        </td>

                    </tr>


                    <tr className={(attributeName === `Lastname`) ?
                                isActiveEdit ? 'noneEdit' : 'blogEdit'
                                : 'blogEdit'
                    } id={`blockLastname`}>

                        <th scope="row">Firstname</th>
                        {userDetail.lastname === undefined ?
                            <td style={{opacity: '.5'}}>Cập nhật thông tin</td>
                            :
                            <td>{userDetail.lastname}</td>
                        }
                        <td>
                            <button className={"btn btn-outline-info"} onClick={() => showFormEditFirstname('Lastname')}>Sửa</button>
                        </td>

                    </tr>

                    <tr className={(attributeName === `Lastname`) ?
                        isActiveEdit ? 'blogEdit' : 'noneEdit'
                        : 'noneEdit'
                    } id={`formLastname`}>

                        <th scope="row">Lastname</th>
                        {userDetail.lastname === undefined ?
                            <td style={{opacity: '.5'}}>Cập nhật thông tin</td>
                            :
                            <td>{userDetail.lastname}</td>
                        }
                        <td>
                            <button className={"btn btn-outline-info"}>Lưu</button>
                            <button className={"btn btn-outline-info"} onClick={offFormEditFirstname}>Tắt</button>

                        </td>

                    </tr>
















                    <tr>
                        <th scope="row">Lastname</th>
                        {userDetail.lastname === undefined ?
                            <td style={{opacity: '.5'}}>Cập nhật thông tin</td>
                            :
                            <td>{userDetail.lastname}</td>
                        }
                    </tr>




                    <tr>
                        <th scope="row">Address</th>
                        {userDetail.address === undefined ?
                            <td style={{opacity: '.5'}}>Cập nhật thông tin</td>
                            :
                            <td>{userDetail.address}</td>
                        }
                    </tr>
                    <tr>
                        <th scope="row">Phone</th>
                        {userDetail.phone === undefined ?
                            <td style={{opacity: '.5'}}>Cập nhật thông tin</td>
                            :
                            <td>{userDetail.phone}</td>
                        }
                    </tr>
                    </tbody>
                </table>
            </div>


            <Modal
                show={showEditUserModal}
                onHide={() => setShowEditUserModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Formik initialValues={{username: userDetail.username, firstname: userDetail.firstname, lastname: userDetail.lastname, address: userDetail.address, phone: userDetail.phone}}

                        onSubmit={(values, formikBag) => {
                            handleEditUser(values, formikBag);
                        }}
                        enableReinitialize={true}
                >
                    <Form>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Cập nhật thông tin
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email/Uername</label>
                                    <Field disabled={true} name={'username'} type="text" className={'form-control'} id='exampleInputEmail1'
                                           aria-describedby='emailHelp'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Firstname</label>
                                    <Field name={'firstname'} type="text" className={"form-control"}
                                           id="exampleInputPassword1"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Lastname</label>
                                    <Field name={'lastname'} type="text" className={"form-control"}
                                           id="exampleInputPassword2"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Address</label>
                                    <Field name={'address'} type="text" className={"form-control"}
                                           id="exampleInputPassword2"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Phone:<span className={'text-red'}> *</span></label>
                                    <Field name={'phone'} type="text" className={"form-control"}
                                           id="exampleInputPassword2"/>
                                </div>
                                <button style={{width: '100%', borderRadius: '5px'}} type="submit"
                                        className="btn btn-primary">Submit
                                </button>

                                <div onClick={() => setShowEditUserModal(false)} style={{width: '100%', borderRadius: '5px', marginTop: '16px'}}
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
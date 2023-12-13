import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {LoginUserSchema} from "../../../validate/validate";
import Register from "../../Register";
import {addHouse, getHouses} from "../../../services/houseService";

export default function AddHouse() {
    const [showAddHouseModal, setShowAddHouseModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector( state => {
        console.log(state)
        return state;
    })

    const handleAddHouse = async (values) => {
        let id = JSON.parse(localStorage.getItem("user")).id
        // console.log(localStorage.getItem("user"))
        let data = {...values, owner: {id: id}}
        // console.log(data)
        await dispatch(addHouse(data))
        navigate('/')
    }
    return (
        <div className={'row'}>
            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Thêm nhà</h1>
                <Formik initialValues={{name: '', address: '', bedroom: '', bathroom: '',description: '', price: ''}} onSubmit={(values) => {
                    handleAddHouse(values)
                }}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tên Nhà</label>
                            <Field type="text" className={'form-control'} name={'name'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                            <Field type="text" className={'form-control'} name={'address'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số Phòng ngủ</label>
                            <Field type="text" className={'form-control'} name={'bedroom'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số phòng tắm</label>
                            <Field type="text" className={'form-control'} name={'bathroom'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mô tả chi tiết</label>
                            <Field type="text" className={'form-control'} name={'description'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Giá Nhà</label>
                            <Field type="text" className={'form-control'} name={'price'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )

}
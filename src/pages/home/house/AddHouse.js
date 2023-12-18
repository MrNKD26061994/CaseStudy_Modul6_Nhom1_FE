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
        navigate('/houses')
    }
    return (
        <div className={'row'}>
            <div className="offset-3 col-6 mt-5">
                <h1 style={{textAlign: 'center'}}>Thêm căn nhà</h1>
                <Formik initialValues={{name: '', address: '', bedroom: '', bathroom: '',description: '', price: ''}} onSubmit={(values) => {
                    handleAddHouse(values)
                }}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Tên nhà</label>
                            <Field type="text" className="form-control" id="name" placeholder="Nhập tên nhà"
                                   name="name"/>
                            <ErrorMessage name="name" className="text-danger" component="small"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                            <Field type="text" className={'form-control'} name={'address'} placeholder="Nhập địa chỉ"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bedroom" className="form-label">Số phòng ngủ</label>
                            <Field as="select" className="form-select" name="bedroom">
                                <option value="">---Vui lòng chọn---</option>
                                {Array.from({length: 10}, (v, i) => (
                                    <option value={i + 1} key={i + 1}>{i + 1}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="bedroom" className="text-danger" component="small"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bathroom" className="form-label">Số phòng tắm</label>
                            <Field as="select" className="form-select" name="bathroom">
                                <option value="">---Vui lòng chọn---</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Field>
                            <ErrorMessage name="bathroom" className="text-danger" component="small"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mô tả chi tiết</label>
                            <Field type="text" className={'form-control'} name={'description'} placeholder="Nhập mô tả" />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="price">Giá tiền (VNĐ/ngày)</label>
                            <Field className="form-control" id="price" type="number" name="price"
                                   placeholder="Nhập giá tiền"/>
                            <ErrorMessage name="price" className="text-danger" component="small"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )

}
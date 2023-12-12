import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import customAxios from "../../services/api";
import "./CSS-Admin-ListUser.css";
const RenterList = () => {
    const navigate = useNavigate();
    const [listUser, setListUser]= useState([]);
    useEffect(() => {
        customAxios.get('admin/renters').then(res => {
            setListUser(res.data)
        })
    }, []);
    return (
        <>
            <div className="container_table">
                <table className="table table-striped">
                    <thead>
                    <tr className={"Header_table"}>
                        <th scope="col" className={"stt"}>STT</th>
                        <th scope="col" className={"account"}>Tài khoản</th>
                        <th scope="col" className={"name"}>Họ và tên</th>
                        <th scope="col" className={"address"}>Địa chỉ</th>
                        <th scope="col" className={"email"}>Email</th>
                        <th scope="col" className={"phone"}>Điện thoại</th>
                        <th scope="col" className={"image"}>Ảnh</th>
                        <th scope="col" className={"status"}>Trạng thái</th>
                        <th style={{width: 100, columnSpan: 2}} className={"bottom2"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {listUser.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.username}</td>
                            <td>{item.firstname + " " + item.lastname}</td>
                            <td>{item.province + "/" + item.district + "/" + item.ward + "/" + item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><img style={{width: 50, height: 50}} src={item.avatar} alt="Avatar"/></td>
                            <td>{item.status=="AdminConfirm"?"Chờ xác nhận":""}</td>
                            <td><button style={{width:"80px"}} type="button" className="btn btn-outline-primary">Xem</button></td>
                            <td><button style={{width:"80px"}} type="button" className="btn btn-outline-primary">Khóa</button></td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RenterList;
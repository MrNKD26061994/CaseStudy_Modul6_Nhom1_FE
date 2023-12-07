import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import customAxios from "../../services/api";

const ShowListUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [listUser, setListUser]= useState([]);
    useEffect(() => {
        customAxios.get('admin/users').then(res => {
            setListUser(res.data)
        })
    }, []);
    return (
        <>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên tài khoản</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Email</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Ảnh đại diện</th>
                    <th style={{width:100, columnSpan:2}}></th>

                </tr>
                </thead>
                <tbody>
                {listUser.map((item, index)=>(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.username}</td>
                        <td>{item.firstname+" "+item.lastname}</td>
                        <td>{item.province + "/"+item.district + "/"+ item.ward  + "/"+item.address}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td><img style={{width:50,height: 50}} src={item.avatar} alt="Avatar"/></td>
                        <td><button style={{width:150}} type="button" className="btn btn-outline-primary">Xem chi tiết</button></td>
                        <td><button style={{width:150}} type="button" className="btn btn-outline-primary">Khóa tài khoản</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};
export default ShowListUser;
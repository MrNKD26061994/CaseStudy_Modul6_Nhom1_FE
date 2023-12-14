import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./CSS-Admin-ListUser.css";
import {useDispatch, useSelector} from "react-redux";
import {AdminBlockUser, AdminGetListOwner, AdminGetListRenter, AdminOpenUser} from "../../services/userService";
import {toast} from "react-toastify";
const RenterList = () => {
    const dispatch = useDispatch();
    const  AdminOpenUserHTML = async (user) =>{
        await dispatch(AdminBlockUser(user));
        await dispatch(AdminGetListRenter());
        await toast("Thao tác thành công!")
    }
    const  AdminBlockUserHTML = async (user) =>{
        await dispatch(AdminOpenUser(user));
        await dispatch(AdminGetListRenter());
        await toast("Thao tác thành công!")
    }

    useEffect(() =>  {
        dispatch(AdminGetListRenter())
    }, []);
    const listUser = useSelector(state=>{
        return state.users.listUser.data;
    })
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
                        <th scope="col" className={"image"}>Xem</th>
                        <th scope="col" className={"image"}>Khóa</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listUser && listUser.map((item, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.username}</td>
                            <td>{item.firstname + " " + item.lastname}</td>
                            <td>{item.province + "/" + item.district + "/" + item.ward + "/" + item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><img style={{width: 50, height: 50}} src={item.avatar} alt="Avatar"/></td>
                            <td>{item.status=="AdminConfirm"?"Chờ xác nhận":""}</td>
                            <td><Link className={"btn btn-outline-primary"} to={"/admin/showUserDetail/"+item.id}>Xem</Link></td>
                            <td>
                                <div className="form-check form-switch mt-2">
                                    {item.status == ("Blocked") ?
                                        <input onClick={() => {
                                            AdminOpenUserHTML(item)
                                        }} className="form-check-input" type="checkbox" id="switchDisabled"
                                               checked={false}/> :
                                        <input onClick={() => {
                                            AdminBlockUserHTML(item)
                                        }} className="form-check-input" type="checkbox" id="switchDisabled"
                                               checked={true}/>}
                                </div>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RenterList;
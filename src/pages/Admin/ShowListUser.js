import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import customAxios from "../../services/api";
import "./CSS-Admin-ListUser.css";
import {
    AdminBlockUser,
    AdminGetListOwner,
    AdminGetListRenter,
    AdminGetListUser,
    AdminOpenUser
} from "../../services/userService";
import {toast} from "react-toastify";
const ShowListUser = () => {
    const dispatch = useDispatch();
    const  AdminOpenUserHTML = async (user) =>{
        await dispatch(AdminBlockUser(user));
        await dispatch(AdminGetListUser());
        await toast("Thao tác thành công!")
    }
    const  AdminBlockUserHTML = async (user) =>{
        await dispatch(AdminOpenUser(user));
        await dispatch(AdminGetListUser());
        await toast("Thao tác thành công!")
    }

    useEffect(() =>  {
        dispatch(AdminGetListUser())
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
                        <th scope="col">STT</th>
                        <th scope="col">Tài khoản</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Email</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col" className={"image"}>Xem</th>
                        <th scope="col" className={"image"}>Khóa</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listUser && listUser.map((item, index)=>(
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{item.username}</td>
                            <td>{item.firstname+" "+item.lastname}</td>
                            <td>{item.province + "/"+item.district + "/"+ item.ward  + "/"+item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><img style={{width:50,height: 50}} src={item.avatar} alt="Avatar"/></td>
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
export default ShowListUser;
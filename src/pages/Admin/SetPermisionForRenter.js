import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import customAxios from "../../services/api";
import "./CSS-Admin-ListUser.css";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {AdminApproveRenterToOwner, ShowListUserAreWaitingConfirmed} from "../../services/userService";
const SetPermisionForRenter = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  approveRenterAccount = async (user) =>{
          await dispatch(AdminApproveRenterToOwner(user));
        await  dispatch(ShowListUserAreWaitingConfirmed());
           toast("bạn đã câp quyền chủ nhà thành công!")
    }

    useEffect(() =>  {
        dispatch(ShowListUserAreWaitingConfirmed())
    }, []);

    const listUser = useSelector(state=>{
        console.log("AAAAAAAAAAAAA", state.users.listUser);
        return state.users.listUser;
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
                        <th scope="col" className={"image"} colSpan="2">Chứng minh thư</th>
                        <th style={{width: 100, columnSpan: 2}} className={"bottom2"}></th>
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
                            <td><img style={{width: 50, height: 50}} src={item.frontside} /></td>
                            <td><img style={{width: 50, height: 50}} src={item.backside} /></td>
                            <td>
                                <button onClick={() => {
                                    approveRenterAccount(item)}} style={{width:"80px"}} type="button" className="btn btn-outline-primary">Duyệt</button></td>
                            <td><button style={{width:"80px"}} type="button" className="btn btn-outline-primary">Hủy</button></td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SetPermisionForRenter;
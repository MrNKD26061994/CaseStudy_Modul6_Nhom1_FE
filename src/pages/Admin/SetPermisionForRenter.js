import React, {useEffect, useState} from 'react';
import "./CSS-Admin-ListUser.css";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {
    AdminApproveRenterToOwner,
    refuseUserBecomeOwner,
    ShowListUserAreWaitingConfirmed
} from "../../services/userService";
const SetPermisionForRenter = () => {
    const dispatch = useDispatch();
    const  approveRenterAccount = async (user) =>{
          await dispatch(AdminApproveRenterToOwner(user));
        await  dispatch(ShowListUserAreWaitingConfirmed());
           toast("bạn đã câp quyền chủ nhà thành công!")
    }
    const refuseRenter = async (user)=>{
        if (window.confirm("Bạn chắc chắn hủy yêu cầu này?")) {
            await dispatch(refuseUserBecomeOwner(user));
            await  dispatch(ShowListUserAreWaitingConfirmed());
            toast("Hủy thành công.")
        }
    }
    useEffect(() =>  {
        dispatch(ShowListUserAreWaitingConfirmed())
    }, []);

    const listUser = useSelector(state=>{
        return state.users.listUserWaitingConfirm;
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
                        <th scope="col" className={"image"}>Duyệt</th>
                        <th scope="col" className={"image"}>Hủy</th>
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
                            <td><button onClick={()=>{refuseRenter(item)}} style={{width:"80px"}} type="button" className="btn btn-outline-primary">Hủy</button></td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SetPermisionForRenter;
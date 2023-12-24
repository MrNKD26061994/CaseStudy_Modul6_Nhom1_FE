import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./CSS-Admin-ListUser.css";
import {useDispatch, useSelector} from "react-redux";
import {
    AdminApproveRenterToOwner, AdminBlockAndOpenUser, AdminBlockUser,
    AdminGetListOwner, AdminOpenUser,
    ShowListUserAreWaitingConfirmed
} from "../../services/userService";
import {toast} from "react-toastify";
import eyeImage from "../../assets/imgs/container/1-1-2.png"

const OwnerList = () => {
    const dispatch = useDispatch();
    const  AdminOpenUserHTML = async (user) =>{
         await dispatch(AdminBlockUser(user));
         await dispatch(AdminGetListOwner());
         await toast("Thao tác thành công!")
    }
    const  AdminBlockUserHTML = async (user) =>{ ///Khóa
        if (window.confirm("Bạn chắc chăn muốn khóa tài khoản này???")) {
            await dispatch(AdminOpenUser(user));
            await dispatch(AdminGetListOwner());
            await toast("Thao tác thành công!")
        }
    }
    useEffect(() =>  {
        dispatch(AdminGetListOwner())
    }, []);
    const listUser = useSelector(state=>{
        console.log("List chủ nhà ", state);
        return state.users.listUser.data;
    })
    return (
        <>
            <div className="container_table">
                <div className="nav-userInfo">
                    <h1 style={{display:"flex", justifyContent:"center", marginBottom:"20px", marginTop:"20px"}}>Danh sách chủ nhà</h1>
                </div>
                <div className="nav-userInfo">
                    <h1 style={{display:"flex", justifyContent:"center", marginBottom:"20px", marginTop:"20px"}}>Danh sách chủ nhà</h1>
                </div>
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
                            <td>
                                <Link to={"/admin/showUserDetail/"+item.id}><img className={"eyeImageCSS"}
                                    src={eyeImage} alt=""/></Link>
                            </td>

                            <td>
                                <div className="form-check form-switch mt-2">
                                    {item.status==("Blocked") ?
                                        <input onClick={() => {AdminOpenUserHTML(item)}} className="form-check-input" type="checkbox" id="switchDisabled"  checked={false}/> :
                                        <input onClick={() => {AdminBlockUserHTML(item)}}  className="form-check-input" type="checkbox" id="switchDisabled" checked={true}/>}
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

export default OwnerList;
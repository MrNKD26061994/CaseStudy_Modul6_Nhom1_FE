import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CancelBookingTheHouse, UserWantToSeeBookingHistory} from "../../../services/bookingService";
import {Link} from "react-router-dom";
import eyeImage from "../../../assets/imgs/container/1-1-2.png";
import "./UerSeeBookingHistory.css";
import {toast} from "react-toastify";

const UserSeeBookingHistory = () => {
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem("user"))

    useEffect( () => {
         dispatch(UserWantToSeeBookingHistory(user)).then(()=>{},[]);
    }, []);
    const bookings = useSelector(state => {
        return state.bookings.bookings.data;
    })

    function confirmCancel(item) {
        if (window.confirm("Bạn có muốn hủy lịch đã đặt?")) {
            CancelBooking(item);
        }
    }
    function CancelBooking(item){
        dispatch(CancelBookingTheHouse(item)).then(res=>{
            let err = res.type;
            if(err==="booking/CancelBookingTheHouse/rejected"){
                toast("Quá sát ngày, bạn không thể hủy, Liên hệ chủ nhà để thực hiện thao tác này!")

            } else if(err==="booking/CancelBookingTheHouse/fulfilled"){
                dispatch(UserWantToSeeBookingHistory(user)).then(()=>{},[]);
                toast("Hủy thành công!")
            }
        })
    }
    return (
        <>
            <div className="container_table">
                <div className="nav-userInfo">
                   <h1 style={{display:"flex", justifyContent:"center", marginBottom:"20px", marginTop:"20px"}}>Lịch sử đặt</h1>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr className={"Header_table"}>
                        <th scope="col" className={"stt"}>STT</th>
                        <th scope="col" className={"account"}>Thời gian đặt lịch</th>
                        <th scope="col" className={"name"}>Tên nhà</th>
                        <th scope="col" className={"address"}>Tổng tiền</th>
                        <th scope="col" className={"email"}>Địa chỉ</th>
                        <th scope="col" className={"phone"}>Trạng thái</th>
                        <th scope="col" className={"image"}>Xem</th>
                        <th scope="col" className={"image"}>Hủy</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookings && bookings.map((item, index) => (
                        <tr className={"item-line-table"}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.create_at}</td>
                            <td>{item.house.name}</td>
                            <td>{item.total}</td>
                            <td>{item.house.province + "-" + item.house.district + "-" + item.house.ward + "-" + item.house.address}</td>
                            <td>{item.status}</td>

                            <td><Link to={"/house-detail/" + item.id}>
                                <img className={"eyeImageCSS"} src={eyeImage} alt=""/>
                            </Link></td>

                            <td>
                                <div className="form-check form-switch mt-2">
                                    {item.status===("Đã hủy") || item.status===("Đã trả phòng") || item.status===("Đang ở")|| item.status===("Đã thanh toán") ?
                                        <input className="form-check-input" type="checkbox" id="switchDisabled"  checked={false}/> :
                                        <input onClick={() => {confirmCancel(item)}}  className="form-check-input" type="checkbox" id="switchDisabled" checked={true}/>}
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

export default UserSeeBookingHistory;
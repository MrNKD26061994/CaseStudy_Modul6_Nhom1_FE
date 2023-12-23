import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    ShowBookingHistoryForOwner,
    ShowListBookingByHouseIDAndUserIdAndStatusEquaDaThanhToan
} from "../../../services/bookingService";
import {logDOM} from "@testing-library/react";
import {Link} from "react-router-dom";
import eyeImage from "../../../assets/imgs/container/1-1-2.png";

const ReviewBookingHistory = () => {
    const dispatch = useDispatch();
    const bookings=useSelector((state)=>{
        console.log("đã thanh toán",state.bookings.bookings.data)
        return state.bookings.bookings.data;
    })

    useEffect(() => {
        dispatch(ShowBookingHistoryForOwner(JSON.parse(localStorage.getItem("user")).id));
    }, [])

    return (
        <div>
            <div className="nav-userInfo">
                <h1 style={{display:"flex", justifyContent:"center", marginBottom:"20px", marginTop:"20px"}}>Xem người đặt phòng và đang ở</h1>
            </div>
            <div className="container_table">
                <table className="table table-striped">
                    <thead>
                    <tr className={"Header_table"}>
                        <th scope="col" className={"stt"}>STT</th>
                        <th scope="col" >Tên nhà</th>
                        <th scope="col" className={"address"}>Địa chỉ chủ nhà</th>
                        <th scope="col" className={"account"}>Người đặt</th>
                        <th scope="col" className={"name"}>Ngày đặt</th>
                        <th scope="col" className={"address"}>Ngày đến</th>
                        <th scope="col" className={"email"}>Ngày đi</th>
                        <th scope="col" className={"phone"}>Điện thoại</th>


                    </tr>
                    </thead>
                    <tbody>
                    {bookings && bookings.map((item, index) => (
                        <tr>
                            <td scope="row">{index + 1}</td>
                            <td>{item.house.name}</td>
                            <td>{item.house.address + "-" + item.house.ward + "-" + item.house.district + "-" + item.house.province}</td>
                            <td>{item.user.firstname + " " + item.user.lastname}</td>
                            <td>{(item.create_at)}</td>
                            <td>{(item.startTime)}</td>
                            <td>{(item.endTime)}</td>
                            <td>{item.user.phone}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewBookingHistory;
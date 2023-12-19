import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    createBooking,
    findBookingNotCheckin,
    getABooking, updateBooking,
} from "../../../services/bookingService";
import "./BookAHouse.css";
import 'react-datepicker/dist/react-datepicker.css'
import CalendarTest from "../../../components/CalendarTest";
import Calendar from "../../../components/Calendar";
import {getNumberOfNights, totalMoney} from "../../../function/function";
import dayjs from "dayjs";
import {toast} from "react-toastify";

const BookAHouse = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const param = useParams();

    useEffect(async () => {
      await  dispatch(getABooking(param.id)).then((res) => {
          dispatch(findBookingNotCheckin(res.payload.data.house.id))
      });

    }, []);
    const aBooking = useSelector(state => {
        return state.booking.booking.data;
    })
    const listDay =useSelector(state=>{
        return state.bookings.listDay;
    })
    // function showStartTimeForm() {
    //     setStartTimeForm(true)
    // }
    async function handClick() {
        console.log(aBooking)
        let total = totalMoney(aBooking.startTime, aBooking.endTime, aBooking.house.price)
        let value = {...aBooking, startTime: dayjs(aBooking.startTime).add(7, 'hour'), endTime: dayjs(aBooking.endTime).add(7, 'hour'), total: total, status: "Đã thanh toán"}
        console.log(value)
        await dispatch(updateBooking(value)).then((res) => {
            if(res.type === 'user/edit/rejected') {
                navigate('/')
                toast.error("Cập nhật thất bại!");
            } else {
                console.log(res)
                toast.success("Đặt nhà thành công!");
            }
        })
    }

    // console.log(listDay)
    return (
        <>
            {aBooking &&
                <div className="common">
                    <h1 id={"UserInformation"}>Xác nhận và thanh toán</h1>

                    <div className="user-information">
                        <div className={"item-left"}>
                            <div className={`item-left-date`}>
                                <div className="infoItem-left">
                                    <h4>Nhập chuyến đi của bạn</h4>
                                    <div className="infoItem-TimeForm">
                                        <div>
                                            <p>{"Ngày đến: " + aBooking.startTime}</p>
                                            <p>{"Ngày trả: " + aBooking.endTime}</p>
                                        </div>
                                        <button
                                                className={"btn btn-outline-primary"}>Chỉnh sửa
                                        </button>
                                    </div>
                                    {
                                                <div className="form-group">
                                                    <Calendar listDay={listDay} startDate={aBooking.startTime} endDate={aBooking.endTime}></Calendar>
                                                    <button type="submit" className={"btn btn-outline-primary"}>Lưu
                                                    </button>
                                                </div>
                                    }
                                </div>
                            </div>

                            <div className={`item-left-date`}>
                                <div className="infoItem-TimeForm">
                                    <p>Giờ nhận phòng 12:00 PM (Trưa)</p>
                                </div>
                            </div>
                            <div className={`item-left-payment`}>
                                <div className="infoItem-left">
                                    <h4>Thanh toán bằng</h4>
                                    <table style={{border: "5px"}}>
                                        <thead></thead>
                                        <tbody>
                                        <tr>
                                            <td><input style={{width: "100%"}} type="text"
                                                       placeholder={"Thẻ tín dụng"}/></td>
                                        </tr>
                                        <tr>
                                            <td><input style={{width: "100%"}} type="text" placeholder={"Số thẻ"}/></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" placeholder={"Ngày hết hạn"}/></td>
                                            <td><input type="text" placeholder={"CNN"}/></td>
                                        </tr>
                                        <tr>
                                            <td><input style={{width: "100%"}} type="text"
                                                       placeholder={"Mã bưu chính"}/></td>
                                        </tr>
                                        <tr>
                                            <td><input style={{width: "100%"}} type="text" placeholder={"Quốc gia"}/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <button onClick={handClick}>Xác nhận và thanh toán</button>
                                <Link className={"btn btn-outline-primary"} to={"/ShowListHouseForHomePage"}>Quay
                                    lại</Link>
                            </div>


                        </div>
                        <div className="item-right">
                            <div className="user-right-box">
                                <div className="user-right-table">
                                    <table>
                                        <tr>
                                            <th>
                                                <img className={"thumbnailHousePhoto"} style={{width: "100px", height: "100px"}}
                                                     src={aBooking.house.thumbnail} alt=""/>
                                            </th>
                                            <th>
                                                <table className={"smallTable-right"}>
                                                    <tr>{aBooking.house.name}</tr>
                                                    <tr> {aBooking.house.province + "-" + aBooking.house.district + "-" + aBooking.house.ward}</tr>
                                                    <tr></tr>
                                                    <tr>Đánh giá</tr>
                                                </table>
                                            </th>
                                        </tr>

                                    </table>
                                </div>
                                <hr/>
                                <div className="user-right-item">
                                    {/*<h3>Chi tiết giá</h3>*/}
                                    {/*<h5>{"$" + aBooking.house.price + "x" + getNumberOfNights(aBooking.startTime, aBooking.endTime) + "đêm"} </h5>*/}


                                    <div className="house-price d-flex justify-content-between mt-4 w-100 mb-4">
                                        <div className="house-price-left">${aBooking.house.price} x {getNumberOfNights(aBooking.startTime, aBooking.endTime)} đêm</div>
                                        <div className="house-price-right">${totalMoney(aBooking.startTime, aBooking.endTime, aBooking.house.price)}</div>
                                    </div>

                                    <p>Phí dịch vụ kèm theo: $0</p>

                                    <div className="price-pay d-flex justify-content-between w-100 pt-4">
                                        <div className="price-pay-left">Tổng tiền</div>
                                        <div className="price-pay-right">${totalMoney(aBooking.startTime, aBooking.endTime, aBooking.house.price)}</div>
                                    </div>
                                </div>
                                {/*<hr/>*/}
                                {/*<div className="user-right-item">*/}
                                {/*    <h3>Tổng tiền</h3>*/}
                                {/*    <h5>Số tiền</h5>*/}
                                {/*</div>*/}
                            </div>
                        </div>

                    </div>
                </div>}
        </>
    );
};

export default BookAHouse;
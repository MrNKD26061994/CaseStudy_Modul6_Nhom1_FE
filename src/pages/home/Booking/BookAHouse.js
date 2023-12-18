import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    getABooking,
} from "../../../services/bookingService";
import "./BookAHouse.css";
import dayjs from "dayjs";
import 'react-datepicker/dist/react-datepicker.css'
import vi from 'date-fns/locale/vi';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers-pro';
import {AdapterDayjs} from '@mui/x-date-pickers-pro/AdapterDayjs';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {date} from "yup";
import {toast} from "react-toastify";
import { parse, format } from 'date-fns';

const BookAHouse = (id) => {
    const dispatch = useDispatch();
    let [startTimeForm, setStartTimeForm] = useState(false);
    let [endTimeForm, setEndTimeForm] = useState(false);
    let obj = {};
    let startDate ="";
    let endDate="";


    useEffect(async () => {
      await  dispatch(getABooking(1));

    }, []);
    const aBooking = useSelector(state => {
        return state.booking.aBooking.data;
    })

    function showStartTimeForm() {
        setStartTimeForm(true)
    }
    //
    // function changeTime(dates) {
    //     if(dates && dates.length===2){
    //         startDate=dayjs(dates[0]).format("DD/MM/YYYY HH:MM");
    //         endDate=dayjs(dates[1]).format("DD/MM/YYYY HH:MM");
    //    obj={ id , startDate, endDate}
    //         console.log(obj,"hhhhhhhhhhhhhhh");
    //     } else {
    //         toast("Vui lòng lựa chọn ngày đên và đi")
    //     }
    //
    // }

    // function saveTheBookingRecord (){
    //
    // }

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
                                        <button onClick={() => showStartTimeForm()}
                                                className={"btn btn-outline-primary"}>Chỉnh sửa
                                        </button>
                                    </div>
                                    {startTimeForm &&
                                                <div className="form-group">
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DemoContainer components={['DateRangePicker']}>
                                                            <DateRangePicker dateFormat="dd/MM/yyyy hh:mm aa"
                                                                             locale={vi}/>
                                                        </DemoContainer>
                                                    </LocalizationProvider>
                                                    <button  type="submit" className={"btn btn-outline-primary"}>Lưu
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
                                <button>Xác nhận và thanh toán</button>
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
                                                    <tr> Toàn bộ căn hộ chung cư cao cấp</tr>
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
                                    <h3>Chi tiết nhà</h3>
                                    <h5>{"Giá: $" + aBooking.house.price}</h5>
                                    <p>Phí dịch vụ kèm theo: $0</p>
                                </div>
                                <hr/>
                                <div className="user-right-item">
                                    <h3>Tổng tiền</h3>
                                    <h5>Số tiền</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>}
        </>
    );
};

export default BookAHouse;
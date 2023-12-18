import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    getABooking,
} from "../../../services/bookingService";
import "./BookAHouse.css";
import 'react-datepicker/dist/react-datepicker.css'
import CalendarTest from "../../../components/CalendarTest";

const BookAHouse = () => {
    const param = useParams();
    const dispatch = useDispatch();
    let [startTimeForm, setStartTimeForm] = useState(false);


    // useEffect(async () => {
    //     console.log(param.id)
    //   await  dispatch(getABooking(param.id));
    //
    // }, []);
    // const aBooking = useSelector(state => {
    //     return state.booking.aBooking.data;
    // })
    // const listDay =useSelector(state=>{
    //     return state.bookings.listDay;
    // })
    // function showStartTimeForm() {
    //     setStartTimeForm(true)
    // }
    return (
        <>
            {/*{aBooking &&*/}
            {/*    <div className="common">*/}
            {/*        <h1 id={"UserInformation"}>Xác nhận và thanh toán</h1>*/}

            {/*        <div className="user-information">*/}
            {/*            <div className={"item-left"}>*/}
            {/*                <div className={`item-left-date`}>*/}
            {/*                    <div className="infoItem-left">*/}
            {/*                        <h4>Nhập chuyến đi của bạn</h4>*/}
            {/*                        <div className="infoItem-TimeForm">*/}
            {/*                            <div>*/}
            {/*                                <p>{"Ngày đến: " + aBooking.startTime}</p>*/}
            {/*                                <p>{"Ngày trả: " + aBooking.endTime}</p>*/}
            {/*                            </div>*/}
            {/*                            <button onClick={() => showStartTimeForm()}*/}
            {/*                                    className={"btn btn-outline-primary"}>Chỉnh sửa*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*                        {startTimeForm &&*/}
            {/*                                    <div className="form-group">*/}
            {/*                                        <CalendarTest listDay={listDay}></CalendarTest>*/}
            {/*                                        <button  type="submit" className={"btn btn-outline-primary"}>Lưu*/}
            {/*                                        </button>*/}
            {/*                                    </div>*/}
            {/*                        }*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div className={`item-left-date`}>*/}
            {/*                    <div className="infoItem-TimeForm">*/}
            {/*                        <p>Giờ nhận phòng 12:00 PM (Trưa)</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={`item-left-payment`}>*/}
            {/*                    <div className="infoItem-left">*/}
            {/*                        <h4>Thanh toán bằng</h4>*/}
            {/*                        <table style={{border: "5px"}}>*/}
            {/*                            <thead></thead>*/}
            {/*                            <tbody>*/}
            {/*                            <tr>*/}
            {/*                                <td><input style={{width: "100%"}} type="text"*/}
            {/*                                           placeholder={"Thẻ tín dụng"}/></td>*/}
            {/*                            </tr>*/}
            {/*                            <tr>*/}
            {/*                                <td><input style={{width: "100%"}} type="text" placeholder={"Số thẻ"}/></td>*/}
            {/*                            </tr>*/}
            {/*                            <tr>*/}
            {/*                                <td><input type="text" placeholder={"Ngày hết hạn"}/></td>*/}
            {/*                                <td><input type="text" placeholder={"CNN"}/></td>*/}
            {/*                            </tr>*/}
            {/*                            <tr>*/}
            {/*                                <td><input style={{width: "100%"}} type="text"*/}
            {/*                                           placeholder={"Mã bưu chính"}/></td>*/}
            {/*                            </tr>*/}
            {/*                            <tr>*/}
            {/*                                <td><input style={{width: "100%"}} type="text" placeholder={"Quốc gia"}/>*/}
            {/*                                </td>*/}
            {/*                            </tr>*/}
            {/*                            </tbody>*/}
            {/*                        </table>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                <div>*/}
            {/*                    <button>Xác nhận và thanh toán</button>*/}
            {/*                    <Link className={"btn btn-outline-primary"} to={"/ShowListHouseForHomePage"}>Quay*/}
            {/*                        lại</Link>*/}
            {/*                </div>*/}


            {/*            </div>*/}
            {/*            <div className="item-right">*/}
            {/*                <div className="user-right-box">*/}
            {/*                    <div className="user-right-table">*/}
            {/*                        <table>*/}
            {/*                            <tr>*/}
            {/*                                <th>*/}
            {/*                                    <img className={"thumbnailHousePhoto"} style={{width: "100px", height: "100px"}}*/}
            {/*                                         src={aBooking.house.thumbnail} alt=""/>*/}
            {/*                                </th>*/}
            {/*                                <th>*/}
            {/*                                    <table className={"smallTable-right"}>*/}
            {/*                                        <tr> Toàn bộ căn hộ chung cư cao cấp</tr>*/}
            {/*                                        <tr> {aBooking.house.province + "-" + aBooking.house.district + "-" + aBooking.house.ward}</tr>*/}
            {/*                                        <tr></tr>*/}
            {/*                                        <tr>Đánh giá</tr>*/}
            {/*                                    </table>*/}
            {/*                                </th>*/}
            {/*                            </tr>*/}

            {/*                        </table>*/}
            {/*                    </div>*/}
            {/*                    <hr/>*/}
            {/*                    <div className="user-right-item">*/}
            {/*                        <h3>Chi tiết nhà</h3>*/}
            {/*                        <h5>{"Giá: $" + aBooking.house.price}</h5>*/}
            {/*                        <p>Phí dịch vụ kèm theo: $0</p>*/}
            {/*                    </div>*/}
            {/*                    <hr/>*/}
            {/*                    <div className="user-right-item">*/}
            {/*                        <h3>Tổng tiền</h3>*/}
            {/*                        <h5>Số tiền</h5>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>}*/}
        </>
    );
};

export default BookAHouse;
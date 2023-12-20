import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {OwnerCheckIn, OwnerCheckOut, ShowListBookingOfTheOwner} from "../../../services/bookingService";
import {Link} from "react-router-dom";
import eyeImage from "../../../assets/imgs/container/1-1-2.png";
import {getDate} from "date-fns";
import {AdminGetListRenter, AdminOpenUser} from "../../../services/userService";
import {toast} from "react-toastify";

const ShowListBookingOfTheOwnerFe = () => {
    const dispatch = useDispatch();
    const [showBotton, setShowBtton] =useState(true);
    useEffect(async () =>  {
       await dispatch(ShowListBookingOfTheOwner( JSON.parse(localStorage.getItem("user"))))
    }, []);
    const bookings = useSelector(state=>{
        console.log(state.bookings.bookings.data);
        return state.bookings.bookings.data;
    })
    const OwnerCheckInBooking  = async (booking) =>{
        if(window.confirm("Bạn có chắc chắn thao tác này?")) {
            await dispatch(OwnerCheckIn(booking));
            await dispatch(ShowListBookingOfTheOwner(JSON.parse(localStorage.getItem("user"))))
            await toast("Thao tác thành công!")
        }
    }
    const OwnerCheckOutBooking  = async (booking) =>{
        if(window.confirm("Bạn có chắc chắn thao tác này?")){
        await dispatch(OwnerCheckOut(booking));
        await dispatch(ShowListBookingOfTheOwner( JSON.parse(localStorage.getItem("user"))))
        await toast("Thao tác thành công!")
        }
    }
    return (
        <div>
            <div className="container_table">
                <table className="table table-striped">
                    <thead>
                    <tr className={"Header_table"}>
                        <th scope="col" className={"stt"}>STT</th>
                        <th scope="col" className={"account"}>Người đặt</th>
                        <th scope="col" className={"name"}>Ngày đặt</th>
                        <th scope="col" className={"address"}>Ngày đến</th>
                        <th scope="col" className={"email"}>Ngày đi</th>
                        <th scope="col" className={"phone"}>Điện thoại</th>
                        <th scope="col" className={"address"}>Địa chỉ chủ nhà</th>
                        <th scope="col" className={"showBookingDetail"}>Xem</th>
                        <th scope="col" className={"checkin-out"}>Đến/Đi</th>

                    </tr>
                    </thead>
                    <tbody>
                    {bookings && bookings.map((item, index)=>(
                        <tr>
                            <td scope="row">{index+1}</td>
                            <td>{item.user.firstname+" "+ item.user.lastname}</td>
                            <td>{(item.create_at)}</td>
                            <td>{(item.startTime)}</td>
                            <td>{(item.endTime)}</td>
                            <td>{item.user.phone}</td>
                            <td>{item.house.address + "-"+ item.house.ward+ "-"+item.house.district+ "-"+item.house.province}</td>
                            <td>
                                <Link to={"/bookAHouse/"+item.id}><img className={"eyeImageCSS"}
                                                                                 src={eyeImage} alt=""/></Link>
                            </td>

                            <td>
                                <div className="form-check form-switch mt-2">
                                    {item.status===("Chờ nhận phòng")?
                                        <button onClick={()=>{OwnerCheckInBooking(item)}} className="btn btn-primary">Xác nhận đến</button> :
                                        <button onClick={()=>{OwnerCheckOutBooking(item)}} className="btn btn-primary">Xác nhận đi</button>
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowListBookingOfTheOwnerFe;
import iconShare from "../../../assets/imgs/web/share.png"
import iconSave from "../../../assets/imgs/web/save.png"
import iconAllImg from "../../../assets/imgs/web/all-img.png"
import iconStar from "../../../assets/imgs/container/icon-star.png"
import icon1 from "../../../assets/imgs/web/1.png"
import icon2 from "../../../assets/imgs/web/1-1.png"
import icon3 from "../../../assets/imgs/web/1-1-2.png"
import flower from "../../../assets/imgs/web/flower.png"
import car from "../../../assets/imgs/web/car.png"
import city from "../../../assets/imgs/web/city.png"
import kitchen from "../../../assets/imgs/web/kitchen.png"
import table from "../../../assets/imgs/web/table.png"
import wifi from "../../../assets/imgs/web/wifi.png"
import television from "../../../assets/imgs/web/tivi.png"
import sauna from "../../../assets/imgs/web/sauna.png"
import CalendarTest from "../../../components/CalendarTest";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findHouseById} from "../../../services/houseService";
import {getDaysBetweenTwoDates, getNumberOfNights, totalMoney} from "../../../function/function";
import {createBooking, findBookingNotCheckin, getABooking, getStartEndDate} from "../../../services/bookingService";
import dayjs from "dayjs";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import WebsocketComponent from "../../../websocket/WebsocketComponent";
import USDollar from "../../../utils/utils";


const ShowABookingDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {

        dispatch(findHouseById(id)).then(()=>{
            dispatch(getABooking(id))
        })
        dispatch(findBookingNotCheckin(id))
    }, []);

    const user = useSelector(state => {
        return state.user.currentUser;
    })
    const house = useSelector(state => {
        return state.house.houseDetail;
    })
    const listDay = useSelector(state => {
        return state.bookings.listDay;
    })

    const booking = useSelector(state => {
        return state.bookings.booking;
    })
    const aBooking = useSelector(state=>{
        return state.bookings.aBooking.data;

    })
    const checkNextDate = useSelector(state => {
        return state.bookings.checkNextDate;
    })
    function handBooking() {
        let total = totalMoney(booking.startTime, booking.endTime, house.price)
        let value = {...booking, create_at: dayjs(), house: house, user: user, total: total, status: "checked"}
        dispatch(createBooking(value))
        toast.success("Đặt tour thành công!");
        console.log(booking, "lllll");
        navigate("/")
    }

    return (
        <>
            <div className="container" style={{height: '2000px', marginTop: "103px"}}>
                <div className="head-container">
                    <h4>{house.name}</h4>
                    <div className="btn-share-save d-flex mb-4">
                        <div className="b-share">
                            <img src={iconShare} alt=""/>
                            Chia sẻ
                        </div>
                        <div className="b-save">
                            <img src={iconSave} alt=""/>
                            Lưu
                        </div>
                    </div>
                </div>
                <div className="row house-img">
                    <div className="img-left col-md-6 p-0">
                        <img
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-611964103002302908/original/ede7b8fc-9f6a-40ec-8f58-45b19d941a18.jpeg?im_w=1200"
                            alt=""/>
                    </div>
                    <div className="img-right col-md-6 p-0">
                        <div className="row m-0 h-100">
                            <div className="img-right-top d-flex pb-2 pl-0 pr-0">
                                <div className="img-right-item col-md-6 pl-2 p-0">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440"
                                        alt=""/>
                                </div>
                                <div className="img-right-item col-md-6 pl-2 p-0">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440"
                                        alt=""/>
                                </div>
                            </div>
                            <div className="img-right-bottom d-flex p-0">
                                <div className="img-right-item col-md-6 pl-2 p-0">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440"
                                        alt=""/>
                                </div>
                                <div className="img-right-item col-md-6 pl-2 p-0">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/5a150df4-7898-4555-8bbc-c8f565f9bcf9.jpg?im_w=1440"
                                        alt=""/>
                                </div>
                                <div className="all-img">
                                    <img src={iconAllImg} alt=""/>
                                    <span>Hiển thị tất cả ảnh</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="house-content">

                    <div className="house-content-left w-65">
                        <div className="house-info d-flex flex-column">
                            {house && <h2>{house.name}, {house.address}</h2>}
                            <span>7 khách 3 phòng ngủ 4 giường 3 phòng tắm</span>
                            <div className='house-info-rating d-flex justify-content-center align-items-center'>
                                <img src={iconStar} alt=""/>
                                <span>4,87</span><span className={'house-rating'}>119 đánh giá</span>
                            </div>
                        </div>
                        <div className="house-info-c d-flex align-items-center">
                            {house.owner ?
                                <img src={house.owner.avatar} alt=""/>
                                :
                                <img
                                    src="https://a0.muscache.com/im/pictures/user/608b7b18-f017-45c5-a265-0f5201997939.jpg?im_w=240"
                                    alt=""/>
                            }
                            <div className={'d-flex flex-column align-items-start ml-4'}>
                                <h5>Chủ nhà/Người tổ
                                    chức: {house.owner && <>{house.owner.lastname} {house.owner.firstname}</>}</h5>
                                <span>Chủ nhà siêu cấp 2 năm kinh nghiệm đón tiếp khách</span>
                            </div>
                        </div>
                        <div className="house-info d-flex flex-column">
                            <div className={'house-info-item d-flex mb-4 justify-content-between'}>
                                <img src={icon1} alt=""/>
                                <div className="d-flex flex-column align-items-start ml-4">
                                    <h5>Tự nhận phòng</h5>
                                    <span>Bạn có thể gặp nhân viên trực cửa để nhận phòng.</span>
                                </div>
                            </div>
                            <div className={'house-info-item d-flex mb-4 justify-content-between'}>
                                <img src={icon2} alt=""/>
                                <div className="d-flex flex-column align-items-start ml-4">
                                    <h5>{house.owner && <>{house.owner.lastname} {house.owner.firstname}</>} là chủ nhà
                                        siêu cấp</h5>
                                    <span>Chủ nhà siêu cấp là những chủ nhà dày dạn kinh nghiệm, được đánh giá cao.</span>
                                </div>
                            </div>
                            <div className={'house-info-item d-flex mb-4 justify-content-between'}>
                                <img src={icon3} alt=""/>
                                <div className="d-flex flex-column align-items-start ml-4">
                                    <h5>Địa điểm tuyệt vời</h5>
                                    <span>90% khách gần đây đã xếp hạng 5 sao cho vị trí này.</span>
                                </div>
                            </div>
                        </div>

                        <div className="house-info d-flex flex-column">
                            <h3 style={{textAlign: 'left', paddingBottom: '24px'}}>Nơi này có những gì cho bạn</h3>
                            <div style={{width: "100%"}} className=" house-utilities d-flex justify-content-between">
                                <div className="utili-left w-50 d-flex flex-column">
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={car} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>Chỗ đỗ xe miễn phí tại nơi ở</span>
                                    </div>
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={city} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>Hướng nhìn ra đường chân trời thành phố</span>
                                    </div>
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={wifi} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>Wi-fi</span>
                                    </div>
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={television} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>55" HDTV với Amazon Prime Video, Apple TV, HBO Max, Netflix</span>
                                    </div>
                                </div>
                                <div className="utili-right w-50 d-flex flex-column">
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={flower} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>Hướng nhìn ra vườn</span>
                                    </div>
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={table} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>Không gian riêng để làm việc</span>
                                    </div>
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={kitchen} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>Bếp</span>
                                    </div>
                                    <div className="utili-item pb-3 d-flex align-items-center">
                                        <img src={sauna} alt=""/>
                                        <span style={{paddingLeft: "16px", textAlign: "left"}}>Phòng xông hơi khô</span>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn btn-outline-secondary mt-5">Hiển thị tất cả 36 tiện
                                nghi
                            </button>
                        </div>

                        <div style={{height: '477px', position: "relative"}}>
                            <h4>
                                {(getNumberOfNights(booking.startTime, booking.endTime) <= 0) ?
                                    <></> :
                                    <>{getNumberOfNights(booking.startTime, booking.endTime)} </>
                                }
                                đêm tại {house.name}</h4>
                            <p>{checkNextDate === "" ? <>{booking.startTime && <>{booking.startTime.format("DD/MM/YYYY")} -</>}{booking.endTime && booking.endTime.format("DD/MM/YYYY")}</> : checkNextDate}</p>
                            <CalendarTest listDay={listDay}></CalendarTest>
                        </div>
                    </div>
                    <div style={{background: "red"}}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowABookingDetail;
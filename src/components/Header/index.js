import "./style.css"
import React from "react";
import Login from "../../pages/Login";
import logo from "../../assets/imgs/header/logo.png"
import search from "../../assets/imgs/header/search-icon.png"
import nav from "../../assets/imgs/header/3ngang.png"
import imgUser from "../../assets/imgs/header/user-icon.jpg"
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../services/userService";
import {toast} from "react-toastify";
import Register from "../../pages/Register";
import ChangePassword from "../Modal/ChangePassword";
import MyNotify from "../MyNotify";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => {
        return state.user.currentUser
    })

    const handleLogout = async () => {
        dispatch(logout()).then(() => {
            navigate("");
            toast.success("Logout successful!");
        })
    }

    function handleHomeOwner() {

    }

    function handleManageUser() {
        navigate('admin/UserManagement');
    }
    function handleListOwner(){
        navigate("ListOwner");
    }
    function handleListRenter(){
        navigate("ListRenter");
    }
    function handleSetPermisionForRenter(){
        navigate("admin/SetPermisionForRenter")
    }
    function ShowTop5House(){
        navigate("ShowTop5HouseBooking")
    }

    function handleSearchHouseByName(){
        let name = document.getElementById("name")
        navigate("/search-name/"+ name.value)
    }
    function handleSearchHouseByAddress() {
        navigate("/ListHouseByAddress")
    }

    return (
        <>
            <header>
                <div onClick={()=>navigate("/")} className="header-left">
                    <img id="logo" src={logo} alt=""/>
                </div>

                <div className="header-mid">
                    <div className="p-rl-16">
                        <input type="text" className="p-rl-16 input-hidden" placeholder={"Địa điểm bất kỳ:"}
                               style={{border: "hidden", height: "40px"}} id={"address"}/>
                    </div>
                    <div><span className="header-mid-center p-rl-16">Tuần bất kỳ</span></div>
                    <div className="header-mid-right pr-2">
                        <input type="text" className="p-rl-16 input-hidden" placeholder={"Tìm kiếm:"}
                               style={{border: "hidden", height: "40px"}} id="name"/>
                        <div onClick={handleSearchHouseByName} className="btn-search">
                            <img className="search-icon" src={search} alt=""/>
                        </div>
                    </div>
                </div>


                <div className="header-right">
                    {user ?
                        <>
                            {user.roles.some((item) => item.authority === "ROLE_OWNER") ?
                                <><Link style={{textDecoration: 'none', color: 'black'}} className={"headerRight-left"} to={"/add-house"}>Đón tiếp khách</Link></>
                                :
                                <><Link style={{textDecoration: 'none', color: 'black'}} className={"headerRight-left"} to={"/become-an-owner"}>Cho thuê chỗ ở qua Airbnb</Link></>
                            }
                        </>
                        :
                        <>
                            <Login props={{nameClass: "headerRight-left", nameTitle: "Cho thuê chỗ ở qua Airbnb"}}/>
                        </>
                    }
                    <MyNotify></MyNotify>
                    <div className="user">
                        <img className="user-left-icon" src={nav} alt=""/>
                        {user ?
                            <>
                                <img style={{borderRadius: '50%'}} className="user-icon" src={user.avatar} alt=""/>
                            </>
                            :
                            <>
                                <img className="user-icon" src={imgUser} alt=""/>
                            </>
                        }
                        <div className="sub-login" id="user">
                            {user ?
                                <>
                                    <ChangePassword nameClass={'sub-login-item'}/>
                                    {user.roles.some((item) => item.authority === "ROLE_ADMIN") ?
                                        // Form Admin
                                        <>
                                            <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/admin/currentAdminDetail"}>Xem thông tin Admin<span className="sr-only">(current)</span></Link>
                                            <div onClick={handleManageUser} className="sub-login-item">Quản lý User</div>
                                            <div onClick={handleListOwner} className="sub-login-item">Xem danh sách chủ nhà</div>
                                            <div onClick={handleListRenter} className="sub-login-item">Xem danh sách người thuê nhà</div>
                                            <div onClick={handleSetPermisionForRenter} className="sub-login-item">Xem chờ xác nhận</div>
                                            <div onClick={ShowTop5House} className="sub-login-item"> Xem 6 ngôi nhà được đặt nhiều nhất</div>

                                        </>
                                        :
                                        <>
                                            <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/user-info"}>Thông tin tài khoản<span className="sr-only">(current)</span></Link>
                                            {user.roles.some((item) => item.authority === "ROLE_OWNER") ?
                                                <>
                                                    <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/add-house"}>Tạo mới nhà cho thuê<span className="sr-only">(current)</span></Link>
                                                    <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/houses"}>Danh sách căn nhà<span className="sr-only">(current)</span></Link>
                                                    <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/ShowListBookingOfTheOwnerFe"}>Xem danh sách đặt nhà<span className="sr-only">(current)</span></Link>
                                                    <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/ReviewBookingHistory"}>Xem lịch sử đặt<span className="sr-only">(current)</span></Link>
                                                </>
                                                :
                                                // Form Renter
                                                <>
                                                    <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/UserSeeBookingHistory"}>Xem lịch sử đặt<span className="sr-only">(current)</span></Link>
                                                </>
                                            }
                                        </>
                                    }
                                    <div onClick={handleLogout} className="sub-login-item">Đăng xuất</div>
                                </>
                                :
                                <>
                                    <Login props={{nameClass: "sub-login-item", nameTitle: "Đăng nhập"}}/>

                                    <Register nameClass={"sub-login-item"}/>
                                    <hr/>
                                    <div onClick={handleHomeOwner} className="sub-login-item">Cho thuê chỗ ở qua Airbnb</div>
                                </>
                            }
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header
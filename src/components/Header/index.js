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

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => {
        // console.log("BBBBB",state.user.currentUser)
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

    return (
        <>
            <header>
                <div className="header-left">
                    <img id="logo" src={logo} alt=""/>
                </div>

                <div className="header-mid">
                    <div className="p-rl-16">Địa điểm bất kỳ</div>
                    <div><span className="header-mid-center p-rl-16">Tuần bất kỳ</span></div>
                    <div className="header-mid-right pr-2">
                        <span className="p-rl-16">Thêm khách</span>
                        <div className="btn-search">
                            <img className="search-icon" src={search} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="header-right">
                    {user && user.roles.some((item) => item.authority === "ROLE_OWNER") ?
                        <Link style={{textDecoration: 'none', color: 'black'}} className={"headerRight-left"} to={"/add-house"}>Đón tiếp khách</Link>
                        :
                        <Link style={{textDecoration: 'none', color: 'black'}} className={"headerRight-left"} to={"/become-an-owner"}>Cho thuê chỗ ở qua Airbnb</Link>
                    }
                    <div className="user">
                        <img className="user-left-icon" src={nav} alt=""/>
                        {user == null ?
                            <>
                                <img className="user-icon" src={imgUser} alt=""/>
                            </>
                            :
                            <>
                                <img style={{borderRadius: '50%'}} className="user-icon" src={user.avatar} alt=""/>
                            </>
                        }
                        <div className="sub-login" id="user">
                            {user == null ?
                                <>
                                    <Login/>

                                    <Register nameClass={"sub-login-item"}/>
                                    <hr/>
                                    <div onClick={handleHomeOwner} className="sub-login-item">Cho thuê chỗ ở qua Airbnb</div>
                                </>
                                :
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
                                    </>
                                    :
                                    <>
                                        <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/user-info"}>Thông tin tài khoản<span className="sr-only">(current)</span></Link>
                                        {user.roles.some((item) => item.authority === "ROLE_OWNER") ?
                                            <>

                                                <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/houses"}>Thông tin căn nhà<span className="sr-only">(current)</span></Link>
                                            </>
                                            :
                                            // Form Renter

                                            <>
                                                <Link style={{textDecoration: 'none', color: 'black'}} className={"nav-link sub-login-item"} to={"/user-detail"}>Thông tin tài khoản Test<span className="sr-only">(current)</span></Link>
                                            </>
                                        }
                                    </>
                                }
                                    <div onClick={handleLogout} className="sub-login-item">Đăng xuất</div>
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
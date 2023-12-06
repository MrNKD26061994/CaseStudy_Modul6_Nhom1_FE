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
                    <div className="headerRight-left">Cho thuê chỗ ở qua Airbnb</div>
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

                                    <Register/>
                                    <hr/>
                                    <div className="sub-login-item">Cho thuê chỗ ở qua Airbnb</div>
                                </>
                                :
                                <>
                                    {user.roles[0].authority === "ROLE_ADMIN" ?
                                        // giao dien Admin
                                        <>
                                            <div onClick={handleLogout} className="sub-login-item">Thông tin Admin</div>
                                            <div onClick={handleLogout} className="sub-login-item">Quản lý User</div>
                                            <div onClick={handleLogout} className="sub-login-item">Đổi mật khẩu</div>
                                        </>
                                        :
                                        //Giao dien User
                                        <>
                                            <Link className={"nav-link"} to={"/user-detail"}>Thông tin User<span className="sr-only">(current)</span></Link>

                                            <div onClick={handleLogout} className="sub-login-item">Thông tin User</div>
                                            <div onClick={handleLogout} className="sub-login-item">Đổi mật khẩu</div>
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
import React from "react";
import icon1 from "../../assets/imgs/nav/icon-nav.png"
import iconFilter from "../../assets/imgs/nav/icon-filter.png"
import nav1 from "../../assets/imgs/nav/nav1.jpg"
import nav2 from "../../assets/imgs/nav/nav2.jpg"
import nav3 from "../../assets/imgs/nav/nav3.jpg"
import nav4 from "../../assets/imgs/nav/nav4.jpg"
import nav5 from "../../assets/imgs/nav/nav5.jpg"
import nav6 from "../../assets/imgs/nav/nav6.jpg"
import nav7 from "../../assets/imgs/nav/nav7.jpg"
import nav8 from "../../assets/imgs/nav/nav8.jpg"

import "./style.css"

function Navbar() {

    return (
        <div className={"nav"}>
            <nav>
                <div className="nav-category">
                    <div className="nav-item-full nav-item-full-active">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={icon1} alt=""/>
                                <div className="label-item">Phòng</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav1} alt=""/>
                                <div className="label-item">Khu cắm trại</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav2} alt=""/>
                                <div className="label-item">Ven hồ</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav3} alt=""/>
                                <div className="label-item">Thiết kế</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav4} alt=""/>
                                <div className="label-item">Lướt sóng</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav5} alt=""/>
                                <div className="label-item">Hang động</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav6} alt=""/>
                                <div className="label-item">Khung cảnh tuyệt vời</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav7} alt=""/>
                                <div className="label-item">Nông thôn</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav8} alt=""/>
                                <div className="label-item">Lâu đài</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav3} alt=""/>
                                <div className="label-item">Thiết kế</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav4} alt=""/>
                                <div className="label-item">Lướt sóng</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav5} alt=""/>
                                <div className="label-item">Hang động</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav6} alt=""/>
                                <div className="label-item">Khung cảnh tuyệt vời</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav7} alt=""/>
                                <div className="label-item">Nông thôn</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav8} alt=""/>
                                <div className="label-item">Lâu đài</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav6} alt=""/>
                                <div className="label-item">Khung cảnh tuyệt vời</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav7} alt=""/>
                                <div className="label-item">Nông thôn</div>
                        </div>
                    </div>
                    <div className="nav-item-full">
                        <div className="nav-item">
                            <img className="nav-item-icon" src={nav8} alt=""/>
                                <div className="label-item">Lâu đài</div>
                        </div>
                    </div>

                </div>

                <div className="btn-filter">
                    <div className="filter">
                        <img src={iconFilter} alt=""/>
                            <span>Bộ lọc</span>
                    </div>
                </div>
            </nav>
        </div>
);
}

export default Navbar
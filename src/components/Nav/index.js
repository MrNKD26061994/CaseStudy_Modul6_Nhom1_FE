import React from "react";
import icon1 from "../../assets/imgs/nav/icon-nav.png"
import iconFilter from "../../assets/imgs/nav/icon-filter.png"
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
                            <img className="nav-item-icon" src={icon1} alt=""/>
                                <div className="label-item">Phòng</div>
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
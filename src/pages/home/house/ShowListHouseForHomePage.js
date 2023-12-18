import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {showListHouseForUser} from "../../../services/houseService";
import house3 from "../../../assets/imgs/container/A1.webp";
import house4 from "../../../assets/imgs/container/A11.webp";
import heartIcon from "../../../assets/imgs/container/heart-icon.png";
import starIcon from "../../../assets/imgs/container/icon-star.png";
import house5 from "../../../assets/imgs/container/A2.webp";
import house6 from "../../../assets/imgs/container/a22.webp";
import house7 from "../../../assets/imgs/container/A3.webp";
import house8 from "../../../assets/imgs/container/A33.webp";
import house2 from "../../../assets/imgs/container/house2.png";
import house1 from "../../../assets/imgs/container/house1.png";
import {Link} from "react-router-dom";

const ShowListHouseForHomePage = () => {
    const dispatch = useDispatch();


    useEffect(() =>  {
        dispatch(showListHouseForUser())
    }, []);
    const ListHouse = useSelector(state=>{
        return state.house.houses;
    })

    return (
        <div>

            <div id="container" className="container-fluid">
                <div className="row">
                    {ListHouse && ListHouse.map((house, index)=>(
                        <div className="col-2">
                            <Link style={{textDecoration: 'none'}}  to={"/bookAHouse"}>
                            <div id={'id'+house.id} className="carousel slide carouselExampleControls"
                                 data-ride="carousel" data-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={house.thumbnail} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={house4} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={house3} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>

                                <button className="carousel-control-prev carousel-control-p" type="button"
                                        data-target= {"#id"+house.id} data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next carousel-control-n" type="button"
                                        data-target= {"#id"+house.id} data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>

                                <img className="myHeart-icon" src={heartIcon} alt=""/>
                            </div>

                            <div className="bottom-item">
                                <div className="bottom-item-left">
                                    <p>{house.name}</p>
                                    <p className="grey">{house.province + "/" + house.district + "/" + house.ward}</p>
                                    <p className="grey">Ngày</p>
                                    <p>{"$"+house.price + " / đêm"}</p>
                                </div>
                                <div className="bottom-item-right">
                                    <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                        <span className="point-start">4,99</span>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
export default ShowListHouseForHomePage;
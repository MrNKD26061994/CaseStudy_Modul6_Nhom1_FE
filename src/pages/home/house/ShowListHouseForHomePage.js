import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showListHouseForUser} from "../../../services/houseService";
import house3 from "../../../assets/imgs/container/A1.webp";
import house4 from "../../../assets/imgs/container/A11.webp";
import heartIcon from "../../../assets/imgs/container/heart-icon.png";
import starIcon from "../../../assets/imgs/container/icon-star.png";
import {Link} from "react-router-dom";
import USDollar from "../../../utils/utils";
// import "../../../components/Container/style.css"

const ShowListHouseForHomePage = () => {
    const dispatch = useDispatch();

    useEffect(() =>  {
        dispatch(showListHouseForUser())
    }, []);

    const ListHouse = useSelector(state=>{
        console.log(state.house.houses)
        return state.house.houses;
    })

    return (
        <div style={{marginTop: "174px"}}>
            <div id="container" className="container-fluid">
                <div className="row">


                    {ListHouse && ListHouse.map((house, index)=>(
                        <div className="col-2 mb-4">

                            <div id={'id'+house.id} className="carousel slide myCarousel"
                                 data-ride="carousel" data-touch="false" data-interval="false">
                                <Link style={{textDecoration: 'none'}}  to={"/house-detail/" + house.id}>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={house.thumbnail} className="d-block w-100" alt="..."/>
                                        </div>
                                        {house.images.map((image, index) => (
                                            <div className="carousel-item">
                                                <img src={image.url} className="d-block w-100" alt="..."/>
                                            </div>
                                        ))}
                                    </div>
                                </Link>
                                <div className="carousel-absolute">
                                    <img className="myHeart-icon" src={heartIcon} alt=""/>
                                    <button className="carousel-control-prev carousel-control-p" type="button"
                                            data-target= {"#id"+house.id} data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </button>`
                                    <button className="carousel-control-next carousel-control-n" type="button"
                                            data-target= {"#id"+house.id} data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </button>
                                </div>
                            </div>
                            <Link style={{textDecoration: 'none'}}  to={"/house-detail/" + house.id}>
                                <div className="bottom-item">
                                    <div className="bottom-item-left">
                                        <p>{house.name}</p>
                                        <p className="grey">{house.address}</p>
                                        <p>{USDollar.format(house.price) + " / đêm"}</p>
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
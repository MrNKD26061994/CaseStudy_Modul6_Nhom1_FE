import "./style.css"
import React from "react";
import heartIcon from "../../assets/imgs/container/heart-icon.png"
import starIcon from "../../assets/imgs/container/icon-star.png"
import house1 from "../../assets/imgs/container/house1.png"
import house2 from "../../assets/imgs/container/house2.png"
import house3 from "../../assets/imgs/container/A1.webp"
import house4 from "../../assets/imgs/container/A11.webp"
import house5 from "../../assets/imgs/container/A2.webp"
import house6 from "../../assets/imgs/container/a22.webp"
import house7 from "../../assets/imgs/container/A3.webp"
import house8 from "../../assets/imgs/container/A33.webp"

function Container() {

    return (
        <>
            <div id="container" className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <div id="carouselExampleControls" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house3} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house4} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house3} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls1" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house5} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house6} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house5} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls1" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls1" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls2" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house7} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house8} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house7} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls2" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls2" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls3" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls3" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls3" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls4" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls4" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls4" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls5" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls5" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls5" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls6" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls6" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls6" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls7" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls7" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls7" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls8" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls8" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls8" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls9" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls9" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls9" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls10" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls10" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls10" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls11" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls11" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls11" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls12" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls12" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls12" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls13" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls13" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls13" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls14" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls14" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls14" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
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
                    </div>

                    <div className="col-2">
                        <div id="carouselExampleControls15" className="carousel slide carouselExampleControls" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house2} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={house1} className="d-block w-100" alt="..."/>
                                </div>
                            </div>

                            <button className="carousel-control-prev carousel-control-p" type="button" data-target="#carouselExampleControls15" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next carousel-control-n" type="button" data-target="#carouselExampleControls15" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>

                            <img className="myHeart-icon" src={heartIcon} alt=""/>
                        </div>

                        <div className="bottom-item">
                            <div className="bottom-item-left">
                                <p>Hà Nội, Việt Nam</p>
                                <p className="grey">Hà Nội</p>
                                <p className="grey">Ngày</p>
                                <p>$40 / đêm</p>
                            </div>
                            <div className="bottom-item-right">
                                <div>
                                <span className="icon-start">
                                    <img src={starIcon} alt=""/>
                                </span>
                                    <span class="point-start">4,99</span>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}

export default Container
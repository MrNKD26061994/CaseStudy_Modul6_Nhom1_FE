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
                                    <img src='data:image/jpeg;base64,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' className="d-block w-100" alt="..."/>
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
                                    <img src='data:image/jpeg;base64,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' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://smarthome.worldtech.vn/wp-content/uploads/2017/10/hinh-ngoi-nha.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='data:image/jpeg;base64,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' className="d-block w-100" alt="..."/>
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
                                    <img src='data:image/jpeg;base64,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' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://thanhvietcorp.vn/uploads/images/Bao%20chi/download-hinh-ngoi-nha-1024x684.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://neohouse.vn/wp-content/uploads/2022/04/hinh-anh-nha-dep-thuc-te-anh-1.jpg' className="d-block w-100" alt="..."/>
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
                                    <img src='https://vatlieutot.com/wp-content/uploads/2022/03/nha4-1623582771859270964660-1624026103335-16240261039031321336298.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='data:image/jpeg;base64,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' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://static.vinwonders.com/2022/11/du-lich-nha-trang-Thap-Ba-Ponagar.jpg' className="d-block w-100" alt="..."/>
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
                                    <img src='data:image/jpeg;base64,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' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='data:image/jpeg;base64,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' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://www.vietfuntravel.com.vn/image/data/Blog/DiaDiem/hinh-anh-cac-dia-diem-du-lich-nha-trang/hinh-anh-cac-dia-diem-du-lich-nha-trang-13.jpg' className="d-block w-100" alt="..."/>
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
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnFDQYwm4U_TTQv0ngSnIgRJAvw1fVejdCw&usqp=CAU' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARkP1Si-EAGr1sUw2JnSJfU_dxPVWzjNKjQ&usqp=CAU' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://cdn.vietnambiz.vn/2020/2/24/hostel-15825555219662144918964.jpg' className="d-block w-100" alt="..."/>
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
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBe6Dq--tOtdl_ByeBJouiBoYnt5anX2_Kg&usqp=CAU' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_W_CWHanG_P6I-a9kQu1BEKrqzTMn2dBDg&usqp=CAU' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiC8P0urtXUHosMLVyvaDY5_Q49hBT3970Q&usqp=CAU' className="d-block w-100" alt="..."/>
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
                                    <img src='https://nhatrangsensetravel.com/view/at_lang-thang-pho-bien-nha-trang-ve-dem-va-cam-nhan_51f8c9b53edf676428debbb6a7734cc7.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://datviettour.com.vn/uploads/images/tin-tuc-SEO/mien-trung/Nha-Trang/21-dia-diem-du-lich-nha-trang.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://res.klook.com/image/upload/q_85/c_fill,w_750/v1660297801/blog/y319gpjxczrimmij38ea.jpg' className="d-block w-100" alt="..."/>
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
                                    <img src='https://cdn.lawnet.vn/uploads/tintuc/2023/01/17/chi-ho-tro-phat-trien-du-lich.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://image.nhandan.vn/w800/Uploaded/2023/kplbaob/2023_04_12/anh-1-bai-19-saomai-5845.jpg.webp' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWh2YH8Ea0LGoNuAuAhoQqd8ecCiDkPKkRw&usqp=CAU' className="d-block w-100" alt="..."/>
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
                                    <img src='https://nld.mediacdn.vn/2021/2/28/5-hinh-phu-5-1614519450673391915287.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://imgchinhsachcuocsong.vnanet.vn/MediaUpload/Org/2023/03/21/075922-canh-vat-ben-ngoai-phong-nha.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaumwddQ6vPDgcmizgyLm8WlKrx2GSSP6Ofg&usqp=CAU' className="d-block w-100" alt="..."/>
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
                                    <img src='https://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://dulichtoday.vn/wp-content/uploads/2017/04/vinh-Ha-Long.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://static.vinwonders.com/2023/01/cac-loai-hinh-du-lich-4.jpg' className="d-block w-100" alt="..."/>
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
                                    <img src='https://statics.vinpearl.com/khu-%20du-lich-long-dien-son-0001_1624611244.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://vnanet.vn/Data/Articles/2020/09/20/5025458/vna_potal_du_lich_viet_nam_khu_du_lich_lon_nhat_da_nang_-_sun_world_ba_na_hills_mo_cua_don_khach_tro_lai_stand.jpg' className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src='https://cdn.baodongthap.vn/database/image/2020/05/26/dt3-3.jpg' className="d-block w-100" alt="..."/>
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
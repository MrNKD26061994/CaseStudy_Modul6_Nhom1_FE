import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import customAxios from "../../services/api";
import "../Admin/ViewUserDetailSetting.css"
import icon1 from "../../assets/imgs/container/1.png"
import icon2 from "../../assets/imgs/container/1-1.png"
import icon3 from "../../assets/imgs/container/1-1-2.png"


const ViewUserDetail = () => {
    const [user, setUser] = useState({})
    let param = useParams();
    useEffect(() => {
        customAxios.get("/admin/"+param.id).then(res=>{
            setUser(res.data);
            console.log("uswe", res.data);
        })}, []);
    return (
        <>
            <div className="container" style={{marginTop:"90px"}}>
            <h1 id={"UserInformation"}>Thông tin cá nhân</h1>

                <div className="user-info">
                    <div className="AvatarImageClass">
                        <img src={user.avatar} alt=""/>
                    </div>
                    <div className={`user-info-left`}>

                    <div className={`info-item blogEdit`}>
                        <div className="infoItem-left">
                            <p>Tên pháp lý</p>
                            {user.lastname || user.firstname ?
                                <p className='color-grey'>{user.lastname + ' ' + user.firstname}</p>
                                :
                                <p className='color-grey'>Chưa được cung cấp</p>
                            }
                        </div>
                    </div>

                    <div className={`info-item blogEdit`}>
                        <div className="infoItem-left">
                            <p>Địa chỉ email</p>
                            {user.email ?
                                <p className='color-grey'>{user.email}</p>
                                :
                                <p className='color-grey'>Chưa được cung cấp</p>
                            }
                        </div>
                    </div>
                    <div className={`info-item blogEdit`}>
                        <div className="infoItem-left">
                            <p>Số điện thoại</p>
                            {user.phone ?
                                <p className='color-grey'>{user.phone}</p>
                                :
                                <p className='color-grey'>Chưa được cung cấp</p>
                            }
                        </div>
                    </div>


                    <div className={`info-item blogEdit`}>
                        <div className="infoItem-left">
                            <p>Địa chỉ</p>
                            {user.address ?
                                <p className='color-grey'>{user.address}</p>
                                :
                                <p className='color-grey'>Chưa được cung cấp</p>
                            }
                        </div>
                    </div>
                    <div>
                        <Link className={"btn btn-outline-primary"} to={"/admin/UserManagement"}>Quay lại</Link>
                    </div>


                </div>
                <div className="user-info-right">
                    <div className="user-right">
                        <div className="user-right-item">
                            <img src={icon1} alt=""/>
                            <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                            <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                        </div>
                        <hr/>
                        <div className="user-right-item">
                            <img src={icon2} alt=""/>
                            <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                            <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                        </div>
                        <hr/>
                        <div className="user-right-item">
                            <img src={icon3} alt=""/>
                            <h5>Tại sao thông tin của tôi không được hiển thị ở đây?</h5>
                            <p>Chúng tôi đang ẩn một số thông tin tài khoản để bảo vệ danh tính của bạn.</p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
};

export default ViewUserDetail;
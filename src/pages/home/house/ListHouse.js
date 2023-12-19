import "./CSS-ListHouse.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getHouses} from "../../../services/houseService";
import "./CSS-ListHouse.css";
import {Link} from "react-router-dom";
import eyeImage from "../../../assets/imgs/container/1-1-2.png";
import {Field} from "formik";


export default function ListHouse(){
    const dispatch = useDispatch();
    const house = useSelector( state => {
        console.log(state.house.house.data)
        return state.house.house.data;
    })
    useEffect(() => {
        dispatch(getHouses(JSON.parse(localStorage.getItem("user")).id));
    }, []);

    return(
        <div className={'container_table'}>
            <div className="col-12">
                <table className="table table-striped">
                    <thead>
                    <tr className={"Header_table"}>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Province</th>
                        <th scope="col">District</th>
                        <th scope="col">Acreage</th>
                        <th scope="col">Bedroom</th>
                        <th scope="col">Bed</th>
                        <th scope="col">Bathroom</th>
                        <th scope="col" className={"bottom2"}>House Detail</th>
                        <th scope="col" className={"bottom2"}>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        house?.map((item,index) => (
                            <tr>
                                <th scope="row">{index +1}</th>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.province}</td>
                                <td>{item.district}</td>
                                <td>{item.acreage}</td>
                                <td>{item.bedroom}</td>
                                <td>{item.bed}</td>
                                <td>{item.bathroom}</td>
                                <td><Link  to={"/edit-house/"+ item.id}>
                                    <img className={"eyeImageCSS"} src={eyeImage} alt=""/>
                                </Link></td>
                                <td>
                                    <select  className="form-select">
                                        <option value="">---Vui lòng chọn---</option>
                                        <option value="fix">Đang bảo trì</option>
                                        <option value="busy">Đã được thuê</option>
                                        <option value="free">Nhà còn trống</option>
                                    </select>

                                </td>

                            </tr>

                        ))
                    }
                    </tbody>
                </table>

            </div>
        </div>
    );
}
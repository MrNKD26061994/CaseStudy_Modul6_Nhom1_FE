
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getHouses} from "../../../services/houseService";
import "./CSS-ListHouse.css";


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
                        <th style={{width:100, columnSpan:2}} className={"bottom2"}></th>
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
                                <td><button style={{width:"80px"}} type="button" className="btn btn-outline-primary">Xem</button></td>
                                <td><button style={{width:"80px"}} type="button" className="btn btn-outline-primary">Khóa</button></td>

                            </tr>

                        ))
                    }
                    </tbody>
                </table>

            </div>
        </div>
    );
}
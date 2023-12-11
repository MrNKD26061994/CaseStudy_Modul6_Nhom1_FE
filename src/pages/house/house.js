import Header from "../../components/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getHouses} from "../../services/houseService";

export default function House() {
    const dispatch = useDispatch();
    const house = useSelector( state => {
        return state.house.house.data;
    })
    useEffect(() => {
        dispatch(getHouses(JSON.parse(localStorage.getItem("user")).id));

    }, []);
    return (
        <div className={'row'}>
            <div className="col-12">
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Province</th>
                        <th scope="col">District</th>
                        <th scope="col">Acreage</th>
                        <th scope="col">Bedroom</th>
                        <th scope="col">Bed</th>
                        <th scope="col">Bathroom</th>
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

                            </tr>

                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
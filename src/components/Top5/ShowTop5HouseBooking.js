import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Top5HouseBooking} from "../../services/bookingService";

const ShowTop5HouseBooking = () => {
    const dispatch = useDispatch();
    useEffect(() =>  {
        dispatch(Top5HouseBooking())
    }, []);
    const bookings = useSelector(state=>{
        return state.users.listUser.data;

    })
    return (
        <div>

        </div>
    );
};

export default ShowTop5HouseBooking;
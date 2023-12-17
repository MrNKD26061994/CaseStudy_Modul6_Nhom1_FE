import * as React from 'react';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {StaticDateRangePicker} from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import {useDispatch, useSelector} from "react-redux";
import {getStartEndDate, toggleCheckNextDate} from "../services/bookingService";


export default function CalendarTest(listDay) {

    const dispatch = useDispatch();

    const booking = useSelector(state => {
        return state.bookings.booking;
    })
    const handleDateChange = async (date) => {
        if (dayjs(date[0]).add(1, 'day').format("YYYY-MM-DD") ===
            listDay.listDay.find((item) => dayjs(item) >= dayjs(date[0]))) {
            await dispatch(toggleCheckNextDate("Không thể nhận phòng ngày này."));
            await dispatch(getStartEndDate([undefined,undefined]))
        } else {
            await dispatch(toggleCheckNextDate(""))
            await dispatch(getStartEndDate(date))
        }
    };




    //Chỗ này em lọc để loại bọ ngày không đủ điều kiện
    let list = listDay.listDay
    const shouldDisableDate = (day) => {
        return list.some(list => day.format('YYYY-MM-DD') === (list));
    };
    const uniqueSortedArray = [...new Set(list)].sort((a, b) => a - b);
    let dateMax = null
    let dateMin = booking.startTime
    let startDate = booking.startTime
    let endDate = booking.endTime

    if(booking.endTime === undefined) {
        endDate = null
    }
    if(booking.startTime === undefined) {
        startDate = null
        dateMax = null
    } else if(booking.startTime & booking.endTime) {
        dateMax = null
        dateMin = null
        let flag = true;
        for (let i = 0; i < uniqueSortedArray.length; i++) {
            if((booking.startTime < dayjs(uniqueSortedArray[i])) && (booking.endTime > dayjs(uniqueSortedArray[i]))){
                flag = false;
                break
            }
        }
        if(flag === false) {
            dispatch(getStartEndDate([booking.startTime, undefined]))
        }
    } else {
        // Loại bỏ những ngày bị vướng tour gần nhất về sau
        for (let i = 0; i < uniqueSortedArray.length; i++) {
            const dateObject = new Date(uniqueSortedArray[i])
            if(dateObject > booking.startTime) {
                dateMax = uniqueSortedArray[i];
                break;
            }
        }
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateRangePicker
                slotProps={{
                    actionBar: { actions: [] },
                }}
                calendars={2}
                disablePast={true}
                disableHighlightToday={true}
                shouldDisableDate={shouldDisableDate}
                onChange={handleDateChange}
                maxDate={dayjs(dateMax)}
                minDate={dayjs(dateMin)}
                value={[startDate, dayjs(endDate)]}

            />
        </LocalizationProvider>
    );
}
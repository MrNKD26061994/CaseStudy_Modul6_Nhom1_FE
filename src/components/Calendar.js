// import * as React from 'react';
// import dayjs from 'dayjs';
// import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
// import {useDispatch, useSelector} from "react-redux";
// import {getStartEndDate, toggleCheckNextDate} from "../services/bookingService";
// import {DateRangePicker} from "@mui/x-date-pickers-pro";
//
// export default function Calendar(listDay, sDate, eDate ) {
//     // console.log(booking.data.startTime)
//     // const defaultStartDate = dayjs(booking.data.startTime);
//     // const defaultEndDate = dayjs(booking.data.endTime);
//     // console.log(defaultStartDate)
//     // console.log(defaultEndDate)
//
//     const dispatch = useDispatch();
//
//     const booking = useSelector(state => {
//         return state.bookings.booking.data;
//     })
//     const handleDateChange = async (date) => {
//         if (dayjs(date[0]).add(1, 'day').format("YYYY-MM-DD") ===
//             listDay.listDay.find((item) => dayjs(item) >= dayjs(date[0]))) {
//             await dispatch(toggleCheckNextDate("Không thể nhận phòng ngày này."));
//             await dispatch(getStartEndDate([null,null]))
//         } else {
//             await dispatch(toggleCheckNextDate(""))
//             await dispatch(getStartEndDate(date))
//         }
//     };
//     //
//     // //Chỗ này em lọc để loại bọ ngày không đủ điều kiện
//     let list = listDay.listDay
//     //
//     //Loại bỏ những ngày đã nằm trong booking
//     const shouldDisableDate = (day) => {
//         return list.some(item => day.format('YYYY-MM-DD') === (item));
//     };
//     let dateMax = dayjs(null)
//     let dateMin = dayjs(booking.startTime)
//     let startDate = dayjs(booking.startTime)
//     let endDate = dayjs(booking.endTime)
//
//     // console.log(startDate)
//     // console.log(endDate)
//     // console.log(list)
//
//     if(startDate === undefined && endDate === undefined) {
//         startDate = dayjs(null)
//         endDate = dayjs(null)
//     }
//     if(booking.startTime === undefined) {
//         startDate = dayjs(null)
//         dateMax = dayjs(null)
//     } else if(booking.startTime & booking.endTime) {
//         dateMax = dayjs(null)
//         dateMin = dayjs(null)
//         let flag = true;
//         for (let i = 0; i < list.length; i++) {
//             if((dayjs(booking.startTime) < dayjs(list[i])) && (dayjs(booking.endTime) > dayjs(list[i]))){
//                 flag = false;
//                 break
//             }
//         }
//         if(flag === false) {
//             dispatch(getStartEndDate([booking.startTime, undefined]))
//         }
//     }
//     else {
//         // Loại bỏ những ngày bị vướng tour gần nhất về sau
//         for (let i = 0; i < list.length; i++) {
//             const dateObject = new Date(list[i])
//             if(dayjs(dateObject) > dayjs(booking.startTime)) {
//                 dateMax = dayjs(list[i]);
//                 break;
//             }
//         }
//     }
//
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DateRangePicker
//                 slotProps={{
//                     actionBar: { actions: [] },
//                 }}
//                 localeText={{ start: 'Check-in', end: 'Check-out' }}
//                 calendars={2}
//                 disablePast={true}
//                 disableHighlightToday={true}
//                 onChange={handleDateChange}
//                 shouldDisableDate={shouldDisableDate}
//                 maxDate={dateMax}
//                 minDate={dateMin}
//                 value={[startDate, endDate]}
//
//             />
//         </LocalizationProvider>
//     );
// }


import * as React from 'react';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {useDispatch, useSelector} from "react-redux";
import {getStartEndDate, toggleCheckNextDate} from "../services/bookingService";
import {DateRangePicker} from "@mui/x-date-pickers-pro";


export default function Calendar(listDay) {
    let list = listDay.listDay
    const dispatch = useDispatch();

    const booking = useSelector(state => {
        // let res = state.bookings.booking.data;
        // console.log({...res, startTime: dayjs(res.startTime), endTime: dayjs(res.endTime)})
        // return {...res, startTime: dayjs(res.startTime), endTime: dayjs(res.endTime)};
        console.log(state.bookings.booking)
        return state.bookings.booking
    })
    const handleDateChange = async (date) => {
        console.log("SSSSSSSSSSSS",date[0])
        console.log("EEEEEEEEEEE",date[1])
        console.log(list)
        if (date[0].add(1, 'day').format("YYYY-MM-DD") === list.find((item) => dayjs(item) >= date[0])) {
            await dispatch(getStartEndDate([null,null]))
        } else {
            await dispatch(getStartEndDate(date))
        }
    };


    //Loại bỏ những ngày đã nằm trong booking

    const shouldDisableDate = (day) => {
        return list.some(item => day.format('YYYY-MM-DD') === (item));
    };
    let startDate = dayjs(booking.startTime)
    let endDate = dayjs(booking.endTime)


    // let dateMax = dayjs(null)
    // let dateMin = dayjs(booking.startTime)


    // if(booking.endTime === undefined && booking.startTime === undefined) {
    //     startDate = dayjs(null)
    //     endDate = dayjs(null)
    // }
    // if(booking.startTime === undefined) {
    //     startDate = dayjs(null)
    //     dateMax = dayjs(null)
    // } else if(booking.startTime & booking.endTime) {
    //     dateMax = dayjs(null)
    //     // dateMin = dayjs(null)
    //     let flag = true;
    //     for (let i = 0; i < list.length; i++) {
    //         if((dayjs(booking.startTime) < dayjs(list[i])) && (dayjs(booking.endTime) > dayjs(list[i]))){
    //             flag = false;
    //             break
    //         }
    //     }
    //     if(flag === false) {
    //         dispatch(getStartEndDate([booking.startTime, undefined]))
    //     }
    // }
    // else {
    //     // Loại bỏ những ngày bị vướng tour gần nhất về sau
    //     for (let i = 0; i < list.length; i++) {
    //         const dateObject = new Date(list[i])
    //         if(dayjs(dateObject) > dayjs(booking.startTime)) {
    //             dateMax = dayjs(list[i]);
    //             break;
    //         }
    //     }
    // }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
                slotProps={{
                    actionBar: { actions: [] },
                }}
                calendars={2}
                disablePast={true}
                disableHighlightToday={true}
                onChange={handleDateChange}
                shouldDisableDate={shouldDisableDate}
                value={[startDate, endDate]}
                // maxDate={dateMax}
                // minDate={dateMin}

            />
        </LocalizationProvider>
    );
}
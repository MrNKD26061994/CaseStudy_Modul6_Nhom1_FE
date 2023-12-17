// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import dayjs from "dayjs";
// export default function Calendar() {
//
//
//     console.log(dayjs().format('YYYY-MM-DD'))
//     const handleDateChange = (date) => {
//         // Xử lý thay đổi ngày nếu cần
//         console.log(date);
//     };
//
//     const disabledDates = [dayjs().add(1, 'day').format('YYYY-MM-DD'), dayjs().add(3, 'day').format('YYYY-MM-DD'), dayjs().add(2, 'day').format('YYYY-MM-DD')];
//     const shouldDisableDate = (day) => {
//         const result = disabledDates.some(disabledDate => day.format('YYYY-MM-DD') === (disabledDate));
//         return result;
//     };
//
//
//
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={['DateRangePicker']}>
//                 <DateRangePicker
//                     localeText={{ start: 'Check-in', end: 'Check-out' }}
//                     open={true}
//                     disablePast={true}
//                     onChange={handleDateChange}
//                     calendars={2}
//                     shouldDisableDate={shouldDisableDate}
//                 />
//             </DemoContainer>
//         </LocalizationProvider>
//     );
// }
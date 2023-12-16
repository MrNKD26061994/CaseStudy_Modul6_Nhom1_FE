import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import viLocale from 'date-fns/locale/vi';


export default function CalendarTest() {

    const handleDateChange = (date) => {
        // Xử lý thay đổi ngày nếu cần
        console.log(date);
    };

    const disabledDates = [dayjs().add(1, 'day').format('YYYY-MM-DD'), dayjs().add(3, 'day').format('YYYY-MM-DD'), dayjs().add(2, 'day').format('YYYY-MM-DD')];
    const shouldDisableDate = (day) => {
        const result = disabledDates.some(disabledDate => day.format('YYYY-MM-DD') === (disabledDate));
        return result;
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateRangePicker
                slotProps={{
                    actionBar: { actions: [] },
                }}
                calendars={2}
                disablePast={true}
                shouldDisableDate={shouldDisableDate}
                onChange={handleDateChange}
            />
        </LocalizationProvider>
    );
}
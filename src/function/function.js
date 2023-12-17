export function getDaysBetweenTwoDates(start, end) {
    const dayjs = require("dayjs");
    const startDate = dayjs(start);
    const endDate = dayjs(end);

    const days = [];
    let currentDate = startDate;

    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
        days.push(currentDate.format('YYYY-MM-DD'));
        currentDate = currentDate.add(1, 'day');
    }
    return days;
}

export function getNumberOfNights(start, end) {
    return getDaysBetweenTwoDates(start, end).length - 1;
}

export function totalMoney(start, end, price) {
    let days = getNumberOfNights(start, end);
    return days * price;
}
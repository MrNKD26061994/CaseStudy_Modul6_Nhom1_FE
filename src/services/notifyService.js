import customAxios from "./api";

const saveNotify = (notify) => {
    return customAxios.post('/api/notification', notify)
}

const countUnReadNotifyByAccountLogin = (accountId) => {
    return customAxios.get(`/api/notifications/count-unread/${accountId}`)
}

export {
    saveNotify,
    countUnReadNotifyByAccountLogin
};
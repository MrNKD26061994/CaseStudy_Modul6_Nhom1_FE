import customAxios from "./api";
import {createAsyncThunk} from "@reduxjs/toolkit";

const saveNotify = (notify) => {
    return customAxios.post('/api/notification', notify)
}

const listUnReadNotifyByAccountLogin = (accountId) => {
    return customAxios.get(`/api/notification/list-unread/${accountId}`)
}

export const countUnreadNotify = createAsyncThunk(
    'notify/countUnread',
    async (count) => {
        return count;
    }
)
export const listUnReadNotify = createAsyncThunk(
    'notify/listUnread',
    async (list) => {
        return list;
    }
)
export const subUnReadNotify = createAsyncThunk(
    'notify/subUnReadNotify',
    async (data) => {
        const res = await customAxios.put('api/notification/read/' + data.id ,data);
        return res.data;
    }
)

export {
    saveNotify,
    listUnReadNotifyByAccountLogin
};
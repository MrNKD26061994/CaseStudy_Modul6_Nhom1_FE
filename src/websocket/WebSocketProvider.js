import {createContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import _ from "lodash";
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {toast} from "react-toastify";
import {countUnreadNotify, listUnReadNotifyByAccountLogin} from "../services/notifyService";

export const WebSocketContext = createContext(null)

const WebSocketProvider = ({children}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const account = useSelector(state => state.user.currentUser);
    const [notify, setNotify] = useState({});

    // const notify = useSelector(state => state.webSocket.notify);


    let socket;
    let stompClient;
    let ws;

    useEffect(() => {
        if (!_.isEmpty(notify))
            toast.success(`Bạn có 1 thông báo mới từ ${notify?.sender?.username}`, {position: "bottom-right"});
    }, [notify])

    const sendNotify = (notify) => {
        console.log(notify)
        if (!stompClient){
            return;
        } else {
            stompClient.send("/app/notify", {}, JSON.stringify(notify));
        }
    }

    const onConnected = () => {
        // stompClient.subscribe(`/topic/${account.id}`, onMessageReceived);
        // stompClient.subscribe(`/block/${account.id}`, onBlockReceived);
        stompClient.subscribe(`/notify/${account.id}`, onNotifyReceived);
        // stompClient.subscribe(`/admin/${account.id}`, onAdminReceived);
    }

    const onNotifyReceived = (payload) => {
        const data = JSON.parse(payload.body);
        console.log(data)
        if (data.message === 'Thay đổi trạng thái') {
            // dispatch(changeStatus());
        } else {
            setNotify(data);
            listUnReadNotifyByAccountLogin(account.id).then(response => {
                dispatch(countUnreadNotify(response.data.length));
            }).catch(error => {
                console.log(error);
            })
            // if (data.message === 'Admin đã đồng ý cho bạn làm chủ nhà'){
            //     AccountService.getAccountById(account.id).then(response => {
            //         const data = {...response, token: account.token};
            //         data.password = null;
            //         dispatch(editAccount(data));
            //         localStorage.setItem("account", JSON.stringify(data));
            //     }).catch(error => {
            //         console.log(error);
            //     })
            // }
        }
    }


    const onError = (err) => {
        console.log(err);
    }

    if (!socket && !_.isEmpty(account)) {
        socket = new WebSocket('ws://localhost:8080/ws/websocket');
        stompClient = Stomp.over(socket);
        stompClient.debug = null;
        stompClient.connect({}, onConnected, onError);
    }
    ws = {
        sendNotify,
    }
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
}

export default WebSocketProvider;
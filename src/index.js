import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/Store";
import "react-toastify/dist/ReactToastify.css";
import WebSocketProvider from "./websocket/WebSocketProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <WebSocketProvider>
                <App />
            </WebSocketProvider>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();

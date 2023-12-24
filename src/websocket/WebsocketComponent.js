//
// import React, {useEffect, useState} from 'react';
// import Stomp from 'stompjs';
// import SockJS from 'sockjs-client';
//
// const WebsocketComponent = () => {
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState('');
//     const [nickname, setNickname] = useState('');
//     const [stompClient, setStompClient] = useState(null);
//
//     useEffect(() => {
//         const socket = new SockJS('http://localhost:8080/ws');
//         const client = Stomp.over(socket);
//
//         client.connect({}, () => {
//             client.subscribe('/topic', (message) => {
//                 const receivedMessage = JSON.parse(message.body);
//                 console.log("AAAAAAAAAAAA",receivedMessage)
//                 setMessages((prevMessages) => [...prevMessages, receivedMessage]);
//             });
//         });
//
//         setStompClient(client);
//
//         return () => {
//             client.disconnect();
//         };
//     }, []);
//
//     const handleNicknameChange = (event) => {
//         setNickname(event.target.value);
//     };
//
//     const handleMessageChange = (event) => {
//         setMessage(event.target.value);
//     };
//
//     const sendMessage = () => {
//         if (message.trim()) {
//             const chatMessage = {
//                 nickname,
//                 content: message,
//             };
//
//             stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
//             setMessage('');
//         }
//     };
//
//     return (
//         <div>
//             <ul>
//                 {messages.map((msg, index) => (
//                     <li key={index}>
//                         <div style={{ display: 'flex', alignItems: 'center' }}>
//                             <div style={{ marginRight: '10px' }}>{msg.nickname.charAt(0)}</div>
//                             <div>
//                                 <strong>{msg.nickname}</strong>: {msg.content}
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//
//             <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
//                 <input
//                     type="text"
//                     placeholder="Enter your nickname"
//                     value={nickname}
//                     onChange={handleNicknameChange}
//                     style={{ marginRight: '10px', width: '150px' }}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Type a message"
//                     value={message}
//                     onChange={handleMessageChange}
//                 />
//                 <button onClick={sendMessage} disabled={!message.trim()}>
//                     Send
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// export default WebsocketComponent;
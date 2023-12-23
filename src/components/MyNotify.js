import notify from "../assets/imgs/header/notify.png"
import "./Header/style.css"
import {useDispatch, useSelector} from "react-redux";
import {countUnreadNotify, listUnReadNotify, subUnReadNotify} from "../services/notifyService";
export default function MyNotify() {
    const dispatch = useDispatch();

    let count = useSelector(state => state.notify.count);
    let listNotify = useSelector(state => state.notify.listNotify);

    function handleNotify(item) {
        dispatch(countUnreadNotify(count - 1));
        dispatch(subUnReadNotify(item))
        // console.log(item)
    }

    return (
        <>
            <div className='notify' style={{position: "relative",display: "flex", justifyContent: "center", alignItems: "center", margin: "0 16px", cursor: "pointer", padding: "12px", borderRadius: "50%"}}>
                <img style={{width: "18px", height: "18px"}} src={notify} alt=""/>
                {count ?
                    <>
                        <div className='count-unRead'>{count}</div>
                        <div className="list-notify">
                            {listNotify ?
                                <>
                                {listNotify.map((item, index) => (
                                    <div onClick={() => handleNotify(item)} className={'sub-login-item'}>{item.message}</div>
                                ))
                                }
                                </>
                                :
                                <></>
                            }
                        </div>
                    </>
                    :
                    <></>
                }


            </div>
        </>
    )
}
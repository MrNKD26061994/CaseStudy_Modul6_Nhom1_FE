import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {checkRegistration} from "../services/userService";
import {toast} from "react-toastify";

export default function Registration() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token} = useParams()
    // console.log(token)
    useEffect(() => {
        dispatch(checkRegistration(token)).then((res) => {
            console.log(res)
            if(res.payload.status === 200) {
                navigate('/')
                toast.success("Bạn đã xác thực thành công!");
            } else if(res.payload.status === 400) {
                navigate('/')
                toast.error("Bạn đã quá hạn để xác thực!");
            } else if(res.payload.status === 404) {
                navigate('/')
                toast.error("Xác thực không thành công!");
            }
        });
    },[])

    return (
        <>
        </>
    )
}
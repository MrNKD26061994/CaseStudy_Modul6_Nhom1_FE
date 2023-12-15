import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/home/Home";
import UserDetail from "./pages/home/user/UserDetail";
import HomeUser from "./pages/home/user/HomeUser";
import UserInfo from "./pages/home/user/UserInfo";
import Registration from "./pages/Registration";
import {useEffect} from "react";
import {findAdminById, findUserById} from "./services/userService";
import {useDispatch} from "react-redux";
import House from "./pages/home/house/House";
import OwnerList from "./pages/Admin/OwnerList";
import RenterList from "./pages/Admin/RenterList";
import ShowListUser from "./pages/Admin/ShowListUser";
import SetPermisionForRenter from "./pages/Admin/SetPermisionForRenter";
import Test from "./firebase/Test";
import ViewUserDetail from "./pages/Admin/ViewUserDetail";
import ShowAdminDetail from "./pages/Admin/ShowAdminDetail";
import ListHouse from "./pages/home/house/ListHouse";
import AddHouse from "./pages/home/house/AddHouse";
import BecomeOwner from "./pages/home/user/BecomeOwner";
import HouseDetail from "./pages/home/web/HouseDetail";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user') != null) {
            let user = JSON.parse(localStorage.getItem('user'));
            if(user.roles.some((item) => item.authority === "ROLE_ADMIN")) {
                dispatch(findAdminById(user.id));
            } else {
                dispatch(findUserById(user.id));
            }
            navigate('/')
            // dispatch(findUserById(JSON.parse(localStorage.getItem('user')).id) != null);
        } else {
            navigate('/')
        }
    },[])
  return (
    <div className="App myContainer">
        <ToastContainer />
        <Routes>
            <Route path={''} element={<Home></Home>}>
                <Route path={''} element={<HomeUser />} />
                <Route path={'user-detail'} element={<UserDetail />} />
                <Route path={'user-info'} element={<UserInfo />} />
                <Route path={'add-house'} element={<AddHouse></AddHouse>}></Route>
                <Route path={'houses'} element={<ListHouse></ListHouse>}></Route>
                <Route path={'ListOwner'} element={<OwnerList/>} />
                <Route path={'ListRenter'} element={<RenterList/>} />
                <Route path={'admin/UserManagement'} element={<ShowListUser/>} />
                <Route path={'admin/SetPermisionForRenter'} element={<SetPermisionForRenter/>} />
                <Route path={'admin/showUserDetail/:id'} element={<ViewUserDetail/>} />
                <Route path={'become-an-owner'} element={<BecomeOwner />} />
                <Route path={'house-detail'} element={<HouseDetail />} />
                <Route path={'admin/currentAdminDetail'} element={<ShowAdminDetail/>} />

                <Route path={'test'} element={<Test />} />
            </Route>
            <Route path={'/api/registrationConfirm/:token'} element={<Registration/>} ></Route>
        </Routes>

    </div>
  );
}

export default App;

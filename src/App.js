import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/home/Home";
import UserDetail from "./pages/home/user/UserDetail";
import HomeUser from "./pages/home/user/HomeUser";
import UserInfo from "./pages/home/user/UserInfo";
import Registration from "./pages/Registration";
import {useDispatch, useSelector} from "react-redux";
import OwnerList from "./pages/Admin/OwnerList";
import RenterList from "./pages/Admin/RenterList";
import ShowListUser from "./pages/Admin/ShowListUser";
import SetPermisionForRenter from "./pages/Admin/SetPermisionForRenter";
import ViewUserDetail from "./pages/Admin/ViewUserDetail";
import ShowAdminDetail from "./pages/Admin/ShowAdminDetail";
import ListHouse from "./pages/home/house/ListHouse";
import AddHouse from "./pages/home/house/AddHouse";
import EditHouse from "./pages/home/house/EditHouse";
import BecomeOwner from "./pages/home/user/BecomeOwner";
import HouseDetail from "./pages/home/web/HouseDetail";
import ShowListHouseForHomePage from "./pages/home/house/ShowListHouseForHomePage";
import BookAHouse from "./pages/home/Booking/BookAHouse";
import UserSeeBookingHistory from "./pages/home/Booking/UserSeeBookingHistory";
import ShowListBookingOfTheOwnerFe from "./pages/home/Booking/ShowListBookingOfTheOwnerFE";
import ShowTop5HouseBooking from "./components/Top5/ShowTop5HouseBooking";
import {countUnreadNotify, listUnReadNotify, listUnReadNotifyByAccountLogin} from "./services/notifyService";
import ListHouseByName from "./pages/home/house/ListHouseByName";
import ListHouseByAddress from "./pages/home/house/ListHouseByAddress";
import ReviewBookingHistory from "./pages/home/Booking/ReviewBookingHistory";



function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const account = useSelector(state => state.user.currentUser);
    account && listUnReadNotifyByAccountLogin(account.id).then(response => {
        console.log(response.data)
        dispatch(countUnreadNotify(response.data.length));
        dispatch(listUnReadNotify(response.data))
    }).catch(error => {
        console.log(error);
    })
  return (
    <div className="App myContainer">
        <ToastContainer />
        <Routes>
            <Route path={''} element={<Home></Home>}>
                <Route path={''} element={<HomeUser />} />
                <Route path={''} element={<ShowListHouseForHomePage />} />
                <Route path={'search-name/:name'} element={<ListHouseByName/>} />
                <Route path={'search-address/:address'} element={<ListHouseByAddress/>} />
                <Route path={'user-detail'} element={<UserDetail />} />
                <Route path={'user-info'} element={<UserInfo />} />
                <Route path={'edit-house/:id'} element={<EditHouse></EditHouse>}></Route>
                <Route path={'add-house'} element={<AddHouse></AddHouse>}></Route>
                <Route path={'houses'} element={<ListHouse></ListHouse>}></Route>
                <Route path={'ListOwner'} element={<OwnerList/>} />
                <Route path={'ListRenter'} element={<RenterList/>} />
                <Route path={'admin/UserManagement'} element={<ShowListUser/>} />
                <Route path={'admin/SetPermisionForRenter'} element={<SetPermisionForRenter/>} />
                <Route path={'admin/showUserDetail/:id'} element={<ViewUserDetail/>} />
                <Route path={'become-an-owner'} element={<BecomeOwner />} />
                <Route path={'house-detail/:id'} element={<HouseDetail />} />
                <Route path={'admin/currentAdminDetail'} element={<ShowAdminDetail/>} />
                <Route path={'bookAHouse/:id'} element={<BookAHouse/>} />
                <Route path={'UserSeeBookingHistory'} element={<UserSeeBookingHistory/>} />
                <Route path={'ShowTop5HouseBooking'} element={<ShowTop5HouseBooking/>} />
                <Route path={'ShowListBookingOfTheOwnerFe'} element={<ShowListBookingOfTheOwnerFe/>} />
                <Route path={'ReviewBookingHistory'} element={<ReviewBookingHistory/>} />


                {/*<Route path={'test'} element={<Test />} />*/}
            </Route>
            <Route path={'/api/registrationConfirm/:token'} element={<Registration/>} ></Route>
        </Routes>

    </div>
  );
}

export default App;

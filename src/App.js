import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import UserDetail from "./pages/home/user/UserDetail";
import HomeUser from "./pages/home/user/HomeUser";
import UserInfo from "./pages/home/user/UserInfo";

function App() {
  return (
    <div className="App myContainer">
        <ToastContainer />
        <Routes>
            <Route path={''} element={<Home></Home>}>
                <Route path={''} element={<HomeUser />} />
                <Route path={'user-detail'} element={<UserDetail />} />
                <Route path={'user-info'} element={<UserInfo />} />
            </Route>
        </Routes>

    </div>
  );
}

export default App;

import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ShowListUser from "./pages/Admin/ShowListUser";

function App() {
  return (
    <div className="App myContainer">
        <ToastContainer />
        <Routes>
            <Route path={''} element={<Home></Home>}>
                <Route path={"/admin/listUser"} element={<ShowListUser/>}></Route>
            </Route>
        </Routes>

    </div>
  );
}

export default App;

import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getHouses} from "./services/houseService";
import House from "./pages/house/house";



function App() {

  return (
    <div className="App myContainer">
        <ToastContainer />
        <Routes>
            <Route path={''} element={<Home></Home>}>
                <Route path={'houses'} element={<House></House>}></Route>
            </Route>


        </Routes>

    </div>
  );
}

export default App;

import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App myContainer">
        <ToastContainer />
        <Routes>
            <Route path={''} element={<Home></Home>} />
        </Routes>

    </div>
  );
}

export default App;

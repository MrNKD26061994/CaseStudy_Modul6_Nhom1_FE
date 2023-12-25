import Header from "../../components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <div style={{height: "80px"}}></div>
            <Footer></Footer>
        </>
    );
}
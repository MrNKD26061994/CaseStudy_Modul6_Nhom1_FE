import Header from "../../components/Header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}
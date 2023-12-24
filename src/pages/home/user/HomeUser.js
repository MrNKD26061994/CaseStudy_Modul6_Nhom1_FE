import Navbar from "../../../components/Nav";
import Container from "../../../components/Container";
import ShowListHouseForHomePage from "../house/ShowListHouseForHomePage";
import ShowTop5HouseBooking from "../../../components/Top5/ShowTop5HouseBooking";

export default function HomeUser() {
    return (
        <>
            <Navbar />
            <ShowListHouseForHomePage />
        </>
    )
}
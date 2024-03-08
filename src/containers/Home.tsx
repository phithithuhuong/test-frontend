import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Contents } from "./Contents"

export const Home = () => {
    return (
        <div className=" w-full overflow-y-auto h-screen bg-[#F1F5F6] flex flex-col items-center">
            <Navbar />
            <div className=" pt-[30px] w-full flexCenter ">
                <div className=" max-w-[1410px] w-full flex flex-row  space-x-5">
                    <Sidebar />
                    <Banner />
                </div>
            </div>
            <Contents />
        </div>)
}
import { Card } from "../base/Card"
import { DataLeft, DataRight } from "./data"

export const Contents = () => {
    return <div className=" max-w-[1410px] mt-[60px] w-full  flexCenter">
        <div className=" flex flex-row space-x-[5px]">
            <div className="grid grid-cols-2 gap-[5px]">
                {DataLeft.map((item, index) => <Card item={item} key={index} />)}
            </div>
            <div className=" px-[35px] py-10  flex flex-col bg-white w-[466px] h-[751px]">
                <span className=" text-[16px] font-bold uppercase border-b pb-[11px]">Today’s Offer</span>
                <div className=" relative mt-5">
                    <img src="/bg7.png" className=" w-full " />
                    <span className={` px-[11px] py-1 bg-[#DC323C] text-white text-[12px] absolute top-0 left-0 rounded-[2px]`}>-20%</span>
                    <div className=" absolute right-0 top-0 rounded-full p-[9px] border">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 4H7V13H3C1.89543 13 1 12.1046 1 11V4Z" fill="#16BCDC" fillOpacity="0.3" />
                            <path d="M7.54688 9.07812C7.54688 8.77609 7.30204 8.53125 7 8.53125C6.69796 8.53125 6.45312 8.77609 6.45312 9.07812V11.2656C6.45312 11.5677 6.69796 11.8125 7 11.8125C7.30204 11.8125 7.54688 11.5677 7.54688 11.2656V9.07812Z" fill="#1AB4D1" />
                            <path d="M1.53125 8.53125C1.22921 8.53125 0.984375 8.77609 0.984375 9.07812V11.2656C0.984375 12.7734 2.21102 14 3.71875 14H10.2812C11.789 14 13.0156 12.7734 13.0156 11.2656V9.07812C13.0156 8.77609 12.7708 8.53125 12.4688 8.53125C12.1667 8.53125 11.9219 8.77609 11.9219 9.07812V11.2656C11.9219 12.1703 11.1859 12.9062 10.2812 12.9062H3.71875C2.81411 12.9062 2.07812 12.1703 2.07812 11.2656V9.07812C2.07812 8.77609 1.83329 8.53125 1.53125 8.53125Z" fill="#1AB4D1" />
                            <path d="M1.64062 7.65625H12.3594C13.264 7.65625 14 6.92027 14 6.01562V4.92188C14 4.01723 13.264 3.28125 12.3594 3.28125H10.5338C10.7206 2.95922 10.8281 2.58579 10.8281 2.1875C10.8281 0.981313 9.84681 0 8.64062 0C7.98774 0 7.40116 0.287875 7 0.742902C6.59884 0.287875 6.01226 0 5.35938 0C4.15319 0 3.17188 0.981313 3.17188 2.1875C3.17188 2.58579 3.27939 2.95922 3.46618 3.28125H1.64062C0.735984 3.28125 0 4.01723 0 4.92188V6.01562C0 6.92027 0.735984 7.65625 1.64062 7.65625ZM8.64062 1.09375C9.24372 1.09375 9.73438 1.58441 9.73438 2.1875C9.73438 2.79059 9.24372 3.28125 8.64062 3.28125H7.54688V2.1875C7.54688 1.58441 8.03753 1.09375 8.64062 1.09375ZM4.26562 2.1875C4.26562 1.58441 4.75628 1.09375 5.35938 1.09375C5.96247 1.09375 6.45312 1.58441 6.45312 2.1875V3.28125H5.35938C4.75628 3.28125 4.26562 2.79059 4.26562 2.1875ZM1.09375 4.92188C1.09375 4.62033 1.33908 4.375 1.64062 4.375H6.45312V4.92188C6.45312 5.22391 6.69796 5.46875 7 5.46875C7.30204 5.46875 7.54688 5.22391 7.54688 4.92188V4.375H12.3594C12.6609 4.375 12.9062 4.62033 12.9062 4.92188V6.01562C12.9062 6.31717 12.6609 6.5625 12.3594 6.5625H1.64062C1.33908 6.5625 1.09375 6.31717 1.09375 6.01562V4.92188Z" fill="#1AB4D1" />
                        </svg>
                    </div>
                    <span className=" font-bold py-4">Samsung Galaxy S21 Ultra 5G 128GB - Black</span>
                    <div className=" pt-5 flex flex-row gap-x-2">
                        <img src="/rate.png" className=" w-[64px] h-[12px]" />
                        <span className=" text-[#8D979E] self-center text-[12px]">29 reviews</span>
                    </div>
                    <div className=" flex flex-row gap-x-2">
                        <span className=" text-[18px] font-semibold text-[#DC323C]">$128.00</span>
                        <span className=" text-[#8D979E] self-end">$12.00</span>
                    </div>
                    <div className=" mt-[18px]">Hurry up! Offer ends in:</div>

                    <div className="pt-[9px] flex flex-row items-center gap-x-[7px] ">
                        <div className=" w-[45px] h-[50px] flexCenter bg-[#DC323C]  text-white rounded-[3px]">230</div>
                        <span className="font-bold ">:</span>
                        <div className=" w-[45px] h-[50px] flexCenter bg-[#DC323C]  text-white rounded-[3px]">29</div>
                        <span className="font-bold ">:</span>
                        <div className=" w-[45px] h-[50px] flexCenter bg-[#DC323C]  text-white rounded-[3px]">20</div>
                        <span className="font-bold ">:</span>
                        <div className="w-[45px] h-[50px] flexCenter bg-[#DC323C]  text-white rounded-[3px]">08</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[5px] ">
                {DataRight.map((item, index) => <Card item={item} key={index} />)}
            </div>
        </div>

    </div>
}
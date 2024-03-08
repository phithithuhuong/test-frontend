import { Arrowright } from "../base/Arowright";

const Sidebar = () => {
    const menus = [
        { title: "Computer & Desktop" },
        { title: "Laptop & Ipad" },
        { title: "Cameras & Photos" },
        { title: "Smart Phones & Tablets" },
        { title: "Home & Kitchen" },
        { title: "TV & Audios" },
        { title: "Health & Beauty" },
        { title: "Watches & Eyewear" },
        { title: "Top Deals" },
        { title: "Top Selling Products" },
        { title: "Top Featured Products" },
    ]

    return <div className=" rounded-[5px] bg-white w-[270px] py-[31px] px-5">
        {menus.map((item, index) => (
                <button className={`hover:font-bold flexBetween font-medium py-[11px] w-full ${index !== menus.length - 1 && 'border-b'}`} key={index}>
                    <span>{item.title}</span>
                    {(index !== 3 && index !== 5 && index !== 7 && index !== 8 && index !== 9) && <Arrowright size="16px" />}
                </button>
            ))}
    </div>
}

export default Sidebar;
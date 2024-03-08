import { Check } from "./Check"

interface IProps {
    item: any;

}

export const Card = ({ item }: IProps) => {
    return <div className=" w-[231px] h-[371px] bg-white flex flex-col rounded-[5px] p-5">
        <div className=" relative">
            <img src="/bg4.png" className=" w-[191px] h-[191px] object-cover" />
            {item.coupon && <span className={` px-[11px] py-1 bg-[#DC323C] text-white text-[12px] absolute top-0 left-0 rounded-[2px]`}>-{item.coupon}%</span>}
            {item.status && <span className={` px-[11px] py-1 bg-[#008A00] text-white text-[12px] absolute top-0 left-0 rounded-[2px]`}>{item.status}</span>}
            

        </div>
        <span className=" font-bold py-4">{item.title}</span>
        <div className=" flex flex-row gap-x-2">
            <img src="/rate.png" className="  my-4 w-[64px] h-[12px]" />
            <span className=" text-[#8D979E] self-center text-[12px]">({item.comment})</span>
        </div>
        <div className=" flex flex-row gap-x-2">
            <span className=" text-[18px] font-semibold">${item.price}.00</span>
            <span className=" text-[#8D979E] self-end">${item.price_real}.00</span>
        </div>
        {item.quantity >= 3 ?
            <div className=" pt-2.5 flex flex-row gap-x-2 items-center text-[12px]">
                <Check color="#008A00" />
                <span className=" text-[#008A00]">In stock</span>
                <span className=" font-semibold"> {item.quantity}</span>
                <span className=" text-[#515D66]">products</span>
            </div> :
            <div className=" text-[#EF262C] pt-2.5 flex flex-row gap-x-2 items-center text-[12px]">
                <Check color="#EF262C" />
                <span >Only</span>
                <span > {item.quantity}</span>
                <span >left in stock</span>
            </div>}

    </div>
}

const Money = () => {
    return (
        <div className="grid w-full bg-white py-[10px] grid-cols-2 px-[25px]">
            <div className="font-Roboto font-medium capitalize flex flex-col gap-[5px]">
                <p className="text-opacity-70 text-black">subtotal</p>
                <p className="text-opacity-70 text-black">tax</p>
                <p className="text-opacity-70 text-black">discount</p>
                <p className="text-[19px] mt-[5px]">payable amount</p>
            </div>
            <div className="flex items-end flex-col font-Roboto font-bold gap-[5px]">
                <p>$200</p>
                <p>$45</p>
                <p>$2</p>
                <p className="text-[19px] mt-[5px]">$245</p>
            </div>
        </div>
    )
}

export default Money
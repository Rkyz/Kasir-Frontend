
// eslint-disable-next-line react/prop-types
const ItemPayment = ({handleDetails,GrFormNext, IoMdCloseCircle,details}) => {
  return (
    <div className="bg-Yellow rounded-md overflow-hidden pl-[5px]">
    <div className="bg-Gray w-full h-auto flex flex-col  p-[15px] rounded-md">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
            <button onClick={handleDetails}>
            <GrFormNext className="font-thin text-[20px]"/>
            </button>
            <div className="flex items-center gap-[10px] font-semibold capitalize">
                <p>1</p>
                <p>nasi goreng pete</p>
            </div>
        </div>
        <div className="flex items-center font-bold gap-[10px]">
            <p>$25.00</p>
            <button>
                <IoMdCloseCircle className="text-black text-opacity-50"/>
            </button>
        </div>
        </div>
        <div className="flex items-center justify-between px-[30px]">
            <p className="text-black text-opacity-40 capitalize text-[13px]">medium</p>
            <p className="text-black text-opacity-40 text-[13px] line-through">$25.00</p>
        </div>
        
       {details && (
        
        <div className="grid grid-cols-2 mt-[10px] pl-[30px] gap-[10px]">
            <div className="flex items-start flex-col gap-[5px]">
                <p className="capitalize text-[14px] font-semibold font-Roboto">quantity</p>
                <div className="bg-white w-full p-[10px] flex justify-end text-[14px] rounded-sm">1</div>
            </div>
            <div className="flex items-start flex-col gap-[5px]">
                <p className="capitalize text-[14px] font-semibold font-Roboto">discount(%)</p>
                <div className="bg-white w-full p-[10px] flex justify-end text-[14px] rounded-sm">20</div>
            </div>
        </div>
       )}
    </div>
    </div>
  )
}

export default ItemPayment

// eslint-disable-next-line react/prop-types
const List = ({dataCart}) => {
    console.log(dataCart)
  return (
    <div className="bg-transparent w-full rounded-md overflow-hidden p-[10px] flex flex-col gap-[10px]">
        {dataCart.map((data, index) => (
        <div className="bg-Gray w-full h-auto flex flex-col  p-[15px] rounded-md" key={index}>
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
                <div className="flex items-center gap-[10px] font-semibold capitalize">
                    <p>{data.JumlahProduk}</p>
                    <p>{data.NamaProduk}</p>
                </div>
            </div>
            <div className="flex items-center font-bold gap-[10px]">
                <p>RP {data.Harga}</p>
            </div>
            </div>
            <div className="flex items-center justify-between pl-[17px] ">
                <p className="text-black text-opacity-40 capitalize text-[13px]">medium</p>
                <p className="text-black text-opacity-40 text-[13px] line-through">$25.00</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default List
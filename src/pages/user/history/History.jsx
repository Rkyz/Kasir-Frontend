import Icon from "../../../utils/Icon";
import {
    Top, Warning, Payment, TableProduk,AddProduct, Side, Tippy
} from "../../../utils/Index"
import { useToggle } from '../../../utils/Handle';
import setStatusOffline from "../../../utils/Offline"
import {useState, useEffect} from "../../../utils/React"
import {getAllDetail, searchDetail} from "../../../utils/Service"
import Offline from "../../../components/user/offline/Offline";
import piring from "../../../assets/piring.png"
import Backoffline from "../../../components/user/offline/BackOffline";

const History = () => {
    const [details, handleDetails] = useToggle(false);
    const [detailsDiscount, handleDetailsDiscount] = useToggle(false);
    const [openPayment, handleOpenPayment] = useToggle(false);
    const [closeToggle, handleCloseToggle] = useToggle(false);
    const [openDropdown, handleOpenDropdown] = useToggle(false);
    const [detailData, setdetailData] = useState(null);
    const [detailDataById, setdetailDataById] = useState();
    const [itemDetail, setItemDetail] = useState(null);
    const [totalHarga, setTotalHarga] = useState(null);
    const offlineStatus = setStatusOffline();
    const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];

    console.log(totalHarga)

    useEffect(() => {
        const fetchDetailPenjualan = async () => {
            try {
                const response = await getAllDetail();
                setdetailData(response.data.data);
                console.log(response.data.data)
              } catch (error) {
              console.error(error)
              }
          };
          
          fetchDetailPenjualan();
        }, []);

        const fetchDetailPenjualanId = async (id) => {
            try {
                const response = await searchDetail(id);
                setdetailDataById(response.data.data);
                setItemDetail(response.data.data.items)
                setTotalHarga(response.data.data.PenjualanID.TotalHarga)
                console.log(response.data.data.PenjualanID,'Hello Guys')
                console.log(response.data)
              } catch (error) {
              console.error(error)
              }
          };

          console.log('id',itemDetail)
         const formatTime = (createdAt) => {
            if (!createdAt) return "";
            const timePart = createdAt.split("T")[1];
            const [hour, minute] = timePart.split(":").slice(0, 2);
            const amOrPm = parseInt(hour) >= 12 ? "PM" : "AM";
            const formattedHour = parseInt(hour) > 12 ? parseInt(hour) - 12 : parseInt(hour);
            return `${formattedHour}:${minute} ${amOrPm}`;
        };

        const formatToRupiah = (number) => {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number).replace(",00", "");
        };

        const lengthOfDetailDataById = detailDataById ? Object.keys(detailDataById).length  : 0;
        const lengthDetail = detailDataById ? Object.keys(itemDetail).length  : 0;
        console.log("Panjang data detailDataById:", lengthDetail);
        
        

        const closeDetailDataById = () => {
            setdetailDataById(null); // Set detailDataById to null to close it
        };
  
  return (
    <div className={`w-full h-auto ${offlineStatus || openPayment ? 'max-h-screen overflow-hidden':''}`}>
    <Top detailData={detailData} offlineStatus={offlineStatus}  handleOpenPayment={handleOpenPayment} openPayment={openPayment} handleCloseToggle={handleCloseToggle} closeToggle={closeToggle} openDropdown={openDropdown} handleOpenDropdown={handleOpenDropdown}/>
    <div className="flex h-full w-full relative">
        <Offline offlineStatus={offlineStatus}/>
        <Side closeToggle={closeToggle}/>
        <Backoffline offlineStatus={offlineStatus}  closeToggle={closeToggle} />
        <div className={`bg-transparent  gap-[15px] w-full h-full text-black  pt-[79px] pr-[15px] pb-[15px] flex ${closeToggle ? 'max-sm:pl-[15px] sm:pl-[15px]':'max-sm:pl-[15px] sm:pl-[100px]'} `}>
            <div className={`bg-transparent overflow-hidden w-full gap-[15px] flex flex-col ${lengthOfDetailDataById === 0 ? '':'mx:pr-[320px]'}`}>
            {detailData && detailData.map((detail, index) => (
                <button key={index} onClick={() => fetchDetailPenjualanId(detail.PenjualanID.id)} className="w-full bg-white p-[20px] items-center rounded-xl hover:border-[2px] border border-white hover:border-yellow-500 flex justify-between">
                    <div className="flex items-center gap-[15px]">
                        {/* <div className="w-[40px] h-[40px]">
                        <img src={piring} alt="" className="w-full h-full object-cover "/>
                        </div> */}
                    <div className="flex flex-col items-start">
                        <p className="text-[20px] font-Roboto font-bold">Orders : #{detail.PenjualanID.id}</p>
                        <p className="text-[14px] font-Roboto text-gray-500">Qty : {detail.items.length} Produk</p>
                    </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[18px] font-Roboto text-gray-400">{formatTime(detail.PenjualanID.created_at)}</p>
                        <div className="flex gap-[10px] items-center">
                            <p className="text-[25px] font-Roboto font-bold">{formatToRupiah(detail.PenjualanID.TotalHarga)}</p>
                            <p className="bg-green-500 py-[5px] px-[10px] rounded-full text-white font-Roboto text-[13px] capitalize">success</p>
                        </div>
                    </div>
                </button>
                ))}
            </div>
              {detailDataById &&
            <div className="bg-transparent mx:z-[40] max-mx:flex max-mx:justify-center max-mx:items-end max-mx:bg-black max-mx:bg-opacity-30 max-mx:w-full z-[99] max-mx:fixed max-mx:left-0  pt-[80px] mx:pb-[20px] mx:max-w-[300px] w-full top-0 max-mx:bottom-0 max-mx:h-auto  mx:h-full fixed mx:right-[20px]" >
                <div className="w-full max-mx:max-w-[500px] flex flex-col gap-[10px] mx:h-full max-mx:h-auto bg-white mx:rounded-xl max-mx:rounded-t-xl" >
                    <div className="px-[15px] pt-[15px]">
                        <div>
                        <p className="text-[14px] font-Roboto text-gray-500">Orders ID</p>
                        <p className="text-[20px] font-Roboto text-black font-bold">#{detailDataById.PenjualanID.id}</p>
                        </div>
                    </div>
                    <div className="bg-transparent px-[15px] flex flex-col hidden-scroll gap-[15px] max-mx:h-auto mx:max-h-full mx:h-full max-mx:bg-transparent overflow-y-scroll mt-[10px]">
                    {itemDetail && itemDetail.map((item, index) => (
                    <div className="flex items-center gap-[10px]"  key={index}>
                        <div className="w-[50px] flex-shrink-0 h-[50px] bg-Yellow p-[5px] bg-opacity-30 rounded-md">
                            <img src={piring} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-full">
                            <p className="font-Roboto font-bold">{item.ProdukID.NamaProduk}</p>
                            <div className="flex w-full justify-between bg-transparent">
                                <div className="flex gap-[14px] text-gray-500 font-Roboto items-center">
                                    <p>{formatToRupiah(item.ProdukID.Harga)}</p>
                                    <p className="text-[12px]">x{item.JumlahProduk}</p>
                                </div>
                                <p className="font-Roboto font-bold">{formatToRupiah(item.Subtotal)} </p>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
                    
                    <div className="flex flex-col gap-[10px] px-[15px] max-mx:mt-[20px] pb-[15px]">
                        <div className="flex flex-col gap-[10px]">
                        <div className="grid grid-cols-2">
                            <div>
                                <p>Item({lengthDetail})</p>
                            </div>
                            <div className="flex items-end flex-col">
                                <p>{formatToRupiah(totalHarga)}</p>
                            </div>
                        </div>
                        <div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p>Total</p>
                            </div>
                            <div className="flex items-end flex-col">
                                <p>{formatToRupiah(totalHarga)}</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <p className="font-Roboto font-bold text-[17px]">Payment Methods</p>
                            <div className="flex w-full overflow-hidden">
                                <div className="flex gap-[5px] bg-Gray w-auto items-center py-[3px] px-[8px] rounded-full text-gray-600 capitalize font-Roboto">
                                    <Icon name="FaMoneyBillAlt"/>
                                    <p className="text-[13px]">cash</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={closeDetailDataById} className="bg-Yellow  mt-[10px] font-medium text-white font-Roboto p-[10px] rounded-lg capitalize">
                            close bills
                        </button>
                    </div>
                </div>
            </div>
            }
           <Payment openPayment={openPayment} detailData={detailData} Tippy={Tippy}  details={details} handleDetailsDiscount={handleDetailsDiscount}  handleDetails={handleDetails} detailsDiscount={detailsDiscount} cartData={cartData}/>
        </div>
        <Warning openPayment={openPayment} detailData={detailData} handleOpenPayment={handleOpenPayment}/>
    </div>
</div>
  )
}

export default History






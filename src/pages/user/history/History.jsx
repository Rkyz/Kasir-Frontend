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

const History = () => {
    const [details, handleDetails] = useToggle(false);
    const [detailsDiscount, handleDetailsDiscount] = useToggle(false);
    const [openPayment, handleOpenPayment] = useToggle(false);
    const [closeToggle, handleCloseToggle] = useToggle(false);
    const [openDropdown, handleOpenDropdown] = useToggle(false);
    const [detailData, setdetailData] = useState(null);
    const [detailDataById, setdetailDataById] = useState();
    const [itemDetail, setItemDetail] = useState(null);
    const offlineStatus = setStatusOffline();
    const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];

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
                console.log(response.data.data.items,'Hello Guys')
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

        const lengthOfDetailDataById = detailDataById ? Object.keys(detailDataById).length : 0;
        console.log("Panjang data detailDataById:", lengthOfDetailDataById);
        
        

  
  return (
    <div className={`w-full h-auto ${offlineStatus || openPayment ? 'max-h-screen overflow-hidden':''}`}>
    <Top detailData={detailData} offlineStatus={offlineStatus}  handleOpenPayment={handleOpenPayment} openPayment={openPayment} handleCloseToggle={handleCloseToggle} closeToggle={closeToggle} openDropdown={openDropdown} handleOpenDropdown={handleOpenDropdown}/>
    <div className="flex h-full w-full relative">
        <Offline offlineStatus={offlineStatus}/>
        <Side closeToggle={closeToggle}/>
        {closeToggle && (
            <div className="w-full h-full bg-black bg-opacity-30 sm:hidden fixed z-[30]"/>
        )}
        <div className={`bg-transparent gap-[15px] w-full h-full text-black  pt-[79px] pr-[15px] pb-[15px] flex ${closeToggle ? 'max-sm:pl-[15px] sm:pl-[15px]':'max-sm:pl-[15px] sm:pl-[100px]'} `}>
            <div className={`bg-transparent  w-full gap-[15px] flex flex-col ${lengthOfDetailDataById === 0 ? '':'pr-[320px]'}`}>
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
            <div className="bg-transparent pt-[80px] pb-[20px] max-w-[300px] w-full top-0  h-full fixed right-[20px]" >
              {detailDataById &&
                <div className="w-full flex flex-col gap-[10px] h-full bg-white rounded-xl" >
                    <div className="px-[15px] pt-[15px]">
                        <p className="text-[14px] font-Roboto text-gray-500">Orders ID</p>
                        <p className="text-[20px] font-Roboto text-black font-bold">#{detailDataById.PenjualanID.id}</p>
                    </div>
                    <div className="bg-transparent px-[15px] flex flex-col hidden-scroll gap-[15px] max-h-full overflow-y-scroll h-full mt-[10px]">
                    {itemDetail && itemDetail.map((item, index) => (
                    <div className="flex items-center gap-[10px]"  key={index}>
                        <div className="w-[50px] flex-shrink-0 h-[50px] bg-Yellow p-[5px] bg-opacity-30 rounded-md">
                            <img src={piring} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-full">
                            <p className="font-Roboto font-bold">{item.ProdukID.NamaProduk}</p>
                            <div className="flex w-full justify-between bg-transparent">
                                <div className="flex gap-[14px] text-gray-500 font-Roboto items-center">
                                    <p>$2.30</p>
                                    <p className="text-[12px]">x{item.JumlahProduk}</p>
                                </div>
                                <p className="font-Roboto font-bold">$11.24</p>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
                    
                    <div className="flex flex-col gap-[10px] px-[15px] pb-[15px]">
                        <div className="flex flex-col gap-[10px]">
                        <div className="grid grid-cols-2">
                            <div>
                                <p>Item(9)</p>
                                <p>tax (10%)</p>
                            </div>
                            <div className="flex items-end flex-col">
                                <p>$2.90</p>
                                <p>$0.90</p>
                            </div>
                        </div>
                        <div>
                        <div className="grid grid-cols-2">
                            <div>
                                <p>Total</p>
                            </div>
                            <div className="flex items-end flex-col">
                                <p>$4.90</p>
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
                        <button className="bg-Yellow  mt-[10px] font-medium text-white font-Roboto p-[10px] rounded-lg capitalize">
                            close bills
                        </button>
                    </div>
                </div>
            }
            </div>
           <Payment openPayment={openPayment} detailData={detailData} Tippy={Tippy}  details={details} handleDetailsDiscount={handleDetailsDiscount}  handleDetails={handleDetails} detailsDiscount={detailsDiscount} cartData={cartData}/>
        </div>
        <Warning openPayment={openPayment} detailData={detailData} handleOpenPayment={handleOpenPayment}/>
    </div>
</div>
  )
}

export default History






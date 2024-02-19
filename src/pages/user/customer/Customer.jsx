import Icon from "../../../utils/Icon";
import {
    Top, Warning, Payment, AddCustomer, TablePelanggan, Side, Tippy
} from "../../../utils/Index"
import { useToggle } from '../../../utils/Handle';
import setStatusOffline from "../../../utils/Offline"
import {useState, useEffect} from "../../../utils/React"
import { getPelanggan} from "../../../utils/Service"
import Offline from "../../../components/user/offline/Offline";
import Backoffline from "../../../components/user/offline/BackOffline";

const Customer = () => {
    const [details, handleDetails] = useToggle(false);
    const [detailsDiscount, handleDetailsDiscount] = useToggle(false);
    const [openPayment, handleOpenPayment] = useToggle(false);
    const [closeToggle, handleCloseToggle] = useToggle(false);
    const [openDropdown, handleOpenDropdown] = useToggle(false);
    const [openAddProduct, handleOpenAddProduct] = useToggle(false);
    const [pelangganData, setPelangganData] = useState(null);
    const offlineStatus = setStatusOffline();
    const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];

    useEffect(() => {
        const fetchDataPelanggan = async () => {
            try {
                const response = await getPelanggan();
                setPelangganData(response.data.data);
              } catch (error) {
              console.error(error)
              }
          };
  
        fetchDataPelanggan();
      }, []);

  
  return (
    <div className={`w-full h-auto ${offlineStatus || openPayment || openAddProduct ? 'max-h-screen overflow-hidden':''}`}>
    <Top pelangganData={pelangganData} offlineStatus={offlineStatus}  handleOpenPayment={handleOpenPayment} openPayment={openPayment} handleCloseToggle={handleCloseToggle} closeToggle={closeToggle} openDropdown={openDropdown} handleOpenDropdown={handleOpenDropdown}/>
    <div className="flex h-full w-full relative">
        <Offline offlineStatus={offlineStatus}/>
        <Side closeToggle={closeToggle}/>
        <Backoffline offlineStatus={offlineStatus}  closeToggle={closeToggle} />
        <div className={`bg-transparent flex-col gap-[15px] w-full h-full text-black  pt-[79px] pr-[15px] pb-[15px] flex ${closeToggle ? 'max-sm:pl-[15px] sm:pl-[15px]':'max-sm:pl-[15px] sm:pl-[100px]'} `}>
        <div className={`w-full h-auto  bg-white flex sticky top-[80px] shadow-2xl justify-between p-[15px] rounded-md items-center ${openAddProduct ? 'z-[60]':'z-[10]'}`}>
                <p className="font-Roboto font-normal text-[17px]">Customer</p>
                <Tippy content={openAddProduct ? 'Close Add Customer':'Open Add Customer'} arrow arrowType="round" animation="scale" placement="left"  >
                <button onClick={handleOpenAddProduct} className={`${openAddProduct ? 'bg-red-500 text-white':'bg-Yellow text-white'} z-[60]  p-[7px] rounded-md`}>
                    {openAddProduct ? (
                        <Icon name="IoClose" className="text-[25px] icon-transition"/>
                        ):(
                        <Icon name="BsPlus" className="text-[25px] icon-transition"/>
                    )}
                </button>
                </Tippy>
                {openAddProduct && (
                    <>
                        <AddCustomer/>
                        <div className="w-full h-full absolute bg-black left-0 bg-opacity-30 rounded-md"/> 
                    </>
                )}
                </div>
                {openAddProduct && (
                    <div className="absolute w-full h-screen bg-black top-0 z-50 bg-opacity-30 left-0"/>
                )}
                <div className="bg-white min-w-full overflow-x-auto rounded-md p-[10px] grid grid-flow-dense grid-cols-1 gap-[10px] w-full">
                    <TablePelanggan pelangganData={pelangganData} />     
                </div>
           <Payment openPayment={openPayment} pelangganData={pelangganData} Tippy={Tippy}  details={details} handleDetailsDiscount={handleDetailsDiscount}  handleDetails={handleDetails} detailsDiscount={detailsDiscount} cartData={cartData}/>
        </div>
        <Warning openPayment={openPayment} pelangganData={pelangganData} handleOpenPayment={handleOpenPayment}/>
    </div>
</div>
  )
}

export default Customer



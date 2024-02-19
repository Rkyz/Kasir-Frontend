import {
    Top, Warning, Payment, Item, Option, Side, Tippy
} from "../../../utils/Index"
import { useToggle } from '../../../utils/Handle';
import setStatusOffline from "../../../utils/Offline"
import {useState, useEffect} from "../../../utils/React"
import {getProdukData, getPelanggan} from "../../../utils/Service"
import Product from '../../../components/user/modal/Product';
import handleAddToCookie from "../../../utils/Payment/PaymentUtils";
import Offline from "../../../components/user/offline/Offline";
import PaymentMiddleware from "../../../middleware/PaymentMiddleware";
import Icon from "../../../utils/Icon";
import Backoffline from "../../../components/user/offline/BackOffline";

const Home = () => {
    const [details, handleDetails] = useToggle(false);
    const [detailsDiscount, handleDetailsDiscount] = useToggle(false);
    const [openPayment, handleOpenPayment] = useToggle(false);
    const [closeToggle, handleCloseToggle] = useToggle(false);
    const [openDropdown, handleOpenDropdown] = useToggle(false);
    const [openProduct, handleOpenProduct] = useToggle(false);
    const [openSetting, handleOpenSetting] = useToggle(false);
    const [loading, setLoading] = useState(true);
    const [produkData, setProdukData] = useState(null);
    const [pelangganData, setPelangganData] = useState(null);
    const [produkID, setProdukID] = useState(null);
    const offlineStatus = setStatusOffline();
    PaymentMiddleware();

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await getProdukData();
          setProdukData(response.data.data);

        } catch (error) {
            console.error(error)
        }
      };
  
      const fetchDataPelanggan = async () => {
          try {
              const response = await getPelanggan();
              setPelangganData(response.data.data);
            } catch (error) {
            console.error(error)
            }
        };

      fetchDataPelanggan();
      fetchData();
    }, []);

    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 0) {
            setQuantity(value);
        } else {
            setQuantity(0);
        }
    };
    const handleOneOnOneQuantity = () => {
        const newQuantity = 1; 
        setQuantity(newQuantity); 
        handleAddToCookie(produkID, newQuantity); 
    };
    
    
    const handleAddToCookieLocal = () => {
        handleAddToCookie(produkID, quantity, handleOpenProduct);
    };

  const initialSessionType = sessionStorage.getItem('sessionType') || '';

  const [sessionType, setSessionType] = useState(initialSessionType);

  const handleInputClick = () => {
    setSessionType('input');
    sessionStorage.setItem('sessionType', 'input'); // Menyimpan nilai sessionType dalam session storage
    sessionStorage.removeItem('cartData');

    
  };

  const handleButtonClick = () => {
    setSessionType('button');
    sessionStorage.setItem('sessionType', 'button'); // Menyimpan nilai sessionType dalam session storage
    sessionStorage.removeItem('cartData');
  };
    


    const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];

    return (
        <div className={`w-full h-auto ${offlineStatus || openPayment || openSetting  ? 'max-h-screen overflow-hidden':''}`}>
            <Top openSetting={openSetting} closeToggle={closeToggle} handleOpenSetting={handleOpenSetting} pelangganData={pelangganData} offlineStatus={offlineStatus}  handleOpenProduct={handleOpenProduct} handleOpenPayment={handleOpenPayment} openPayment={openPayment} handleCloseToggle={handleCloseToggle} openDropdown={openDropdown} handleOpenDropdown={handleOpenDropdown} openProduct={openProduct}/>
            <div className="flex h-full w-full relative">
                <Offline offlineStatus={offlineStatus}/>
                <Side closeToggle={closeToggle} offlineStatus={offlineStatus}/>
                <Backoffline offlineStatus={offlineStatus}  closeToggle={closeToggle} />
                <Product  openProduct={openProduct} handleOpenProduct={handleOpenProduct} produkID={produkID} handleChangeQuantity={handleChangeQuantity} quantity={quantity} handleAddToCookieLocal={handleAddToCookieLocal}/>
                <div className={`bg-transparent w-full h-full text-black pt-[79px] pr-[15px] pb-[15px] flex ${closeToggle ? 'max-sm:pl-[15px] sm:pl-[15px]':'max-sm:pl-[15px] sm:pl-[100px]'} `}>
                    <div className="w-full gap-[15px] relative">
                        <div className={`w-full flex sticky bg-white rounded-md top-[79px] gap-[10px] items-center ${offlineStatus ? 'z-0':'z-20'} ${openPayment || openProduct ? 'z-10':'z-[20]'}`}>
                            
                            <Option/>
                        </div>
                        <Item handleOneOnOneQuantity={handleOneOnOneQuantity} produkData={produkData} setProdukID={setProdukID} handleOpenProduct={handleOpenProduct} loading={loading} setLoading={setLoading}/>
                    </div>
                 <Payment openPayment={openPayment} pelangganData={pelangganData} Tippy={Tippy}  details={details} handleDetailsDiscount={handleDetailsDiscount}  handleDetails={handleDetails} detailsDiscount={detailsDiscount} cartData={cartData}/>
                </div>
                <Warning openPayment={openPayment} pelangganData={pelangganData} handleOpenPayment={handleOpenPayment}/>
            </div>
            {openSetting && (
            <div className='fixed z-[50] flex items-center justify-center top-[60px] w-full h-full bg-black bg-opacity-30'>
                 <div className="bg-white relative p-[30px] flex flex-col gap-[20px] rounded-md w-auto text-center">
                    <div>
                    <p className="capitalize font-Roboto text-[22px] font-bold">setting set product</p>
                    <p className="text-nowrap capitalize text-[14px] text-gray-500">select your option to set up your product what to be you can use</p>
                    </div>
                    <div className="flex flex-col w-full gap-[10px]">
                        <button onClick={handleInputClick} className="border border-black border-opacity-20 hover:bg-Yellow text-black hover:text-white flex p-[20px] items-center rounded-md gap-[20px]">
                            <Icon name="GoNumber" className="text-[30px]"/>
                            <div className="flex flex-col items-start text-left gap-[5px]">
                                <p className="text-[17px] font-Roboto font-bold">Input</p>
                                <p className="text-[13px] font-Roboto text-opacity-50 capitalize">this option make u input your product using input with custom value product</p>
                            </div>
                        </button>
                        <button onClick={handleButtonClick} className="border border-black border-opacity-20 hover:bg-Yellow text-black hover:text-white flex p-[20px] items-center rounded-md gap-[20px]">
                            <Icon name="GiClick" className="text-[25px]"/>
                            <div className="flex flex-col items-start text-left gap-[5px]">
                                <p className="text-[17px] font-Roboto font-bold">Button</p>
                                <p className="text-[13px] font-Roboto text-opacity-50 capitalize">this option make u input your product using button one on one</p>
                            </div>
                        </button>
                    </div>
                 </div>
             </div>

            )}
        </div>
    );
}

export default Home;

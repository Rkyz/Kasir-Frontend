
// import { useEffect, useRef, useState } from "react"

import List from "../../../components/user/payments/List";
import Top from "../../../components/user/layouts/Top"
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import { useToggle } from "../../../utils/Handle"
import useInput from "../../../utils/Input"
import setStatusOffline from "../../../utils/Offline"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPelanggan } from "../../../services/penjualan.service";
import Swal from "sweetalert2";
import Icon from "../../../utils/Icon";



const Payment = () => {
    const [details, handleDetails] = useToggle(false);
    const offlineStatus = setStatusOffline();
    const { inputValue, setInputValue, handleButtonClick, handleCancelClick, handleDeleteClick } = useInput();
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [dataCart, setDataCart] = useState([]);
    const [dataPelanggan, setDataPelanggan] = useState(null);
    const [credit, setCredit] = useState(0);

    const handleSetCredit = () => {
        setCredit(inputValue)
    }

    useEffect(() => {
        const cartData = JSON.parse(sessionStorage.getItem('cartData'));
        const pelangganData = JSON.parse(sessionStorage.getItem('pelangganData'));
        setDataCart(cartData)
        setDataPelanggan(pelangganData)
      
        if (!cartData || !pelangganData) {
            navigate('/'); // Redirect to home if data is not available
        } else if (cartData.length > 0 || pelangganData.length > 0) {}
    }, [navigate]);

    // console.log(dataCart[0].JumlahProduk)

    const handleSubmit = async () => {
        const payload = {
            TanggalPenjualan: new Date().toISOString().slice(0, 10),
            PelangganID: dataPelanggan,
            details: dataCart.map(item => ({
                ProdukID: item.ProdukID,
                JumlahProduk: item.JumlahProduk
            }))
        };

        try {
            await createPelanggan(payload);
            console.log('Data berhasil terkirim');
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Data has been submitted successfully!',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Hapus session
                    sessionStorage.removeItem('cartData');
                    sessionStorage.removeItem('pelangganData');
                    // Muat ulang halaman
                    window.location.reload();
                }
            })
        } catch (error) {
            console.error('Gagal mengirim data:', error);
        }
    };

    console.log(dataCart)

  return (
    <div className="w-full h-screen">
        <Top offlineStatus={offlineStatus} />
        <div className="flex h-full w-full">
        {offlineStatus && (
                <div className="bg-black w-full h-screen flex-col pt-[64px] bg-opacity-50 backdrop-blur-sm fixed z-[45] text-neutral-100 flex items-center justify-center text-[30px] font-Roboto font-bold capitalize">
                    <Icon name="RiWifiOffLine" className="text-[50px]"/>
                    <div className="flex items-center gap-[10px]">
                    <p>you are offline</p>
                    <div className="loader"/>
                    </div>
                </div>
                    )}
            {/* <Side/> */}
            <div className="bg-transparent grid grid-cols-2 max-lg:grid-rows-subgrid max-lg:grid-cols-1 gap-[10px] w-full h-full text-black pl-[15px] pt-[79px] pr-[15px] pb-[15px] ">
                <div className="w-full h-full bg-white relative lg:overflow-y-scroll max-lg:order-1">
                    <div className="w-full bg-transparent border-b absolute border-black border-opacity-30 p-[15px]">
                        <p className="text-[20px] font-Roboto text-black capitalize font-bold">order <span className="uppercase">id</span> #{dataPelanggan}</p>
                            <div className="flex justify-between items-center">
                                <p className="text capitalize text-[14px] font-Roboto text-opacity-80 text-black font-medium">vincenus lobo</p>
                                <p className="flex items-center capitalize gap-[7px] font-normal font-Roboto text-opacity-80 text-black">dine in <Icon name="GoDotFill" className="text-[8px]"/> 7.43</p>
                            </div>
                    </div>
                    <div className="w-full pt-[84.8px] bg-transparent h-full flex items-center flex-col justify-between">
                        <div className="w-full bg-transparent h-auto flex flex-col items-center">
                                <List dataCart={dataCart} handleDetails={handleDetails}  details={details} />
                                {/* <Money/> */}
                        </div>
                        <div className="w-full p-[10px] flex flex-col gap-[15px]">
                            <div className="w-full grid grid-cols-2 h-auto bg-Gray p-[10px] ">
                                <div className="flex items-start justify-start flex-col capitalize font-normal text-[16px]">
                                    <p>credit</p>
                                    <p>balance</p>
                                </div>
                                <div className="flex items-end justify-end flex-col capitalize font-normal text-[16px]">
                                    <p>{credit}</p>
                                    <p>-{dataCart.Harga}</p>
                                </div>
                            </div>
                            <button onClick={handleSubmit} className="bg-[#09A327] capitalize flex items-center justify-center gap-[5px] text-white p-[15px] rounded-md ">
                                <Icon name="MdPayments" className="text-[20px]"/>
                                <p className="text-[18px]">confirm payment</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full  gap-[10px] bg-transparent">
                    <div className="w-full bg-white h-auto flex items-center justify-between p-[15px] rounded-md">
                        <div className="flex flex-col gap-[5px]">
                            <p className="text-[20px] capitalize font-medium font-Roboto">payable amount</p>
                            <div className="text-Yellow text-[40px] flex items-center font-bold">
                                <span>$</span>
                                <p>192.00</p>
                            </div>
                        </div>
                        <div className="flex gap-[20px] items-center">
                            <div className="flex ">
                            <div className="w-[30px[ h-[30px] bg-black"/>
                            <div className="flex-col flex capitalize">
                                <p className="text-black text-[18px] font-Roboto font-semibold">vincent lobo</p>
                                <p className="text-[16px] font-Roboto text-black text-opacity-35">#236236</p>
                            </div>
                            </div>
                            <button className="w-[45px] text-[20px] h-[45px] rounded-md bg-Gray flex items-center justify-center">
                                <Icon name="CgTrash"/>
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col bg-white p-[15px]">
                        <input value={inputValue} onChange={event => setInputValue(event.target.value)} type="number" className="w-full  border-black border p-[15px] text-right outline-none text-black text-[25px]" />
                        <div className="grid grid-cols-3 w-full h-full gap-[10px] mt-[10px]">
                            <button onClick={() => handleButtonClick('1')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">1</button>
                            <button onClick={() => handleButtonClick('2')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">2</button>
                            <button onClick={() => handleButtonClick('3')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">3</button>
                            <button onClick={() => handleButtonClick('4')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">4</button>
                            <button onClick={() => handleButtonClick('5')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">5</button>
                            <button onClick={() => handleButtonClick('6')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">6</button>
                            <button onClick={() => handleButtonClick('7')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">7</button>
                            <button onClick={() => handleButtonClick('8')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">8</button>
                            <button onClick={() => handleButtonClick('9')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">9</button>
                            <button onClick={() => handleButtonClick('00')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">00</button>
                            <button onClick={() => handleButtonClick('0')} className="bg-Gray rounded-sm text-[20px] font-bold max-lg:p-[20px]">0</button>
                            <button onClick={() => handleDeleteClick()} className="bg-Gray rounded-sm text-[25px] font-bold flex items-center justify-center max-lg:p-[20px]">
                                <Icon name="MdDelete"/>
                            </button>
                            <button onClick={() => handleCancelClick()} className="bg-Gray capitalize col-span-2 rounded-sm text-[20px] font-bold p-[20px]">
                                cancel
                            </button>
                            <button onClick={handleSetCredit} className="bg-Gray capitalize rounded-sm text-[20px] font-bold p-[20px]">
                                Submit
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;
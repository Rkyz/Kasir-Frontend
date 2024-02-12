import { FiBook, FiPlus } from "react-icons/fi"
import Item from "../../../components/user/homes/ItemDashboard"
import Option from "../../../components/user/homes/option"
import Side from "../../../components/user/layouts/Side"
import Top from "../../../components/user/layouts/Top"
import { HiOutlineRefresh } from "react-icons/hi"
import { IoMdCloseCircle } from "react-icons/io";
import { GrFormNext, GrNext, GrPrevious } from "react-icons/gr";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react"
import Tippy from '@tippyjs/react';
import Nav from "../../../components/user/homes/Nav"
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import Itemku from "../../../components/user/homes/ItemPayment"
import Price from "../../../components/user/homes/Price"
import { RiWifiOffLine } from "react-icons/ri";
import { MdNextPlan, MdNextWeek } from "react-icons/md"
import { useLocation } from "react-router-dom"
import { BsPlus } from "react-icons/bs"
import AddCustomer from "../../../components/user/customers/AddCustomer"


const Customer = () => {
    const [details, setDetails] = useState(false);
    const handleDetails = () => {
        setDetails(!details)
    }
    const [detailsDiscount, setDetailsDiscount] = useState(false);
    const handleDetailsDiscount = () => {
        setDetailsDiscount(!detailsDiscount)
    }
    const [openPayment, setOpenpayment] = useState(false);
    const handleOpenPayment = () => {
        setOpenpayment(!openPayment)
    }
    const [closeToggle, setCloseToggle] = useState(false);
    const handleCloseToggle = () => {
        setCloseToggle(!closeToggle)
    }
    const [openDropdown, setOpenDropdown] = useState(false);
    const handleOpenDropdown = () => {
        setOpenDropdown(!openDropdown)
    }
    const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);

    useEffect(() => {
      const handleOnline = () => {
        setOfflineStatus(false);
      };
  
      const handleOffline = () => {
        setOfflineStatus(true);
      };
  
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);

    const path = useLocation();
    const currentPath = path.pathname;
    console.log(offlineStatus,'test')

    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownContent, setDropdownContent] = useState('');

    const handleMouseEnter = (content) => {
        setDropdownContent(content);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const [openAddCustomer, setAddCustomer] = useState(false);

    const handleOpenAddCustomer = () => {
        setAddCustomer(!openAddCustomer)
        setOfflineStatus(false)
    }
  
  return (
    <div className={`w-full h-auto ${offlineStatus || openPayment ? 'max-h-screen overflow-hidden':''}`}>
        <Top offlineStatus={offlineStatus} currentPath={currentPath} handleOpenPayment={handleOpenPayment} openPayment={openPayment} handleCloseToggle={handleCloseToggle} closeToggle={closeToggle} openDropdown={openDropdown} handleOpenDropdown={handleOpenDropdown}/>
        <div className="flex h-full w-full relative">
             {offlineStatus && (
                <div className="bg-black w-full h-screen flex-col pt-[64px] bg-opacity-50 backdrop-blur-sm fixed z-[45] text-neutral-100 flex items-center justify-center text-[30px] font-Roboto font-bold capitalize">
                    <RiWifiOffLine className="text-[50px]"/>
                    <div className="flex items-center gap-[10px]">
                    <p>you are offline</p>
                    <div className="loader"/>
                    </div>
                </div>
                    )}
            <Side closeToggle={closeToggle}/>
            {closeToggle && (
                <div className="w-full h-full bg-black bg-opacity-30 sm:hidden fixed z-[30]"/>
            )}
            
            <div className={`bg-transparent flex-col gap-[15px] w-full h-full text-black  pt-[79px] pr-[15px] pb-[15px] flex  ${closeToggle ? 'max-sm:pl-[15px] sm:pl-[15px]':'max-sm:pl-[15px] sm:pl-[100px]'} `}>
                <div className={`w-full h-auto  bg-white flex sticky top-[80px] shadow-2xl justify-between p-[15px] rounded-md items-center ${openAddCustomer ? 'z-[60]':'z-[10]'}`}>
                <p className="font-Roboto font-normal text-[17px]">Customer</p>
                <Tippy content="Add Customer" arrow arrowType="round" animation="scale" placement="left"  >
                <button onClick={handleOpenAddCustomer} className="bg-Yellow z-[60] text-white p-[7px] rounded-md">
                    <BsPlus className="text-[25px]"/>
                </button>
                </Tippy>
                {openAddCustomer && (
                    <>
                         <AddCustomer/>
                        <div className="w-full h-full absolute bg-black left-0 bg-opacity-30 rounded-md"/> 
                    </>
                )}
                </div>
                {openAddCustomer && (
                    <div className="absolute w-full h-screen bg-black top-0 z-50 bg-opacity-30 left-0"/>
                )}
                <div className="bg-transparent grid grid-flow-dense grid-cols-3 gap-[10px] w-full">
                 <div  className="flex flex-col gap-[10px]">
                 <div className=" p-[20px] rounded-md w-full gap-[10px] flex flex-col h-auto bg-white">
                        <div className="w-full h-full flex justify-between flex-row-reverse items-start">
                            <div className="flex gap-[20px]">
                                <div>
                                    <p className="font-Roboto text-[16px] font-bold">Customer #1</p>
                                    <p className="capitalize text-[14px] text-gray-500">13 feb 2025, 08.00 PM</p>
                                </div>
                                <button className="text-[20px]">
                                    <GrFormNext/>
                                </button>
                            </div>
                        <div className="flex items-center gap-[10px]">
                        <div className="w-[50px] h-[50px] bg-black rounded-full"/>
                        <div>
                            <p className="text-[14px] font-Roboto text-black font-medium">Rio Alamsyah</p>
                            <p className="text-[14px] text-gray-500">Cikaret, Gg Kasadaran</p>
                        </div>
                        </div>
                        </div>
                    
                    </div>
                 </div>
                 <div className="flex flex-col gap-[10px]">
                 <div className=" p-[20px] rounded-md w-full gap-[30px] flex flex-col h-auto bg-white">
                        <div className="w-full   h-full flex justify-between flex-row-reverse items-start">
                            <div className="flex gap-[20px]">
                                <div>
                                    <p className="font-Roboto text-[16px] font-bold">Customer #1</p>
                                    <p className="capitalize text-[14px] text-gray-500">13 feb 2025, 08.00 PM</p>
                                </div>
                                <button className="text-[20px]">
                                    <GrFormNext/>
                                </button>
                            </div>
                        <div className="flex items-center gap-[10px]">
                        <div className="w-[50px] h-[50px] bg-black rounded-full"/>
                        <div>
                            <p className="text-[14px] font-Roboto text-black font-medium">Rio Alamsyah</p>
                            <p className="text-[14px] text-gray-500">Cikaret, Gg Kasadaran</p>
                        </div>
                        </div>
                        </div>
                        <div className="p-[5px] border-b border-gray-300 pb-[15px] bg-transparent flex gap-[20px]">
                            <div className="h-full flex items-center justify-center">
                                <div className="w-[60px] rounded-full h-[60px] bg-black"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-[15px] capitalize font-Roboto font-bold">nasi goreng</p>
                                <p className="text-[13px] text-gray-500 capitalize">nasi goreng cabe merah ganda</p>
                                <div className="bg-transparent mt-[5px] font-bold font-Roboto uppercase text-[12px] flex items-center justify-between w-full">
                                    <p>10k</p>
                                    <p>qty : 1</p>
                                </div>
                            </div>
                        </div>   
                     
                    </div>
                 </div>
                 <div className="flex flex-col gap-[10px]">
                 <div className=" p-[20px] rounded-md w-full gap-[10px] flex flex-col h-auto bg-white">
                        <div className="w-full h-full flex justify-between flex-row-reverse items-start">
                            <div className="flex gap-[20px]">
                                <div>
                                    <p className="font-Roboto text-[16px] font-bold">Customer #1</p>
                                    <p className="capitalize text-[14px] text-gray-500">13 feb 2025, 08.00 PM</p>
                                </div>
                                <button className="text-[20px]">
                                    <GrFormNext/>
                                </button>
                            </div>
                        <div className="flex items-center gap-[10px]">
                        <div className="w-[50px] h-[50px] bg-black rounded-full"/>
                        <div>
                            <p className="text-[14px] font-Roboto text-black font-medium">Rio Alamsyah</p>
                            <p className="text-[14px] text-gray-500">Cikaret, Gg Kasadaran</p>
                        </div>
                        </div>
                        </div>
                    
                    </div>

                 </div>
                    
                 
                </div>
                {openPayment && (
                    <>
                       <div className='w-full h-full fixed z-40 bg-black bg-opacity-30 left-0 top-0'/>
                <div className={`fixed h-auto w-full  overflow-auto max-h-full sm:max-w-[400px] z-40 bg-transparent right-0 top-0 pt-[64px] text-black transition-all duration-1000 ease-in-out `}>
                    <div className="h-full bg-transparent shadow-2xl w-full  flex-col flex ">
                        <Nav HiOutlineRefresh={HiOutlineRefresh} FiPlus={FiPlus} FiBook={FiBook} Tippy={Tippy}/>
                        <div className="flex bg-white flex-col gap-[10px] p-[10px]">
                            <Itemku handleDetails={handleDetails} GrFormNext={GrFormNext} IoMdCloseCircle={IoMdCloseCircle} details={details} />
                        </div>
                        <div className="w-full h-auto bg-white p-[10px]">
                        {/* <div className="flex justify-between items-center bg-Yellow bg-opacity-15 p-[10px] rounded-md">
                            <p className="capitalize font-semibold">add</p>
                            <div className="flex gap-[10px] ">
                                <button className="capitalize text-Yellow font-Roboto font-semibold text-[14px]">discount</button>
                                <button className="capitalize text-Yellow font-Roboto font-semibold text-[14px]">coupon code</button>
                                <button className="capitalize text-Yellow font-Roboto font-semibold text-[14px]">note</button>
                            </div>
                        </div> */}
                        </div>
                        <Price detailsDiscount={detailsDiscount} handleDetailsDiscount={handleDetailsDiscount}/>
                        <div className="grid font-bold pb-[15px] bg-white grid-cols-1 p-[10px] gap-[10px] text-white">
                            {/* <button className="bg-[#F27B15] flex items-center justify-center gap-[10px] p-[15px] rounded-md capitalize">
                                <IoPlayCircleOutline className="text-[20px]"/>
                                <p>hold cart</p>
                            </button> */}
                            <button className="bg-[#07A326] flex items-center justify-center gap-[10px] p-[15px] rounded-md capitalize">
                                <IoPlayCircleOutline className="text-[20px]"/>
                                <p>process</p>
                            </button>
                        </div>
                    </div>
                </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Customer
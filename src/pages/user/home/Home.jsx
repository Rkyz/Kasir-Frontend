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
import { MdNextPlan } from "react-icons/md"
import { useLocation } from "react-router-dom"


const Home = () => {
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
            
            <div className={`bg-transparent w-full h-full text-black  pt-[79px] pr-[15px] pb-[15px] flex  ${closeToggle ? 'max-sm:pl-[15px] sm:pl-[15px]':'max-sm:pl-[15px] sm:pl-[100px]'} `}>
                <div className=" w-full gap-[15px] relative">
                    <div className="w-full flex sticky top-[79px] gap-[10px] items-center ">
                    <Option/>
                   
                    </div>
                    <Item/>
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

export default Home
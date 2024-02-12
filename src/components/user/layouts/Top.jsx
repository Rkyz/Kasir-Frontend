import { IoSearchOutline, IoWifi } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import { BsOption } from "react-icons/bs";
import { IoMdOptions } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import { CgClose } from "react-icons/cg";

const Top = ({handleOpenPayment,offlineStatus,
     handleCloseToggle, closeToggle, handleOpenDropdown, currentPath, openDropdown, openPayment}) => {

    const hello = ([
        'Status : Online',
        'Status : Offline',
        'Refresh',
        'Cart'
    ])

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      const newInputValue = event.target.value;
  
      setInputValue(newInputValue);
  
      if (newInputValue > 0) {
        console.log('Input lebih besar dari 1');
      } else if (newInputValue < 0) {
        console.log('Input tidak lebih besar dari 1');
      }
    };

    console.log(!offlineStatus === false ? hello[0]:hello[1])

    console.log(offlineStatus,'asu kambing')
    
  return (
    <div className={`flex items-center z-[50] max-sm:gap-[10px] justify-between shadow-md fixed bg-white w-full py-[10px] ${offlineStatus ? '':''} `}>
        {openPayment && (
            <div className="w-full absolute max-sm:hidden z-40 bg-black bg-opacity-30 h-full"/>
        )}
        <div className="flex gap-[20px] items-center w-full h-full bg-transparent pl-[10px]">
            <p className="text-[24px] capitalize font-bold font-Roboto flex flex-shrink-0">FOOD</p>
            <Tippy content={`Toggle ${!closeToggle ? 'Close':'Open' }`} arrow arrowType="round" animation="scale" >
            <button onClick={handleCloseToggle} className={`bg-Gray p-[10px] text-[20px] rounded-lg text-Yellow ${openPayment ? 'cursor-not-allowed':''}`} disabled={openPayment === true}>
                <GiHamburgerMenu/>
            </button>
            </Tippy>
            <div className={`w-full bg-Gray md:relative   flex h-full rounded-lg ${offlineStatus ? '':'z-[10]'}`}>
                <input type="text" placeholder='search products...' value={inputValue} onChange={handleInputChange} className="bg-transparent outline-none w-full p-[10px] placeholder:capitalize placeholder:text-black"/>
                <button className="p-[10px]">
                    <FiSearch className="text-[20px]"/>
                </button>
                {inputValue !== '' && (

                <div className="absolute bg-white w-full h-auto left-0 top-[60px] border border-gray-300 flex flex-col justify-center items-end">
                    {/* <button className="p-[10px]">
                        <CgClose/>
                    </button> */}
                    <div className="w-full h-auto max-h-[250px] overflow-y-scroll">
                        <button className="p-[10px] flex gap-[10px] items-center hover:bg-Gray w-full">
                            <div className="w-[50px] h-[50px] rounded-md bg-black"/>
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-[16px] capitalize font-Roboto">nasi goreng pete</p>
                                <p className="text-[14px] font-Roboto flex gap-[2px]"><span>$</span>32.00</p>
                            </div>
                        </button>
                        <button className="p-[10px] flex gap-[10px] items-center hover:bg-Gray w-full">
                            <div className="w-[50px] h-[50px] rounded-md bg-black"/>
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-[16px] capitalize font-Roboto">nasi goreng pete</p>
                                <p className="text-[14px] font-Roboto flex gap-[2px]"><span>$</span>32.00</p>
                            </div>
                        </button>
                        <button className="p-[10px] flex gap-[10px] items-center hover:bg-Gray w-full">
                            <div className="w-[50px] h-[50px] rounded-md bg-black"/>
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-[16px] capitalize font-Roboto">nasi goreng pete</p>
                                <p className="text-[14px] font-Roboto flex gap-[2px]"><span>$</span>32.00</p>
                            </div>
                        </button>
                        <button className="p-[10px] flex gap-[10px] items-center hover:bg-Gray w-full">
                            <div className="w-[50px] h-[50px] rounded-md bg-black"/>
                            <div className="flex flex-col items-start justify-center">
                                <p className="text-[16px] capitalize font-Roboto">nasi goreng pete</p>
                                <p className="text-[14px] font-Roboto flex gap-[2px]"><span>$</span>32.00</p>
                            </div>
                        </button>
                    </div>
                    
                </div>
                )}
            </div>
        </div>
        <div className="w-full max-sm:w-auto justify-end flex items-center gap-[10px] pr-[10px]">
            <div className="relative">
                <Tippy content="Dropdown" arrow arrowType="round" animation="scale" className={` ${openDropdown ? '':'max-sm:hidden'}`} >
                <button onClick={handleOpenDropdown} className="bg-Gray p-[10px] text-[20px] rounded-lg text-Yellow sm:hidden">
                    <IoMdOptions/>
                </button>
                </Tippy>
                {/* <div className="absolute bg-white border-[2px] flex gap-[10px] flex-col border-Gray rounded-md overflow-visible pt-[20px] right-0 top-[60px] sm:hidden">
                    <p className="text-nowrap uppercase font-Roboto font-normal tracking-widest text-[14px] text-black mx-[15px]">logged in 5 min ago</p>
                    <div className="w-full h-auto"> 
                        <button className="w-full h-auto bg-transparent text-black flex items-center px-[15px] py-[15px] gap-[10px] hover:bg-Gray">
                            <LuLogOut className="text-[20px]"/>
                            <p className="text-[16px] capitalize font-Roboto rounded-b-md">logout</p>
                        </button>
                    </div>
                </div> */}
            </div>
            <div className={`w-auto h-auto ${openDropdown ? 'max-sm:bg-white rounded-md max-sm:absolute max-sm:top-[70px] max-sm:py-[20px] max-sm:flex max-sm:gap-[20px] max-sm:flex-col ':'max-sm:hidden'}`}>
                <div className="w-[20px] h-[20px] bg-white absolute -top-[10px] right-[9px] rotate-45 border-t sm:hidden border-gray-300 border-l "/>
                <div className="px-[30px]">
                 <p className="text-nowrap uppercase font-Roboto font-normal tracking-widest text-[14px] text-black  sm:hidden">logged in 5 min ago</p>
                </div>
                <div className="flex w-full gap-[10px] justify-end  max-sm:w-auto max-sm:flex-col">
                <Tippy content={`${offlineStatus === false ? hello[0] : hello[1]}`} arrow arrowType="round" animation="scale"  className="max-sm:hidden">
                <button className={`sm:bg-Gray max-sm:px-[25px] gap-[15px] p-[10px] text-[20px] rounded-lg  relative max-sm:flex max-sm:hover:text-Yellow ${offlineStatus ? 'z-[50]':''}`}>
                    <IoWifi className={`${offlineStatus ? 'sm:text-black':'sm:text-Yellow'}`}/>
                        {offlineStatus ? (
                              <p className="sm:hidden max-sm:text-[16px] ">
                              {hello[0]}
                              </p>
                        ):(
                            <p className="sm:hidden max-sm:text-[16px] ">
                            {hello[0]}
                            </p>
                        )}
                </button>
                </Tippy>
                <Tippy content={hello[2]} arrow arrowType="round" animation="scale" className="max-sm:hidden">
                <button className={`sm:bg-Gray max-sm:px-[25px] gap-[15px] p-[10px] text-[20px] rounded-md max-sm:flex max-sm:hover:text-Yellow ${openPayment ? 'z-[50]':''}`}>
                    <HiOutlineRefresh/>
                    <p className="sm:hidden max-sm:text-[16px]">{hello[2]}</p>
                </button>
                </Tippy>
                <Tippy content={hello[3]} arrow arrowType="round" animation="scale" className="max-sm:hidden">
                <button onClick={handleOpenPayment} className={`sm:bg-Gray max-sm:px-[25px] gap-[15px] p-[10px] text-[20px] rounded-lg sm:text-Yellow max-sm:flex max-sm:hover:text-Yellow ${openPayment ? 'z-[50]':''} `}>
                    <FaCartShopping/>
                    <p className="sm:hidden max-sm:text-[16px]">{hello[3]}</p>
                </button>
                </Tippy>
                <button className="sm:flex sm:bg-Yellow p-[10px] max-sm:px-[25px] sm:gap-[10px] max-sm:gap-[15px] rounded-lg sm:text-white  items-center max-sm:flex max-sm:hover:text-Yellow ">
                    <MdOutlineTableRestaurant className="text-[20px]"/>
                    <p className="sm:text-[13px] max-sm:text-[16px] capitalize">select table</p>
                </button>
                </div>
            </div>
        </div>
        {offlineStatus && (
         <div className="w-full h-full absolute bg-black bg-opacity-50 backdrop-blur-sm "/>
        )}
    </div>
  )
}

export default Top
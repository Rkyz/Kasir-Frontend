import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchProduk = ({handleInputChange, inputValue, offlineStatus}) => {
  return (
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
  )
}

export default SearchProduk

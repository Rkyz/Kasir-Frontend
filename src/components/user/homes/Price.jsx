import React, { useEffect, useState } from 'react'
import { CgDollar } from 'react-icons/cg'
import { LuPercent } from 'react-icons/lu'

// eslint-disable-next-line react/prop-types
const Price = ({handleDetailsDiscount, detailsDiscount}) => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const getCartFromSession = () => {
        // Ambil data cart dari sessionStorage
        const cart = JSON.parse(sessionStorage.getItem('cartData')) || [];
        return cart;
    };

    useEffect(() => {
        const cartData = getCartFromSession();
        setCart(cartData);
    }, []);

    const { totalHarga, totalJumlahProduk } = cart.reduce((totals, item) => {
        totals.totalHarga += item.Harga;
        totals.totalJumlahProduk += item.JumlahProduk;
        return totals;
    }, { totalHarga: 0, totalJumlahProduk: 0 });
    
    const totalHargaJumlahProduk = cart.reduce((total, item) => {
        return total + (item.Harga * item.JumlahProduk);
    }, 0);
    
    console.log("Total Harga x JumlahProduk:", totalHargaJumlahProduk);
    
    

    return (
        <div className="grid bg-white p-[10px] grid-cols-2">
            <div className="font-Roboto font-medium capitalize flex flex-col gap-[5px]">
                <p className="text-opacity-70 text-black">subtotal</p>
                {/* <p className="text-opacity-70 text-black">tax</p> */}
                {/* <div className="w-auto h-auto relative">
                    <button
                        onClick={handleDetailsDiscount}
                        className="text-opacity-70 text-left capitalize text-Yellow">discount</button>
                    {
                        detailsDiscount && (
                            <div
                                className=" -top-[55px] -left-[265px] absolute justify-center items-start ">
                                <div
                                    className="flex flex-col gap-[10px] border-r border-black border-opacity-50 items-center w-full h-full pl-[15px] pr-[21px] py-[15px] bg-white rounded-lg shadow-2xl z-20 ">
                                    <div
                                        className="text-[14px] bg-translate w-full text-left font-Roboto font-semibold">add discount</div>
                                    <div className="flex gap-[10px]">
                                        <button
                                            className="w-[40px] h-[40px] rounded-md flex items-center justify-center text-[20px] bg-Gray">
                                            <CgDollar/>
                                        </button>
                                        <button
                                            className="w-[40px] h-[40px] rounded-md flex items-center justify-center text-[20px] text-Yellow bg-Yellow bg-opacity-30">
                                            <LuPercent/>
                                        </button>
                                        <div
                                            type="text"
                                            className=" h-auto border border-black border-opacity-50 w-[100px] rounded-md flex items-center justify-end text-[20px] px-[10px] text-black text-opacity-80">1</div>
                                    </div>
                                    <div className="flex gap-[10px] w-full">
                                        <button
                                            className="w-full h-auto py-[10px] text-[14px] capitalize rounded-md bg-yellow-500 text-white">cancel</button>
                                        <button
                                            className="w-full h-auto py-[10px] text-[14px] capitalize rounded-md bg-yellow-500 text-white">add</button>
                                    </div>
                                </div>
                                <div
                                    className="absolute z-10 w-[30px] h-[30px] rotate-45 border-r border-t border-black border-opacity-50 -right-[14.5px] top-[53px] bg-white"/>
                            </div>
                        )
                    }
                </div> */}
                <p className="text-[19px] mt-[5px]">payable amount</p>
            </div>
            <div className="flex items-end flex-col font-Roboto font-bold gap-[5px]" >
                <p>RP {totalHargaJumlahProduk}</p>
                {/* <p>$45</p> */}
                {/* <p>$2</p> */}
                <p className="text-[19px] mt-[5px]">RP {totalHargaJumlahProduk}</p>
            </div>
        </div>
    )
}

export default Price
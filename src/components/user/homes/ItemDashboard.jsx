import React, { useState, useEffect } from 'react';
import piring from '../../../assets/piring.png';
import { getProdukDataByID } from '../../../services/produk.service';

const formatRupiah = (price) => {
    // Menggunakan fungsi toLocaleString() untuk mengubah angka menjadi format mata uang
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
}

const ItemDashboard = ({ produkData,handleAddData,handleOneOnOneQuantity, setProdukID, handleOpenProduct, loading, setLoading }) => {
    useEffect(() => {
        setLoading(false);
    }, [produkData]);

    const fetchDataPelangganID = async (produk) => {
        const productId = produk.id;
        try {
            const response = await getProdukDataByID(productId);
            setProdukID(response.data.data);
        } catch (error) {
            console.error(error); // Tangani kesalahan jika ada
        } finally {
            setLoading(false);
        }
    };

    const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];

    console.log(cartData)



    return (
        <div className="bg-transparent mt-[15px] relative grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2 gap-[15px] max-h-full rounded-md grid">
            {loading ? (
                <div className='bg-transparent absolute w-full h-auto gap-[15px] py-[50px] flex items-center justify-center '>
                    <p className='text-[20px]'>loading </p>
                    <div className='loader-second'/>
                </div>
            ) : (
                produkData && produkData.length > 0 ? (
                     produkData.map((produk, index) => (
                        <button
                            className="bg-white relative p-[15px] rounded-md flex flex-col gap-[10px] items-center"
                            key={index}
                            onClick={async () => {
                                await fetchDataPelangganID(produk);
                                if (sessionStorage.getItem('sessionType') === 'button') {
                                    handleOneOnOneQuantity();
                                } else if (sessionStorage.getItem('sessionType') === 'input') {
                                    handleOpenProduct();
                                } else {
                                    handleOpenProduct();
                                }
                            }}
                        >
                            <img src={piring} alt="produk" />
                            <div className='flex flex-col gap-[5px]'>
                                <p className="capitalize font-Roboto">{produk.NamaProduk}</p>
                                <p className="font-bold font-Roboto">{formatRupiah(produk.Harga)}</p>
                            </div>
                            {sessionStorage.getItem('sessionType') === 'button' && cartData.map((data) => {
                            if (data.ProdukID === produk.id) {
                                return (
                                    <div key={data.ProdukID} className='absolute top-[5px] bg-Yellow p-[5px] rounded-sm right-[5px] text-white'>
                                        {data.JumlahProduk}
                                    </div>
                                );
                            }
                            return null;
                        })}

                        </button>
                    ))
                ) : (
                    <p>No data available</p>
                )
            )}
        </div>
    )
}

// ItemDashboard.propTypes = StringPropsType;


export default ItemDashboard;

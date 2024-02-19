import  { useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { createProduk } from '../../../services/produk.service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const AddProduct = () => {
    const [NamaProduk, setNamaProduk] = useState('');
    const [Harga, setHarga] = useState('');
    const [Stok, setStok] = useState('');
    // const [error, setError] = useState(null);
    const [validationErrors, setValidationErrors] = useState({
        NamaProduk: false,
        Harga: false,
        Stok: false,
    });
    

    const handleTambahProduk = async () => {
        try {
            if (!NamaProduk || !Harga || !Stok) {
                setValidationErrors({
                    NamaProduk: !NamaProduk,
                    Harga: !Harga,
                    Stok: !Stok,
                });
                // setError('Semua kolom harus diisi');
                return;
            }

            const data = {
                NamaProduk: NamaProduk,
                Harga: Harga,
                Stok: Stok,
            };

            const response = await createProduk(data);

            setNamaProduk('');
            setHarga('');
            setStok('');
            // setError(null);
            setValidationErrors({
                NamaProduk: false,
                Harga: false,
                Stok: false,
            });

            console.log('Produk berhasil ditambahkan:', response);
            Swal.fire({
                icon: 'success',
                title: 'Success Create Product',
                text: 'Produk berhasil ditambahkan',
                showConfirmButton: true,
                timer: 3000,
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } catch (error) {
            // Tangani kesalahan jika gagal menambahkan produk
            Swal.fire({
                icon: 'error',
                title: 'Failed Create Data',
                text: error,
                showConfirmButton: true,
                timer: 3000,
                confirmButtonText: 'OK',
            });
            console.error('Gagal menambahkan produk:', error);
            // setError(error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleTambahProduk();
        }
    };

    return (
        <div className="absolute z-[60] bg-white rounded-md text-left gap-[20px] flex flex-col right-[15px] h-auto top-[65px] after:w-[13px] after:h-[13px] after:bg-white after:absolute after:right-[12.5px] after:-top-[6px] after:rotate-45 p-[15px]">
            <div className="flex gap-[20px] items-center">
                <div className="bg-blue-500 text-white flex items-center justify-center rounded-md text-[20px] h-[40px] w-[40px] ">
                    <BsFillPeopleFill />
                </div>
                <div className="flex flex-col items-start">
                    <p className="capitalize text-[16px] font-bold font-Roboto">create product</p>
                    <p className="text-[16px] text-gray-400 capitalize font-Roboto">product is a king but not a god</p>
                </div>
            </div>
        
            <div className="flex-col flex">
                <label htmlFor="" className="mt-[10px] font-Roboto text-black font-bold text-opacity-65">Nama Product</label>
                <input
                    type="text"
                    id="NamaProduk"
                    value={NamaProduk}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setNamaProduk(e.target.value)}
                    className={`border ${validationErrors.NamaProduk ? 'border-red-500 placeholder:text-red-500 ' : 'border-black'} p-[10px] outline-none mt-[5px] rounded-md placeholder:text-[14px] placeholder:capitalize placeholder:font-Roboto`}
                    placeholder={` ${validationErrors.NamaProduk ? "Please Input Produk First":"Masukkan Produk"}`} 

                />
                <label htmlFor="" className="mt-[10px] font-Roboto text-black font-bold text-opacity-65">Harga</label>
                <input
                    type="number"
                    id="Harga"
                    value={Harga}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setHarga(e.target.value)}
                    className={`border ${validationErrors.Harga ? 'border-red-500 placeholder:text-red-500' : 'border-black'} p-[10px] outline-none mt-[5px] rounded-md placeholder:text-[14px] placeholder:capitalize placeholder:font-Roboto`}
                    placeholder={` ${validationErrors.Harga ? "Please Input Harga First":"Masukkan Harga"}`} 
                />
                <label htmlFor="" className="mt-[10px] font-Roboto text-black font-bold text-opacity-65">Stok</label>
                <input
                    type="number"
                    id="Stok"
                    value={Stok}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setStok(e.target.value)}
                    className={`border ${validationErrors.Stok ? 'border-red-500 placeholder:text-red-500' : 'border-black'} p-[10px] outline-none mt-[5px] hidden-num rounded-md placeholder:text-[14px] placeholder:capitalize placeholder:font-Roboto`}
                    placeholder={` ${validationErrors.Stok ? "Please Input Nomor Stok First":"Masukkan Nomor Stok"}`} 
                />
            </div>
            {/* {error && (
                <div className="text-red-500">{error}</div>
            )} */}
            <div className="flex gap-[10px] justify-end mt-[10px]">
                <button className="bg-blue-500 p-[10px] text-[14px] w-full rounded-sm capitalize font-Roboto text-white" onClick={handleTambahProduk}>submit</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;

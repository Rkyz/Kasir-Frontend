import { useState } from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { createPelanggan } from '../../../services/pelanggan.service';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const AddCustomer = () => {
    const [namaPelanggan, setNamaPelanggan] = useState('');
    const [alamat, setAlamat] = useState('');
    const [nomorTelepon, setNomorTelepon] = useState('');
    const [error, setError] = useState(null);
    const [validationErrors, setValidationErrors] = useState({
        namaPelanggan: false,
        alamat: false,
        nomorTelepon: false,
    });

    const handleTambahPelanggan = async () => {
        try {
            if (!namaPelanggan || !alamat || !nomorTelepon) {
                setValidationErrors({
                    namaPelanggan: !namaPelanggan,
                    alamat: !alamat,
                    nomorTelepon: !nomorTelepon,
                });
                setError('Semua kolom harus diisi');
                return;
            }

            const data = {
                NamaPelanggan: namaPelanggan,
                Alamat: alamat,
                NomorTelepon: nomorTelepon,
            };

            const response = await createPelanggan(data);
            setNamaPelanggan('');
            setAlamat('');
            setNomorTelepon('');
            setError(null);
            setValidationErrors({
                namaPelanggan: false,
                alamat: false,
                nomorTelepon: false,
            });

            console.log('Pelanggan berhasil ditambahkan:', response);
            Swal.fire({
                icon: 'success',
                title: 'Success Create Customer',
                text: 'Pelanggan berhasil ditambahkan',
                showConfirmButton: true,
                timer: 3000,
                confirmButtonText: 'OK',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed Create Data',
                text: error,
                showConfirmButton: true,
                timer: 3000,
                confirmButtonText: 'OK',
            });
            console.error('Gagal menambahkan pelanggan:', error);
            setError(error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleTambahPelanggan();
        }
    };

    return (
        <div className="absolute z-[60] bg-white rounded-md text-left gap-[20px] flex flex-col right-[15px] h-auto top-[65px] after:w-[13px] after:h-[13px] after:bg-white after:absolute after:right-[12.5px] after:-top-[6px] after:rotate-45 p-[15px]">
            <div className="flex gap-[20px] items-center">
                <div className="bg-blue-500 text-white flex items-center justify-center rounded-md text-[20px] h-[40px] w-[40px] ">
                    <BsFillPeopleFill />
                </div>
                <div className="flex flex-col items-start">
                    <p className="capitalize text-[16px] font-bold font-Roboto">create customer</p>
                    <p className="text-[16px] text-gray-400 capitalize font-Roboto">customer is a king but not a god</p>
                </div>
            </div>
        
            <div className="flex-col flex">
                <label htmlFor="" className="mt-[10px] font-Roboto text-black font-bold text-opacity-65">Nama Pelanggan</label>
                <input
                    type="text"
                    id="namaPelanggan"
                    value={namaPelanggan}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setNamaPelanggan(e.target.value)}
                    className={`border ${validationErrors.namaPelanggan ? 'border-red-500 placeholder:text-red-500 ' : 'border-black'} p-[10px] outline-none mt-[5px] rounded-md placeholder:text-[14px] placeholder:capitalize placeholder:font-Roboto`}
                    placeholder={` ${validationErrors.namaPelanggan ? "Please Input Pelanggan First":"Masukkan Pelanggan"}`} 

                />
                <label htmlFor="" className="mt-[10px] font-Roboto text-black font-bold text-opacity-65">Alamat</label>
                <input
                    type="text"
                    id="alamat"
                    value={alamat}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setAlamat(e.target.value)}
                    className={`border ${validationErrors.alamat ? 'border-red-500 placeholder:text-red-500' : 'border-black'} p-[10px] outline-none mt-[5px] rounded-md placeholder:text-[14px] placeholder:capitalize placeholder:font-Roboto`}
                    placeholder={` ${validationErrors.alamat ? "Please Input Alamat First":"Masukkan alamat"}`} 
                />
                <label htmlFor="" className="mt-[10px] font-Roboto text-black font-bold text-opacity-65">Telephone</label>
                <input
                    type="number"
                    id="nomorTelepon"
                    value={nomorTelepon}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setNomorTelepon(e.target.value)}
                    className={`border ${validationErrors.nomorTelepon ? 'border-red-500 placeholder:text-red-500' : 'border-black'} p-[10px] outline-none mt-[5px] hidden-num rounded-md placeholder:text-[14px] placeholder:capitalize placeholder:font-Roboto`}
                    placeholder={` ${validationErrors.nomorTelepon ? "Please Input Nomor Telephone First":"Masukkan Nomor Telephone"}`} 
                />
            </div>
            {/* {error && (
                <div className="text-red-500">{error}</div>
            )} */}
            <div className="flex gap-[10px] justify-end mt-[10px]">
                <button className="bg-blue-500 p-[10px] text-[14px] w-full rounded-sm capitalize font-Roboto text-white" onClick={handleTambahPelanggan}>submit</button>
            </div>
        </div>
    );
};

export default AddCustomer;

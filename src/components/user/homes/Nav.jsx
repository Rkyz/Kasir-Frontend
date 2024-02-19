import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import { BsPeople } from "react-icons/bs";
import { useState } from 'react';
import { useToggle } from '../../../utils/Handle';
import Icon from '../../../utils/Icon';

// eslint-disable-next-line react/prop-types
const Nav = ({ Tippy, pelangganData}) => {
    const [seeCustomer, handleSeeCustomer] = useToggle(false)
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleSelectCustomer = (selectedPelangganName) => {
        // Temukan objek pelanggan yang sesuai berdasarkan namanya
        const selectedPelanggan = pelangganData.find(pelanggan => pelanggan.Nama === selectedPelangganName);
    
        if (selectedPelanggan) {
            // Mengatur pelanggan yang dipilih
            setSelectedCustomer(selectedPelanggan.id);
            console.log("Selected Customer ID:", selectedPelanggan.id);
            sessionStorage.setItem('pelangganData', JSON.stringify(selectedPelanggan.id));
            console.log("Customer ID stored:", selectedPelanggan.id);
        } else {
            console.log("Customer not found:", selectedPelangganName);
        }
    }
    
    
    
    
    


    console.log(pelangganData)
    return (
        <div
            className="flex sticky top-[0px] items-start gap-[15px] flex-col bg-white shadow-md py-[15px] px-[10px]">
            <div className=' justify-between flex w-full'>
                <button
                    onClick={handleSeeCustomer}
                    className="bg-Gray flex gap-[10px] items-center  capitalize font-bold p-[10px] rounded-md">
                    <BsPeople className='text-[20px]'/>
                    <p className="font-Roboto">Select customer</p>
                </button>
                <div className="flex gap-[10px] text-[20px]">
                    <Tippy
                        content="Add Data"
                        arrow="arrow"
                        theme="gradient"
                        placement="bottom"
                        arrowType="round"
                        animation="scale">
                        <button className="p-[15px] rounded-md bg-Gray">
                            <Icon name="FiPlus"/>
                        </button>
                    </Tippy>
                    <Tippy
                        content="Open Book"
                        placement="bottom"
                        arrow="arrow"
                        arrowType="round"
                        animation="scale">
                        <button className="p-[15px] rounded-md bg-Gray">
                          <Icon name="FiBook"/>
                        </button>
                    </Tippy>
                    <Tippy
                        content="Refresh Table"
                        placement="bottom"
                        arrowType="round"
                        arrow="arrow"
                        animation="scale">
                        <button className="p-[15px] rounded-md bg-Gray">
                             <Icon name="HiOutlineRefresh"/>
                        </button>
                    </Tippy>
                </div>
            </div>
            {seeCustomer && (
            <div className='w-full bg-Gray rounded-md'>
                <select
                    name=""
                    id=""
                    className='w-full bg-transparent outline-none  p-[10px]'
                    onChange={(e) => handleSelectCustomer(e.target.value)}
                    defaultValue={sessionStorage.getItem('pelangganData') ? JSON.parse(sessionStorage.getItem('pelangganData')).pelangganID : ""}
                >
                    <option value="guest" disabled>Guest</option>
                    {pelangganData && pelangganData.map((pelanggan, index) => (
                        <option 
                            value={pelanggan.pelangganID} 
                            key={index}
                        >
                            {pelanggan.Nama}
                        </option>
                    ))}
                </select>
            </div>
        )}

        </div>
    )
}

export default Nav
import { IoClose } from 'react-icons/io5'
import download from "../../../assets/download.png"
import { TypeDataProps } from '../../../props/TypeData'
import PelangganPropTypes from '../../../props/PelangganTypeData'


const Warning = ({openPayment,pelangganData,handleOpenPayment}) => {
  return (
    <>
        {openPayment && (!pelangganData || !JSON.parse(sessionStorage.getItem('cartData')) || JSON.parse(sessionStorage.getItem('cartData')).length === 0) && (
            <div className="flex justify-center items-center h-full w-full bg-black bg-opacity-30  fixed z-[40] top-0 left-0">
                <div className="bg-white relative rounded-md p-[30px] text-center flex flex-col w-full max-w-[450px] items-center gap-[15px]">
                    <img src={download} alt="" className="w-[120px]"/>
                    <p className="text-[25px] font-Roboto font-bold">Yah, Ada Yang Salah Nih!</p>
                    <p className="text-black font-Roboto text-opacity-80">Please select a product before countinue to payments</p>
                    <button onClick={handleOpenPayment} className="absolute top-[10px] left-[10px] text-[25px]">
                        <IoClose/>
                    </button>
                </div>
            </div>
        )}
    </>
  )
}

Warning.propTypes = {
    openPayment: TypeDataProps.BoolType,
    handleOpenPayment: TypeDataProps.FunctionType,
    pelangganData: PelangganPropTypes
};


export default Warning

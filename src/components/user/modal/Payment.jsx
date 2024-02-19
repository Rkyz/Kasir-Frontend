import { Link } from "react-router-dom"
import Price from "../homes/Price"
import Nav from "../homes/Nav"
import { TypeDataProps } from "../../../props/TypeData"
import PelangganPropTypes from "../../../props/PelangganTypeData"
import Itemku from "../../../components/user/homes/ItemPayment";
import Icon from '../../../utils/Icon';

const Payment = ({openPayment,pelangganData, Tippy, details, handleDetailsDiscount, handleDetails, detailsDiscount, cartData}) => {
  return (
    <>
    {openPayment && (pelangganData && JSON.parse(sessionStorage.getItem('cartData')  )) && JSON.parse(sessionStorage.getItem('cartData')).length > 0 && (
        <>
            <div className='w-full h-full fixed z-40 bg-black bg-opacity-30 left-0 top-0'/>
            <div className={`fixed h-auto w-full  overflow-auto max-h-full sm:max-w-[400px] z-40 bg-transparent right-0 top-0 pt-[64px] text-black transition-all duration-1000 ease-in-out `}>
                <div className="h-full bg-transparent shadow-2xl w-full  flex-col flex ">
                    <Nav Tippy={Tippy} pelangganData={pelangganData}/>
                    {cartData.length > 0 ? (
                    <>
                        <div className="flex bg-white flex-col gap-[10px] p-[10px]">
                            <Itemku handleDetails={handleDetails} details={details} />
                        </div>
                        <Price detailsDiscount={detailsDiscount} handleDetailsDiscount={handleDetailsDiscount}/>
                    </>
                    ) : (
                        <div>no data</div>
                    )}

                    <div className="grid font-bold pb-[15px] bg-white grid-cols-1 p-[10px] gap-[10px] text-white">
                        <Link to="/payment" className="bg-[#07A326] flex items-center justify-center gap-[10px] p-[15px] rounded-md capitalize">
                            <Icon name="IoPlayCircleOutline" className="text-[20px]"/>
                            <p>process</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )}
    </>
  )
}

Payment.propTypes = {
    openPayment: TypeDataProps.BoolType,
    Tippy: TypeDataProps.ObjType,
    FiPlus: TypeDataProps.IconsType,
    HiOutlineRefresh: TypeDataProps.IconsType,
    FiBook: TypeDataProps.IconsType,
    IoMdCloseCircle: TypeDataProps.IconsType,
    details: TypeDataProps.BoolType,
    handleDetailsDiscount: TypeDataProps.FunctionType,
    GrFormNext: TypeDataProps.IconsType,
    IoPlayCircleOutline: TypeDataProps.IconsType,
    handleDetails: TypeDataProps.BoolType,
    detailsDiscount: TypeDataProps.BoolType,
    cartData: TypeDataProps.ArrayType,
    pelangganData: PelangganPropTypes,
};

export default Payment

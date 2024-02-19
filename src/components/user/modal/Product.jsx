import { TypeDataProps } from '../../../props/TypeData';
import piring from '../../../assets/piring.png';
import Icon from '../../../utils/Icon';


const Product = ({openProduct, handleOpenProduct, produkID, handleChangeQuantity, quantity, handleAddToCookieLocal}) => {
  return (
    <>
    {openProduct && (
        <div className="bg-black fixed z-50 bg-opacity-30 flex items-center justify-center left-0 w-full h-screen">
            <div className="max-w-[700px] grid grid-cols-2 h-auto bg-white relative rounded-md w-full">
                <button onClick={handleOpenProduct} className="bg-transparent text-[20px] absolute left-[15px] top-[15px]">
                    <Icon name="IoClose"/>
                </button>
                <div className="w-full h-full flex items-center justify-center">
                    <img src={piring} alt="" />
                </div>
                <div className="p-[20px] flex-col flex gap-[25px]">
                    <div className="flex flex-col">
                        <p className="font-Roboto font-bold text-[20px]">{produkID.NamaProduk}</p>
                        <p className="capitalize text-gray-400 font-Roboto">stok {produkID.Stok}</p>
                    </div>
                    <p className="font-Roboto text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam odit, voluptates similique maiores facilis dignissimos natus laboriosam voluptas consequatur eius?</p>
                    <div className="grid grid-cols-2 gap-[15px] capitalize">
                        <div className="flex flex-col gap-[10px]">
                            <label htmlFor="">quantity</label>
                            <input type="number" className="border hidden-num px-[5px] outline-none rounded-sm bg-Gray" value={quantity} onChange={handleChangeQuantity} />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span>price</span>
                            <div>
                                RP {produkID.Harga}
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white p-[10px] rounded-md font-Roboto hover:bg-Yellow" onClick={handleAddToCookieLocal}>Add Product</button>
                </div>
            </div>
        </div>
    )}

    </>
  )
}

Product.propTypes = {
    openProduct: TypeDataProps.BoolType,
    handleOpenProduct: TypeDataProps.FunctionType,
    produkID: TypeDataProps.ArrayType,
    handleChangeQuantity: TypeDataProps.FunctionType,
    quantity: TypeDataProps.NumberType,
    handleAddToCookieLocal: TypeDataProps.FunctionType,
};

export default Product
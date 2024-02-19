import { useEffect, useState } from "react";
import Icon from "../../../utils/Icon";

// eslint-disable-next-line react/prop-types
const ItemPayment = ({handleDetails,details}) => {
    const [cart, setCart] = useState([]);
    console.log(cart.JumlahProduk)
    const getCartFromSession = () => {
        const cart = JSON.parse(sessionStorage.getItem('cartData')) || [];
        return cart;
    };

    useEffect(() => {
        const cartData = getCartFromSession();
        setCart(cartData);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1); 
        sessionStorage.setItem('cartData', JSON.stringify(updatedCart));
        setCart(updatedCart);   

        window.location.reload();
    };

    const [quantity, setQuantity] = useState(0); // State untuk menyimpan jumlah produk

    // Mengupdate jumlah produk dalam sesi berdasarkan ProdukID
    const updateQuantityInSession = (productId, newQuantity) => {
        const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];
        const productIndex = cartData.findIndex(item => item.ProdukID === productId);
        if (productIndex !== -1) {
            cartData[productIndex].JumlahProduk = newQuantity;
            sessionStorage.setItem('cartData', JSON.stringify(cartData));
            setCart(cartData);
        }
    };

    // Mengatur nilai input jumlah produk
    const handleChangeQuantity = (e, productId) => {
        const value = parseInt(e.target.value);
        updateQuantityInSession(productId, value); // Memperbarui jumlah produk dalam sesi
    };

  return (
    <>
     {cart.map((item, index) => (
        <div className="bg-Yellow rounded-md overflow-hidden pl-[5px]" key={index}>
        <div className="bg-Gray w-full h-auto flex flex-col  p-[15px] rounded-md">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
                <button onClick={handleDetails}>
                <Icon name="GrFormNext" className="font-thin text-[20px]"/>
                </button>
                <div className="flex items-center gap-[8px] font-semibold capitalize">
                    <p>{item.JumlahProduk}</p>
                    <p>{item.NamaProduk}</p>
                </div>
            </div>
            <div className="flex items-center font-bold gap-[10px]">
                <p>RP {item.Harga}</p>
                <button onClick={() => removeFromCart(index)}>
                     <Icon name="IoMdCloseCircle" className="text-black text-opacity-50"/>
                </button>
            </div>
            </div>
            <div className="flex items-center justify-between px-[30px]">
                <p className="text-black text-opacity-40 capitalize text-[13px]">medium</p>
                <p className="text-black text-opacity-40 text-[13px] line-through">RP {item.Harga}</p>
            </div>
            
        {details && (
            
            <div className="flex gap-[10px] flex-col mt-[10px] pl-[30px]">
                <div className="flex">
                <div className="flex items-start flex-col gap-[5px] relative">
                    <p className="capitalize text-[14px] font-semibold font-Roboto">quantity</p>
                    <input 
                    className="bg-white w-[20px] p-[10px] flex  text-[14px] outline-none rounded-sm" 
                    type="number"
                    value={item.JumlahProduk}
                     onChange={(e) => handleChangeQuantity(e, item.ProdukID)} // Mengatur state ketika nilai input berubah
                />
                </div>
                <div className="flex items-start flex-col gap-[5px] bg-transparent w-full">
                    <p className="capitalize text-[14px] font-semibold font-Roboto">discount(%)</p>
                    <div className="bg-white w-full p-[10px] flex justify-start  text-[14px] rounded-sm">20</div>
                </div>
                </div>
            <button onClick={updateQuantityInSession}>Update Quantity</button>

        </div>
        
        )}
        </div>
        </div>
    ))}
    </>
  )
}

export default ItemPayment
const handleAddToCookie = (produkID, quantity, handleOpenProduct) => {
    if (quantity > 0) {
        const stokProduk = produkID?.Stok || 0;

        if (stokProduk !== null) {
            if (quantity <= stokProduk) {
                let cart = JSON.parse(sessionStorage.getItem('cartData')) || [];
                const newProduct = { ProdukID: produkID.id, JumlahProduk: quantity, Harga: produkID.Harga, NamaProduk: produkID.NamaProduk };
                const existingProductIndex = cart.findIndex(item => item.ProdukID === newProduct.ProdukID);
                if (existingProductIndex !== -1) {
                    cart[existingProductIndex].JumlahProduk += newProduct.JumlahProduk;
                } else {
                    cart.push(newProduct);
                }
                sessionStorage.setItem('cartData', JSON.stringify(cart));
                handleOpenProduct();
            } else {
                alert('Jumlah produk yang dimasukkan melebihi stok yang tersedia.');
            }
        } else {
            alert('Informasi stok produk tidak tersedia.');
        }
    } else {
        alert('Jumlah produk yang dimasukkan harus lebih dari 0.');
    }
};

export default handleAddToCookie;

import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [produkData, setProdukData] = useState(null);

  return (
    <ProductContext.Provider value={{ produkData, setProdukData }}>
      {children}
    </ProductContext.Provider>
  );
};

// AuthMiddleware.jsx

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AuthMiddleware = ({ children }) => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Ubah menjadi true jika token ada
  }, []);

  // Jika pengguna belum login dan mencoba mengakses halaman selain Login
  if (!isLoggedIn && location.pathname !== '/') {
    return null; // Tidak melakukan apa-apa
  }

  return children; // Render rute anak jika pengguna sudah login atau di halaman Login
};

export default AuthMiddleware;

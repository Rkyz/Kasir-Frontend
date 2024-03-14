import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/user/home/Home';
import Payment from '../pages/user/payment/Payment';
import Customer from '../pages/user/customer/Customer';
import Product from '../pages/user/product/Product'
import Login from '../pages/user/login/Login';
import History from '../pages/user/history/History';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/payment',
    element: <Payment/>,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/Customer',
    element: <Customer />,
  },
  {
    path: '/History',
    element: <History />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;

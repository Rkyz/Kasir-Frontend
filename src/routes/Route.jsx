import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/user/home/Home';
import Payment from '../pages/user/payment/Payment';
import Customer from '../pages/user/customer/Customer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/Customer',
    element: <Customer />,
  },

]);

export default router;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import kasir from '../../../assets/mesin2.png';
import { postLogin } from '../../../services/login.service';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await postLogin(email, password); 
      console.log(response.data, 'token')
      setError(response.data.msg)
      if (response.data.status === '200') {
        navigate("/dashboard")
      } else {
        return null
      }

      localStorage.setItem('token', response.data.token); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className='w-full bg-[#EBE9E0] flex-col gap-[30px] flex items-center justify-center h-screen'>
      <div className='h-auto bg-white max-w-[500px] pb-[30px] items-center gap-[30px] rounded-md w-full text-center flex flex-col text-black'>
        <div className='flex flex-col px-[80px] pt-[30px] gap-[15px]'>
          <div className='flex flex-col w-full items-center justify-center'>
            <img src={kasir} className='w-[60px]' alt='Logo'/>
            <p className='text-[28px] capitalize font-Roboto font-bold'>kasir login</p> 
          </div>
          <p className=' bg-transparent text-[18px] font-medium font-Roboto '>Hey, Enter your details to get sign in  to your account oke guys</p>
          <p>{error}</p>
        </div>
        <div className='w-full px-[50px] flex flex-col gap-[20px]'>
          <div className='flex flex-col gap-[15px] w-full bg-white'>
            <input type="email" value={email} onChange={handleEmailChange} className='w-full p-[10px] bg-transparent rounded-md border border-black border-opacity-30' placeholder='Input Email'/>
            <div className='flex bg-transparent rounded-md'>
              <input type="password" value={password} onChange={handlePasswordChange} className='w-full outline-none p-[10px] bg-transparent rounded-l-md border-y border-l border-black border-opacity-30' placeholder='Input Password'/>
              <button className='h-full border-y border-r border-black border-opacity-30 rounded-r-md p-[10px] flex items-center justify-center capitalize font-Roboto'>show</button>
            </div>
          </div>
          <div className='w-full text-left'>
            <p className='capitalize'>have trouble in sign in?</p>
          </div>
        </div>
        <div className='w-full px-[50px]'>
          <button onClick={login} className='w-full p-[10px] bg-Yellow bg-opacity-80 text-white rounded-md capitalize '>sign in</button>
        </div>
        <p className='capitalize'>-- on sign in with --</p>
        <div className='grid grid-cols-3 w-full px-[50px] gap-[10px]'>
          <button className='text-center bg-transparent border border-black border-opacity-30 rounded-md p-[10px] hover:bg-Yellow hover:text-white hover:border-Yellow '>
            <p>Goggle</p>
          </button>
          <button className='text-center bg-transparent border border-black border-opacity-30 rounded-md p-[10px] hover:bg-Yellow hover:text-white hover:border-Yellow '>
            <p>Apple ID</p>
          </button>
          <button className='text-center bg-transparent border border-black border-opacity-30 rounded-md p-[10px] hover:bg-Yellow hover:text-white hover:border-Yellow '>
            <p>Facebook</p>
          </button>
        </div>
        <p className='capitalize flex items-center gap-[10px] font-Roboto'>don't have an account? <Link className='font-bold'>request now</Link></p>
      </div>
    </div>
  );
}

export default Login;

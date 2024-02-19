import React from 'react'
import { Link } from 'react-router-dom'
import kasir from '../../../assets/mesin2.png'

const Login = () => {
  return (
    <div className='w-full bg-[#EBE9E0] flex-col gap-[30px] flex items-center justify-center h-screen'>
      <div className='h-auto bg-white max-w-[500px] pb-[30px] items-center gap-[30px] rounded-md w-full text-center flex flex-col text-black'>
        <div className='flex flex-col px-[80px] pt-[30px] gap-[15px]'>
            <div className='flex flex-col w-full items-center justify-center'>
                <img src={kasir} className='w-[60px]'/>
            <p className='text-[28px] capitalize font-Roboto font-bold'>kasir login</p> 
            
            </div>
            <p className=' bg-transparent text-[18px] font-medium font-Roboto '>Hey, Enter your details to get sign in  to your account oke guys</p>
        </div>
        <div className='w-full px-[50px] flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[15px] w-full bg-white'>
                <input type="Phone Email" className='w-full p-[10px] bg-transparent rounded-md border border-black border-opacity-30' placeholder='Input Email'/>
                <div className='flex bg-transparent rounded-md'>
                <input type="Password" className='w-full outline-none p-[10px] bg-transparent rounded-l-md border-y border-l border-black border-opacity-30' placeholder='Input Password'/>
                <button className='h-full border-y border-r border-black border-opacity-30 rounded-r-md p-[10px] flex items-center justify-center capitalize font-Roboto'>show</button>
                </div>
            </div>
            <div className='w-full text-left'>
                <p className='capitalize'>have trouble in sign in?</p>
            </div>
        </div>
        <div className='w-full px-[50px]'>
        <button className='w-full p-[10px] bg-Yellow bg-opacity-80 text-white rounded-md capitalize '>sign in</button>
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
      {/* <p className='font-Roboto font-bold text-[14px] capitalize'>copyrigtht @rio alamsyah 2022 | privacy policy</p> */}
    </div>
  )
}

export default Login
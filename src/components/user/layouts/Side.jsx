import { Link } from 'react-router-dom'
import { IoMdLogOut } from "react-icons/io";
import { useToggle } from '../../../utils/Handle';
import useHookLocation from '../../../utils/Path';
import Icon from '../../../utils/Icon';

const Side = ({closeToggle}) => {
    const location = useHookLocation();
    const currentPath = location.pathname;
    const [openProfile, handleOpenProfile] = useToggle(false)
  return (
    <div className={`h-full z-[40] flex-col flex justify-between fixed bg-white  pb-[25px] pt-[76px] items-center ${closeToggle ? 'sm:hidden':'max-sm:hidden'}`}>
        
        <ul className='flex items-center flex-col w-full px-[7px] gap-[5px] '>
            <li className='w-full'>
                <Link to="/" className={`flex items-center flex-col w-[70px] justify-center h-[70px] rounded-md capitalize ${currentPath === '/' ? 'text-Yellow border-[2px] bg-opacity-15 border-Yellow bg-Yellow ':'hover:bg-Gray '}`}>
                    <Icon name="IoPeopleOutline" className='text-[20px]'/>
                    <p className='text-[14px]'>home</p>
                </Link>
            </li>
            <li>
            <Link to="/customer" className={`flex items-center flex-col capitalize w-[70px] justify-center h-[70px]  rounded-md ${currentPath === '/customer' || currentPath === '/customer/' ? 'text-Yellow border-[2px] bg-opacity-15 border-Yellow bg-Yellow':'hover:bg-Gray '}`}>
                    <Icon name="IoPeopleOutline" className='text-[20px]'/>
                    <p className='text-[14px]'>customer</p>
                </Link>
            </li>
            <li>
            <Link to="/product" className={`flex items-center flex-col capitalize w-[70px] justify-center h-[70px] rounded-md ${currentPath === '/product' || currentPath === '/product/' ? 'text-Yellow border-[2px] bg-opacity-15 border-Yellow bg-Yellow':'hover:bg-Gray'}`}>
                    <Icon name="IoFastFoodOutline" className='text-[20px]'/>
                    <p className='text-[14px]'>product</p>
                </Link>
            </li>
            <li>
            <Link to="/history" className={`flex items-center flex-col capitalize w-[70px] justify-center h-[70px] rounded-md ${currentPath === '/history' || currentPath === '/history/' ? 'text-Yellow border-[2px] bg-opacity-15 border-Yellow bg-Yellow':'hover:bg-Gray'}`}>
                    <Icon name="GrHistory" className='text-[18px]'/>
                    <p className='text-[14px]'>order </p>
                </Link>
            </li>
            {/* <li>
            <Link className={`flex items-center flex-col capitalize w-[70px] justify-center h-[70px] text-black rounded-md ${currentPath === '/table' || currentPath === '/table/' ? 'text-Yellow border-[2px] bg-opacity-15 border-Yellow bg-Yellow':'hover:bg-Gray'}`}>
                    <MdOutlineTableBar className='text-[20px]'/>
                    <p className='text-[14px]'>tables</p>
                </Link>
            </li> */}
        </ul>
        <ul className='flex items-center flex-col w-full px-[7px] gap-[10px] '>
            <li className='relative'>
                <button onClick={handleOpenProfile} className='bg-black p-[25px] rounded-full bg-cover bg-center'
                style={{ backgroundImage : 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAMFBMVEXl5uivtLi/w8assbXo6eqprrLKzdDe4OHFycyyt7u4vcDCxsnZ293R1NXe4OPW2Nq0sbNTAAACmUlEQVR4nO2a3ZKkIAxGBSIoir7/2w7+7Mz2tkq6Rky26js33dVXp0ICgXTTAAAAAAAAAAAAAAAAAAAAAACAHLR/kKxGAWpmb2PGdikodg3eOLPjXEzSPsdQGH40V9peoyql/lVziaqxk7r1t2+am+ssLfbKFI89M7qW/ySem6me1acrT9MGab8/kG8vPI3plZhS6C89jeukFXeGq4VfTUdpxZW5oJlFo4Z6uq6kDR31dF1JW0itfEjJlwOaC3+S9mwoMjyNkT9Jp8LetOOlPRk1v+AGaU9KPNEonqSeJargGGUVvQbRDqI387/kKPFEXZQWbWbWhu+stGdT6pp3UfmTqeGd9fI3PGb3JJ6iuSth9KNGQT+a+zxGh6/h0kRzWVTFnen6mWRFywNUqSVVsIluUOG87zVk6Mp1PbWzjgxdCBemzuvxXA7SU1MFh+dfUHMcU2dUxXNhOqoo18uf8e+891Fq3hv/gWbbO7cFNn/ETt9I5JsxdTEHto/Wz0GvZkNE2xSU1E5Ds1YYx+S7wVobrR067+cxfA9xdUAUUmfjkqBuTdL9S86AIY1aXKmZfFy3zKN9NP/adyrO+jHFttDju7b3snElGofece5MzthZTpWCPV7wY9Uo1D5T6Fq25kprJZKV/HnDdB7V4fH1nxjTpSPVOD5qSvPn4dxNH33cocQvonfVB1sq5pvomelTE5LSpbNs+sz1mdIvPR9afeJNwAqmD1TUyBsplkyr3/U5b3csansmzmsoAzfUDSlzlsyhbovCHCgyqLubXrzcfE7NVur3W+gPrquXpZw/5HxgWlH0ppLfqPgfo/FW0XoPpzec8i9UGz7dm6K526/kma9J9lbq7aR0M9VEAQAAAAAAAAAAAAAAoMwX6lEXl0m0ebwAAAAASUVORK5CYII=)' }}
                />

                {openProfile && (
                    <div className='bg-white gap-[10px] border rounded-sm border-gray-300 flex-col absolute bottom-[70px] left-[5px] flex items-end justify-start '>
                        <div className='w-[20px] h-[20px] bg-white border-r border-b border-gray-300 absolute -bottom-[10.4px] left-[10px] rotate-45'/>
                        {/* <button className='hover:bg-Gray w-full flex items-center px-[20px] py-[10px] gap-[10px]'>
                            <CgProfile className='text-[20px]'/>
                            <p className='text-[16px] font-Roboto font-medium'>Profile</p>
                        </button> */}
                        <div className='flex flex-col gap-[15px] px-[20px] py-[20px]'>
                            <p className='font-Roboto capitalize text-[15px] font-bold'>welcome, admin !!</p>
                            <div className='flex flex-col gap-[5px]'>
                                <p className='font-Roboto font-medium text-[18px] capitalize'>rio alamsyah</p>
                                <div className='flex gap-[7px] items-center text-Yellow'>
                                    <Icon name="MdEmail" className='text-[20px]'/>
                                <p className='text-[14px]'>Admin@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </li>
            <li>
            <Link className={`flex items-center flex-col capitalize w-[70px] justify-center h-[70px] text-black rounded-md ${currentPath === '/order' ? '':'hover:bg-Gray'}`}>
                    <IoMdLogOut className='text-[20px]'/>
                    <p className='text-[14px]'>logout</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Side
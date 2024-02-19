import React from 'react';
import { HiOutlineRefresh } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { IoClose, IoPlayCircleOutline } from "react-icons/io5";
import { RiWifiOffLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { MdDelete, MdPayments } from "react-icons/md";
import { CgTrash } from "react-icons/cg";
import { FiBook, FiPlus } from "react-icons/fi";
import { BsPlus, BsOption } from "react-icons/bs";
import { IoSearchOutline, IoWifi } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdOptions } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline, IoFastFoodOutline, IoPeopleOutline, IoOptions } from "react-icons/io5";
import { GrHistory } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { MdEmail, MdOutlineTableBar } from "react-icons/md";
import { GoNumber } from "react-icons/go";
import { GiClick } from "react-icons/gi";
import { FaMoneyBillAlt } from "react-icons/fa";

const Icon = ({ name, className }) => {
  const icons = {
    FiPlus,
    HiOutlineRefresh,
    IoMdCloseCircle,
    GrFormNext,
    IoClose,
    IoPlayCircleOutline,
    RiWifiOffLine,
    GoDotFill,
    MdDelete,
    MdPayments,
    CgTrash,
    FiBook,
    BsPlus,
    BsOption,
    IoSearchOutline,
    IoWifi,
    MdOutlineTableRestaurant,
    FiSearch,
    FaCartShopping,
    IoMdOptions,
    GiHamburgerMenu,
    IoLogOutOutline,
    GrHistory,
    HiOutlineHome,
    IoPeopleOutline,
    MdEmail,
    MdOutlineTableBar,
    IoFastFoodOutline,
    IoOptions,
    GoNumber,
    GiClick,
    FaMoneyBillAlt
  };

  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default Icon;

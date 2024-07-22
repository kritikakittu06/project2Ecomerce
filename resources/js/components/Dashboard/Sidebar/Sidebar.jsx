import React from 'react';
import { BsBorderStyle } from 'react-icons/bs';
import { FiPhone, FiSettings, FiShoppingCart, FiUsers } from 'react-icons/fi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='min-h-screen sticky w-[350px] bg-slate-800 text-white p-5'>
        <h2 className='text-xl font-bold'>LOGO</h2>
        <hr className='my-3'/>
        <ul className='flex flex-col gap-3'>
          <Link to="/dashboard/dashboardContent" className='p-2.5 hover:bg-slate-600 font-medium text-sm cursor-pointer rounded-md flex items-center gap-2'>
            <LuLayoutDashboard/>
            <span>Dashboard</span>
          </Link>
          <Link to="/dashboard/users" className='p-2.5 hover:bg-slate-600 font-medium text-sm cursor-pointer rounded-md flex items-center gap-2'>
            <FiUsers/>
            <span>Users</span>
          </Link>
          <Link to="/dashboard/products" className='p-2.5 hover:bg-slate-600 font-medium text-sm cursor-pointer rounded-md flex items-center gap-2'>
            <FiShoppingCart/>
            <span>Products</span>
          </Link>
          <Link to="/dashboard/orders" className='p-2.5 hover:bg-slate-600 font-medium text-sm cursor-pointer rounded-md flex items-center gap-2'>
            <BsBorderStyle/>
            <span>Orders</span>
          </Link>
          <li className='p-2.5 hover:bg-slate-600 font-medium text-sm cursor-pointer rounded-md flex items-center gap-2'>
            <FiShoppingCart/>
            <span>Sales</span>
          </li>
          <li className='p-2.5 hover:bg-slate-600 font-medium text-sm cursor-pointer rounded-md flex items-center gap-2'>
            <FiPhone/>
            <span>Contact</span>
          </li>
          <li className='p-2.5 hover:bg-slate-600 font-medium text-sm cursor-pointer rounded-md flex items-center gap-2'>
            <FiSettings/>
            <span>Settings</span>
          </li>
        </ul>
    </div>
  )
}

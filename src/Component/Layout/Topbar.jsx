import { TbBrandMeta } from 'react-icons/tb'
import React from 'react'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXFill } from 'react-icons/ri'


export default function Topbar() {
  return (
    <div className = "bg-[#ea2e0e] text-white">
        <div className='container mx-auto flex justify-between items-center py-3'>
            <div className='hidden md:flex tems-center space-x-4'> 
                <a href='#' className='hover :text-gray-300'>
                    <TbBrandMeta className='h-5 w-5'/>
                </a>
                <a href='#' className='hover :text-gray-300'>
                    <IoLogoInstagram className='h-5 w-5'/>
                </a>
                <a href='#' className='hover :text-gray-300'>
                    <RiTwitterXFill className='h-5 w-5'/>
                </a>
            </div>
        <div className='text-sm text-center flex-grow'>
            <span>We ship WorldWide - Fast and reliable shipping!</span>
        </div>
        <div className='text-sm hidden md:block'>
            <a href="tel:+9184345782" className='hover:text-gray-300'>
                +1 (234) 567-890 
            </a>
        </div>
        </div>
    </div>
  )
}


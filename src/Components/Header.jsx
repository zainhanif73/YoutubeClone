import React from 'react'
import Search from '../svgs/Search'

function Header() {
    return (
        <div className='bg-[#000000] flex justify-between mt-2'>
            <div className='ml-5 py-2'>
                <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="Image of Youtube" style={{ height: "45px" }} />
            </div>
            <div className='flex justify-between mt-2 rounded-full pr-2 pt-2 w-[420px] mr-16 bg-[#ffffff] h-[40px] w-[300px]'>
                <span><input className=' outline-none ml-3 pb-1 h-[30px] placeholder:text-[15px]' placeholder="Search..." type="text" name="search" id="search" /></span>
                <span className='cursor-pointer p-1 hover:bg-[#efebe8] rounded-full w-[25px]'><Search/></span>
            </div>
        </div>
    )
}

export default Header
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Search from '../../svgs/Search'

function Header({ search, setSearch, active, setActive, click, setClick }) {
    const navigate = useNavigate();
    return (
        <div className='bg-[#000000] flex justify-between mt-2'>
            <div className='ml-5 py-2 cursor-pointer' onClick={() => { navigate("/") }}>
                <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="Image of Youtube" style={{ height: "45px" }} />
            </div>
            <div className='flex justify-between mt-2 ml-8 rounded-full pr-2 pt-2 pb-4 w-[200px] md:w-[420px] mr-16 bg-[#ffffff] h-[40px] w-[300px]'>
                <span><input onChange={(e) => { setSearch(e.target.value) }} className='w-[150px] md:w-[350px] outline-0 active:appearance-none appearance-none active:outline-none focus:outline-none ml-3 pb-1 h-[30px] placeholder:text-[15px]' placeholder="Search..." type="text" name="search" id="search" /></span>
                <span className='cursor-pointer p-1 mb-1 rounded-full w-[32px]' onClick={() => {
                    setActive(18);
                    navigate("/")
                    setClick(!click);
                }}><Search color='#FC1503' /></span>
            </div>
        </div>
    )
}

export default Header
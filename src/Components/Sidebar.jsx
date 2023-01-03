import React, { useState } from 'react'
import Home from "../svgs/Home"
import Tag from "../svgs/Tag"
import Music from "../svgs/Music"
import Education from "../svgs/Education"
import Podcast from "../svgs/Podcast"
import Movie from "../svgs/Movie"
import Game from "../svgs/Gaming"
import Live from "../svgs/Live"
import Beautiful from "../svgs/Beautiful"
import Fashion from "../svgs/Fashion"
import Sport from "../svgs/Sport"
import Gym from "../svgs/Gym"
import Crypto from "../svgs/Crypto"
import Comedy from "../svgs/Comedy"


function Sidebar() {
    const [active, setActive] = useState(1)
    return (
        <div className='flex flex-col ml-4 w-[200px]'>
            <div className={active===1? 'flex text-white cursor-pointer text-[15px] mt-8 mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mt-8 mb-8'} onClick={()=>{setActive(1)}}> <span className='text-white w-[30px] ml-3'> {active===1? <Home color='#FFFFFF'/>:<Home color='#FC1503'/> }</span> <span className='pt-2 pl-3'>New</span></div>
            <div className={active===2? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(2)}}> <span className='text-white w-[30px] ml-3'> {active===2? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Js Mastery</span></div>
            <div className={active===3? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(3)}}> <span className='text-white w-[30px] ml-3'> {active===3? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Coding</span></div>
            <div className={active===4? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(4)}}> <span className='text-white w-[30px] ml-3'> {active===4? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>ReactJs</span></div>
            <div className={active===5? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(5)}}> <span className='text-white w-[30px] ml-3'> {active===5? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>NextJS</span></div>
            <div className={active===6? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(6)}}> <span className='text-white w-[30px] ml-3'> {active===6? <Music color='#FFFFFF'/>:<Music color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Music</span></div>
            <div className={active===7? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(7)}}> <span className='text-white w-[30px] ml-3'> {active===7? <Education color='#FFFFFF'/>:<Education color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Education</span></div>
            <div className={active===8? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(8)}}> <span className='text-white w-[30px] ml-3'> {active===8? <Podcast color='#FFFFFF'/>:<Podcast color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Podcast</span></div>
            <div className={active===9? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(9)}}> <span className='text-white w-[30px] ml-3'> {active===9? <Movie color='#FFFFFF'/>:<Movie color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Movie</span></div>
            <div className={active===10? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(10)}}> <span className='text-white w-[30px] ml-3'> {active===10? <Game color='#FFFFFF'/>:<Game color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Gaming</span></div>
            <div className={active===11? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(11)}}> <span className='text-white w-[30px] ml-3'> {active===11? <Live color='#FFFFFF'/>:<Live color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Live</span></div>
            <div className={active===12? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(12)}}> <span className='text-white w-[30px] ml-3'> {active===12? <Sport color='#FFFFFF'/>:<Sport color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Sport</span></div>
            <div className={active===13? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(13)}}> <span className='text-white w-[30px] ml-3'> {active===13? <Fashion color='#FFFFFF'/>:<Fashion color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Fashion</span></div>
            <div className={active===14? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(14)}}> <span className='text-white w-[30px] ml-3'> {active===14? <Beautiful color='#FFFFFF'/>:<Beautiful color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Beauty</span></div>
            <div className={active===15? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(15)}}> <span className='text-white w-[30px] ml-3'> {active===15? <Comedy color='#FFFFFF'/>:<Comedy color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Comedy</span></div>
            <div className={active===16? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(16)}}> <span className='text-white w-[30px] ml-3'> {active===16? <Gym color='#FFFFFF'/>:<Gym color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Gym</span></div>
            <div className={active===17? 'flex text-white cursor-pointer text-[15px] mb-8 bg-[#FC1503] pb-2 rounded-full':'flex text-white cursor-pointer text-[15px] mb-8'}  onClick={()=>{setActive(17)}}> <span className='text-white w-[30px] ml-3'> {active===17? <Crypto color='#FFFFFF'/>:<Crypto color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Crypto</span></div>
        </div>
    )
}

export default Sidebar
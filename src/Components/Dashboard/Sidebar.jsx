import React, { useState } from 'react'
import Home from "../../svgs/Home"
import Tag from "../../svgs/Tag"
import Music from "../../svgs/Music"
import Education from "../../svgs/Education"
import Podcast from "../../svgs/Podcast"
import Movie from "../../svgs/Movie"
import Game from "../../svgs/Gaming"
import Live from "../../svgs/Live"
import Beautiful from "../../svgs/Beautiful"
import Fashion from "../../svgs/Fashion"
import Sport from "../../svgs/Sport"
import Gym from "../../svgs/Gym"
import Crypto from "../../svgs/Crypto"
import Comedy from "../../svgs/Comedy"
import color from '../../Style/Sidebar'
import Search from '../../svgs/Search'


function Sidebar({active,setActive,search,setSearch}) {
    
    return (
        <div className='flex md:flex-col gap-[1.5rem] md:gap-0 ml-4 md:w-[170px] md:h-[100vh] overflow-scroll top-0 bottom-0 pr-8'>
            <div className={active===1? 'flex text-white cursor-pointer text-[15px] md:mt-8 mb-8 bg-[#FC1503] pb-2 pr-[14px] md:pr-0 rounded-full':'flex text-white cursor-pointer text-[15px] md:mt-8 mb-8'} onClick={()=>{setActive(1)}}> <span className={color.textColor}> {active===1? <Home color='#FFFFFF'/>:<Home color='#FC1503'/> }</span> <span className='pt-2 pl-3'>New</span></div>
            <div className={active===2? color.redColor: color.simpleColor} onClick={()=>{setActive(2)}}> <span className={color.textColor}> {active===2? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Mastery</span></div>
            <div className={active===3? color.redColor: color.simpleColor} onClick={()=>{setActive(3)}}> <span className={color.textColor}> {active===3? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Coding</span></div>
            <div className={active===4? color.redColor: color.simpleColor} onClick={()=>{setActive(4)}}> <span className={color.textColor}> {active===4? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>ReactJs</span></div>
            <div className={active===5? color.redColor: color.simpleColor} onClick={()=>{setActive(5)}}> <span className={color.textColor}> {active===5? <Tag color='#FFFFFF'/>:<Tag color='#FC1503'/> }</span> <span className='pt-2 pl-3'>NextJS</span></div>
            <div className={active===6? color.redColor: color.simpleColor} onClick={()=>{setActive(6)}}> <span className={color.textColor}> {active===6? <Music color='#FFFFFF'/>:<Music color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Music</span></div>
            <div className={active===7? color.redColor: color.simpleColor} onClick={()=>{setActive(7)}}> <span className={color.textColor}> {active===7? <Education color='#FFFFFF'/>:<Education color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Education</span></div>
            <div className={active===8? color.redColor: color.simpleColor} onClick={()=>{setActive(8)}}> <span className={color.textColor}> {active===8? <Podcast color='#FFFFFF'/>:<Podcast color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Podcast</span></div>
            <div className={active===9? color.redColor: color.simpleColor} onClick={()=>{setActive(9)}}> <span className={color.textColor}> {active===9? <Movie color='#FFFFFF'/>:<Movie color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Movie</span></div>
            <div className={active===10? color.redColor: color.simpleColor} onClick={()=>{setActive(10)}}> <span className={color.textColor}> {active===10? <Game color='#FFFFFF'/>:<Game color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Gaming</span></div>
            <div className={active===11? color.redColor: color.simpleColor} onClick={()=>{setActive(11)}}> <span className={color.textColor}> {active===11? <Live color='#FFFFFF'/>:<Live color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Live</span></div>
            <div className={active===12? color.redColor: color.simpleColor} onClick={()=>{setActive(12)}}> <span className={color.textColor}> {active===12? <Sport color='#FFFFFF'/>:<Sport color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Sport</span></div>
            <div className={active===13? color.redColor: color.simpleColor} onClick={()=>{setActive(13)}}> <span className={color.textColor}> {active===13? <Fashion color='#FFFFFF'/>:<Fashion color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Fashion</span></div>
            <div className={active===14? color.redColor: color.simpleColor} onClick={()=>{setActive(14)}}> <span className={color.textColor}> {active===14? <Beautiful color='#FFFFFF'/>:<Beautiful color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Beauty</span></div>
            <div className={active===15? color.redColor: color.simpleColor} onClick={()=>{setActive(15)}}> <span className={color.textColor}> {active===15? <Comedy color='#FFFFFF'/>:<Comedy color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Comedy</span></div>
            <div className={active===16? color.redColor: color.simpleColor} onClick={()=>{setActive(16)}}> <span className={color.textColor}> {active===16? <Gym color='#FFFFFF'/>:<Gym color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Gym</span></div>
            <div className={active===17? color.redColor: color.simpleColor} onClick={()=>{setActive(17)}}> <span className={color.textColor}> {active===17? <Crypto color='#FFFFFF'/>:<Crypto color='#FC1503'/> }</span> <span className='pt-2 pl-3'>Crypto</span></div>
            {active===18 && <div className={active===18? color.redColor: color.simpleColor} onClick={()=>{setActive(18)}}> <span className={color.textColor}> {active===18? <Search color='#FFFFFF'/>:<Search color='#FC1503'/> }</span> <span className='pt-2 pl-3'>{search}</span></div>}
            <p className='text-[#ffffff] text-[10px]'>Copyright 2023 By Zain Hanif</p>
        </div>
    )
}

export default Sidebar
import React, { useState } from 'react'
import Dashboard from './Dashboard/Dashboard';
import Header from './Dashboard/Header';
import Sidebar from './Dashboard/Sidebar';

function Main({search,setSearch,active,setActive}) {

    return (
        <>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-[180px] mt-8 md:mt-0'>
                    <Sidebar search={search} setSearch={setSearch} active={active} setActive={setActive} />
                </div>
                <div>
                    <Dashboard search={search} setSearch={setSearch} active={active} setActive={setActive} />
                </div>
            </div>
        </>
    )
}

export default Main
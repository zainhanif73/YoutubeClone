import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Tick from "../../svgs/Tick"
import { fetchData } from '../../Utils/axios';

function Channel() {
    var channelId = window.location.href.split("/")[window.location.href.split("/").length - 1];
    const [channel, setChannel] = useState();
    const [data, setData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setChannel()
        setData()
        fetchData(`channels?id=` + channelId)
            .then((response) => { setChannel(response) })
            .catch((error) => { console.error(error) })

        fetchData(`search?channelId=` + channelId)
            .then((response) => { setData(response.items) })
            .catch((error) => { console.error(error) })
    }, [])

    return (
        <>
            {channel && channel.items &&
                <div className='flex flex-col'>
                    <div className='w-[100%]' style={{ backgroundImage: "radial-gradient(circle at 10% 20%, rgb(14, 174, 87) 0%, rgb(12, 116, 117) 90%)", zIndex: "10", height: "200px" }}>
                    </div>
                    <div className='flex absolute z-10 mt-16 ml-[10%] sm:ml[25%] md:ml-[35%] justify-center align-center'>
                        <div className='w-[auto] mt-8 ml-16' key={channel.items[0].snippet.thumbnails.high.url}>
                            <img className='rounded-full' src={channel.items[0].snippet.thumbnails.high.url} alt="" style={{ width: "182px", height: "182px" }} />
                            <div className='text-[#ffffff] p-6 font-[600]'>
                                <div className='mt-4 flex cursor-pointer' ><div className='flex' onClick={() => { navigate("/channel/" + channel.items[0].id) }}>{channel.items[0].snippet.title} <span className='ml-2 pt-1'><Tick /></span></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='flex flex-wrap justify-center mt-32 pt-16'>
                {data && data.length &&
                    data?.map((data, index) =>
                        <div className='flex flex-col cursor-pointer w-[300px] ml-8 mt-2' key={data.snippet.channelId + index}>
                            <div className='rounded-t-[10px] h-[180px] text-white' onClick={() => { navigate("/videoes/" + data.snippet.channelId + "/" + data.id.videoId) }} style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${data.snippet.thumbnails.high.url})` }}></div>
                            {/* <img src={data.snippet.thumbnails.high.url} alt="" style={{ width: "480px", height: "360px" }} /> */}
                            <div className='bg-[#1e1e1e] text-[#ffffff] h-[130px] p-6 font-[600]'>
                                <span><div className='hover:cursor-pointer' onClick={() => { navigate("/videoes/" + data.snippet.channelId + "/" + data.id.videoId) }}>{data.snippet.title.substring(0, 55)}</div> </span>
                                <div className='text-[#545554] mt-4 flex cursor-pointer' onClick={() => { navigate("/channel/" + data.snippet.channelId) }} ><div className='flex' >{data.snippet.channelTitle} <span className='ml-2 pt-1'><Tick /></span></div></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Channel
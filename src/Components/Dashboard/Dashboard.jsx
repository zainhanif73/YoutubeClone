import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils';
import { Navigate, useNavigate } from 'react-router-dom';
import Tick from "../../svgs/Tick"

function Dashboard({ active, setActive, search, setSearch }) {

    const [data, setData] = useState();
    const navigate = useNavigate();
    var [channel, setChannel] = useState();

    const url = {
        1: 'https://youtube-v31.p.rapidapi.com/search',
        2: 'https://youtube-v31.p.rapidapi.com/channels'
    }
    const params = [
        {
            q: 'new videoes',
            part: 'id,snippet',
            type: 'video',
            maxResults: '50'
        },
        {
            channelId: 'UCmXmlB4-HJytD7wek0Uo97A',
            part: 'snippet,id',
            order: 'date',
            maxResults: '50'
        },
        {
            q: 'coding videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'Reactjs course',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'nextjs course',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'music videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'education videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'podcast videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'new movies',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'gaming',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'live',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'sport games',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'fashion videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'beauty videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'comedy videos',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'gym videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'crypto videoes',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },

    ]


    const options = {
        method: 'GET',
        url: url[1],
        params: params[active - 1],
        headers: {
            'X-RapidAPI-Key': '6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    const options1 = {
        method: 'GET',
        url: url[2],
        params: {
            part: 'snippet,statistics',
            id: 'UCmXmlB4-HJytD7wek0Uo97A'
        },
        headers: {
            'X-RapidAPI-Key': '6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }

    const searchOption = {
        method: 'GET',
        url: url[1],
        params:
        {
            q: search, 
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        headers: {
            'X-RapidAPI-Key': '6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }

    useEffect(() => {
        if (active == 2) {
            axios.request(
                options1
            ).then(function (response) {
                
                setChannel(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
        else {
            setChannel()
        }
        setData()
        if (active !== 18) {
            axios.request(options).then(function (response) {
                // console.log(response.data);
                setData(response.data.items)
            }).catch(function (error) {
                console.error(error);
            });
        }
        else {
            axios.request(searchOption).then(function (response) {
                // console.log(response.data);
                setData(response.data.items)
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, [active])
    
    console.log(channel)

    return (
        <>
            <div className='flex flex-col'>
                {active === 1 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>New <span className='text-[#FC1503]'>Videoes</span></div>}
                {active === 2 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Js Mastery <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 3 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Coding <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 4 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>ReactJs <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 5 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>NextJs <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 6 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Music <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 7 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Education <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 8 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Podcast <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 9 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Movie <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 10 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Gaming <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 11 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Live <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 12 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Sport <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 13 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Fashion <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 14 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Beauty <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 15 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Comedy <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 16 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Gym <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 17 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>Crypto <span className='text-[#FC1503]'>Videos</span></div>}
                {active === 18 && <div className='text-white mt-4 font-[600] text-[36px] ml-8'>{search} <span className='text-[#FC1503]'>Videos</span></div>}
                <div className='flex flex-wrap'>
                    {channel && active === 2 && <div>
                        <div className='flex flex-col w-[300px] mt-8 ml-8' >
                            <img className='rounded-full' src={channel.items[0].snippet.thumbnails.high.url} alt="" style={{ width: "182px", height: "182px" }} />
                            <div className='text-[#ffffff] p-6 font-[600]'>
                                <div className='mt-4 flex cursor-pointer' onClick={()=>{navigate("/channel/"+channel.items[0].id)}}><div className='flex cursor-pointer' onClick={()=>{navigate("/channel/"+channel.items[0].id)}}>{channel.items[0].snippet.title} <span className='ml-2 pt-1'><Tick /></span></div></div>
                            </div>
                        </div>
                    </div>}
                    {data && data.length &&
                        data?.map((data, index) =>
                            <div className='flex flex-col cursor-pointer w-[300px] ml-8 mt-2'  key={data.snippet.channelId+index}>
                                <div className='h-[180px] text-white' onClick={()=>{navigate("/videoes/"+data.snippet.channelId+"+"+data.id.videoId)}} style={{ backgroundSize:'cover',backgroundPosition:'center center' ,backgroundRepeat:'no-repeat',backgroundImage: `url(${data.snippet.thumbnails.high.url})` }}></div>
                                {/* <img src={data.snippet.thumbnails.high.url} alt="" style={{ width: "480px", height: "360px" }} /> */}
                                <div className='bg-[#1e1e1e] text-[#ffffff] h-[130px] p-6 font-[600]'>
                                    <span><div className='hover:cursor-pointer' onClick={()=>{navigate("/videoes/"+data.snippet.channelId+"+"+data.id.videoId)}}>{data.snippet.title.substring(0, 55)}</div> </span>
                                    <div className='text-[#545554] mt-4 flex cursor-pointer' onClick={()=>{navigate("/channel/"+data.snippet.channelId)}} ><div className='flex' >{data.snippet.channelTitle} <span className='ml-2 pt-1'><Tick /></span></div></div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard
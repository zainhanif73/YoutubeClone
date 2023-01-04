import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { act } from 'react-dom/test-utils';
import Tick from "../svgs/Tick"

function Dashboard({ active, setActive }) {

    const [data, setData] = useState();
    const [channel, setChannel] = useState();
    const url = {
        1: 'https://youtube-v31.p.rapidapi.com/search',
        2: 'https://youtube-v31.p.rapidapi.com/channels'
    }
    const params = [
        {
            relatedToVideoId: '7ghhRHRP6t4',
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
            q: 'coding',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'reactjs',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'nextjs',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'music',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'education',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'podcast',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'movie',
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
            q: 'sport',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'fashion',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'beauty',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'comedy',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'gym',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        {
            q: 'crypto',
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
            'X-RapidAPI-Key': 'baa16a845cmshb3b3d7f2b8245b0p1e8cc3jsne3a316a8e0a4',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };


    useEffect(() => {
        if (active == 2) {
            axios.request(
                {
                    method: 'GET',
                    url: url[2],
                    params: {
                        part: 'snippet,statistics',
                        id: 'UCmXmlB4-HJytD7wek0Uo97A'
                    },
                    headers: {
                        'X-RapidAPI-Key': 'baa16a845cmshb3b3d7f2b8245b0p1e8cc3jsne3a316a8e0a4',
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                }
            ).then(function (response) {
                console.log(response.data);
                setChannel(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
        axios.request(options).then(function (response) {
            // console.log(response.data);
            setData(response.data.items)
        }).catch(function (error) {
            console.error(error);
        });
    }, [active])

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
                <div className='flex flex-wrap'>
                    {channel && active===2 && <div>
                        <div className='flex flex-col w-[300px] mt-8 ml-8' key={channel.items[0].snippet.thumbnails.high.url}>
                            <img className='rounded-full' src={channel.items[0].snippet.thumbnails.high.url} alt="" style={{ width: "182px", height: "182px" }} />
                            <div className='text-[#ffffff] p-6 font-[600]'>
                                <div className='mt-4 flex cursor-pointer' ><a className='flex' target={"_blank"} href={"https://www.youtube.com/" + channel.items[0].snippet.title}>{channel.items[0].snippet.title} <span className='ml-2 pt-1'><Tick /></span></a></div>
                            </div>
                        </div>
                    </div>}
                    {data && data.length &&
                        data?.map((data) => (
                            <div className='flex flex-col w-[300px] ml-8' key={data.snippet.thumbnails.high.url}>
                                <img src={data.snippet.thumbnails.high.url} alt="" style={{ width: "480px", height: "360px" }} />
                                <div className='bg-[#1e1e1e] text-[#ffffff] h-[200px] p-6 font-[600]'>
                                    <span><a href={"https://www.youtube.com/watch?v=" + data.id.videoId} target={'_blank'}>{data.snippet.title}</a> </span>
                                    <div className='text-[#545554] mt-4 flex cursor-pointer' ><a className='flex' target={"_blank"} href={"https://www.youtube.com/" + data.snippet.channelTitle}>{data.snippet.channelTitle} <span className='ml-2 pt-1'><Tick /></span></a></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard
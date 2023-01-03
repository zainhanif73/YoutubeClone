import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tick from "../svgs/Tick"

function Dashboard() {

    const [data, setData] = useState();
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            relatedToVideoId: '7ghhRHRP6t4',
            part: 'id,snippet',
            type: 'video',
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': 'baa16a845cmshb3b3d7f2b8245b0p1e8cc3jsne3a316a8e0a4',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };


    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data.items);
            setData(response.data.items)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            <div className='flex flex-col'>
                <div className='text-white mt-4 font-[600] text-[36px] ml-8'>New <span className='text-[#FC1503]'>Videoes</span></div>
                <div className='flex flex-wrap'>
                    {data && data.length &&
                        data?.map((data) => (
                            <div className='flex flex-col w-[300px] ml-8'>
                                <img src={data.snippet.thumbnails.high.url} alt="" style={{ width: "480px", height: "360px" }} />
                                <div className='bg-[#1e1e1e] text-[#ffffff] h-[200px] p-6 font-[600]'>
                                    <span><a href={"https://www.youtube.com/watch?v="+data.id.videoId} target={'_blank'}>{data.snippet.title}</a> </span>
                                    <div className='text-[#545554] mt-4 flex cursor-pointer' ><a className='flex' target={"_blank"} href={"https://www.youtube.com/"+data.snippet.channelTitle}>{data.snippet.channelTitle} <span className='ml-2 pt-1'><Tick/></span></a></div>
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
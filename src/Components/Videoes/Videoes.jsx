import Header from '../Dashboard/Header';
import Tick from "../../svgs/Tick"
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Videoes() {
    var videoId = window.location.href.split("/")[window.location.href.split("/").length - 1];
    const [video, setVideo] = useState();
    const [data1, setData1] = useState();
    const navigate = useNavigate();

    const channelVideoes = {
        method: 'GET',
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
            channelId: window.location.href.split("/")[window.location.href.split("/").length - 2],
            part: 'snippet,id',
            order: 'date',
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': '6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }

    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: { part: 'contentDetails,snippet,statistics', id: videoId },
        headers: {
            'X-RapidAPI-Key': '6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };


    useEffect(() => {
        // videoId = window.location.href.split("/")[window.location.href.split("/").length - 1].split("+")[1];
        axios.request(channelVideoes).then(function (response) {
            setData1(response.data.items)
        }).catch(function (error) {
            console.error(error);
        });

        axios.request(options).then(function (response) {
            setVideo(response.data.items[0]);
            console.log(response.data.items[0]);
        }).catch(function (error) {
            console.error(error);
        });

    }, [videoId])

    return (
        <>
            <div className='flex flex-wrap md:flex-nowrap justify-between mb-24 md:mr-8'>
                <div className='w-[100%] m-[auto] justify-start mt-[50px]'>
                    <div className='flex'>
                        <iframe className='video w-[100%] h-[40vh] md:h-[70vh] mx-2 md:w-[960px]'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/${videoId}?autoplay=0`}>
                        </iframe>
                    </div>
                    {video &&
                        <>
                            <div className='text-white font-[600] text-[1.3rem] md:font-[700] md:text-[1.5rem] ml-4 mt-2'>
                                {video.snippet.title}
                            </div>
                            <div className='flex justify-between text-[#ffffff]'>
                                <div className='text-[#ffffff] font-[500] mt-4  ml-4 flex cursor-pointer' onClick={() => { navigate("/channel/" + video.snippet.channelId) }} ><div className='flex' >{video.snippet.channelTitle} <span className='ml-2 pt-1'><Tick /></span></div></div>
                                <div className='mt-4 text-[#545554]'>
                                    <span>
                                        {video.statistics.viewCount? video.statistics.viewCount : 0} views
                                    </span>
                                    <span className='ml-4'>
                                        {video.statistics.likeCount? video.statistics.likeCount : 0} likes
                                    </span>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div className="flex flex-wrap mt-8 mr-2 justify-start md:overflow-scroll ml-[0px] md:h-[100vh]">
                    {data1 && data1.length &&
                        data1?.map((data, index) =>
                            <div className='w-[100%] sm:w-[300px] md:w-[300px] ml-4 mt-4' key={data.snippet.channelId + index}>
                                <div className='h-[180px] text-white cursor-pointer' onClick={() => { navigate("/videoes/" + data.snippet.channelId + "/" + data.id.videoId) }} style={{ backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundImage: `url(${data.snippet.thumbnails.high.url})` }}></div>
                                {/* <img src={data.snippet.thumbnails.high.url} alt="" style={{ width: "480px", height: "360px" }} /> */}
                                <div className='bg-[#1e1e1e] text-[#ffffff] h-[130px] p-6 font-[600]'>
                                    <span><div className='cursor-pointer' onClick={() => { navigate("/videoes/" + data.snippet.channelId + "/" + data.id.videoId) }}>{data.snippet.title.substring(0, 50)}</div> </span>
                                    <div className='text-[#545554] mt-4 flex hover:cursor-pointer' onClick={() => { navigate("/channel/" + data.snippet.channelId) }} ><div className='flex' >{data.snippet.channelTitle.substring(0, 20)} <span className='ml-2 pt-1'><Tick /></span></div></div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


        </>
    )
}

export default Videoes
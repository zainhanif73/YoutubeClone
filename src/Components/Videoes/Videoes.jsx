import YouTube from 'react-youtube';
import Header from '../Dashboard/Header';
import Tick from "../../svgs/Tick"
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Videoes() {
    var videoId = window.location.href.split("/")[window.location.href.split("/").length - 1].split("+")[1];
    const [video, setVideo] = useState("");
    const [data1, setData1] = useState("");
    const navigate = useNavigate();

    const channelVideoes = {
        method: 'GET',
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
            channelId: window.location.href.split("/")[window.location.href.split("/").length - 1].split("+")[0],
            part: 'snippet,id',
            order: 'date',
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': '6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }

    useEffect(() => {
        setData1();
        videoId = window.location.href.split("/")[window.location.href.split("/").length - 1].split("+")[1];
        axios.request(channelVideoes).then(function (response) {
            setData1(response.data.items)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    console.log(data1)

    return (
        <>
            <div className='flex flex-wrap md:flex-nowrap justify-between mb-24 mr-8'>
                <div className='flex justify-start mt-[30px] ml-[70px]'>
                    <YouTube videoId={videoId} className="w-auto"/>
                </div>
                <div className="flex flex-wrap justfy-center md:overflow-scroll ml-[120px] md:ml-0 md:h-[100vh]"> 
                    {data1 && data1.length &&
                        data1?.map((data, index) =>
                            <div className='w-[300px] ml-8 mt-2' key={data.snippet.channelId+index}>
                                <div className='h-[230px] text-white' style={{ backgroundImage: `url(${data.snippet.thumbnails.high.url})` }}></div>
                                {/* <img src={data.snippet.thumbnails.high.url} alt="" style={{ width: "480px", height: "360px" }} /> */}
                                <div className='bg-[#1e1e1e] text-[#ffffff] min-h-[180px] h-fit p-6 font-[600]'>
                                    <span><div className='hover:cursor-pointeor' onClick={() => { navigate("/videoes/" + data.snippet.channelId + "+" + data.id.videoId) }}>{data.snippet.title}</div> </span>
                                    <div className='text-[#545554] mt-4 flex hover:cursor-pointer' onClick={() => { navigate("/channel/" + data.snippet.channelId) }} ><div className='flex' >{data.snippet.channelTitle} <span className='ml-2 pt-1'><Tick /></span></div></div>
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
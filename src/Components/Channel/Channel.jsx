import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Tick from "../../svgs/Tick"

function Channel(props) {
    const channelId = window.location.href.split("/")[window.location.href.split("/").length - 1];
    const [channel, setChannel] = useState();
    const [data, setData] = useState();
    const navigate = useNavigate();

    const searchOption = {
        method: 'GET',
        url: "https://youtube-v31.p.rapidapi.com/channels",
        params: {
            part: 'snippet,statistics',
            id: channelId
        },
        headers: {
            'X-RapidAPI-Key': '6749cf4ac5msh2cbbef89b3ffaedp1b3ec3jsn6a85864b62ce',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }

    const channelVideoes = {
        method: 'GET',
        url: "https://youtube-v31.p.rapidapi.com/search",
        params: {
            channelId: channelId,
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
        axios.request(searchOption).then(function (response) {
            setChannel(response.data)
        }).catch(function (error) {
            console.error(error);
        });

        axios.request(channelVideoes).then(function (response) {
            setData(response.data.items)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            {channel && channel.items &&
                <div className='flex flex-col'>
                    <div className='w-[100%]' style={{ backgroundImage: "radial-gradient(circle at 10% 20%, rgb(14, 174, 87) 0%, rgb(12, 116, 117) 90%)", zIndex: "10", height: "200px" }}>
                    </div>
                    <div className='flex absolute z-10 mt-16 ml-[10%] sm:ml[25%] md:ml-[35%] justify-center align-center'>
                        <div className='w-[300px] mt-8 ml-16' key={channel.items[0].snippet.thumbnails.high.url}>
                            <img className='rounded-full' src={channel.items[0].snippet.thumbnails.high.url} alt="" style={{ width: "182px", height: "182px" }} />
                            <div className='text-[#ffffff] p-6 font-[600]'>
                                <div className='mt-4 flex cursor-pointer' ><a className='flex' target={"_blank"} href={"https://www.youtube.com/" + channel.items[0].snippet.title}>{channel.items[0].snippet.title} <span className='ml-2 pt-1'><Tick /></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='flex flex-wrap justify-center mt-32'>
            {data && data.length &&
                data?.map((data) =>
                    <div className='flex flex-col w-[300px] ml-8 mt-2' key={data.snippet.channelId}>
                        <div className='h-[230px] text-white' style={{ backgroundImage: `url(${data.snippet.thumbnails.high.url})` }}></div>
                        {/* <img src={data.snippet.thumbnails.high.url} alt="" style={{ width: "480px", height: "360px" }} /> */}
                        <div className='bg-[#1e1e1e] text-[#ffffff] min-h-[180px] h-fit p-6 font-[600]'>
                            <span><a className='w-[10px]' href={"https://www.youtube.com/watch?v=" + data.id.videoId} target={'_blank'}>{data.snippet.title}</a> </span>
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
'use client'
import React, { useEffect, useState } from 'react';
import type { HotPlace } from '@/types/HotPlace';
import HotPlaceDetailCard from '@/component/HotPlaceDetailCard';
import { useParams } from 'next/navigation';



export default function () {
    const [tdata,setTdata] = useState<HotPlace|null>();
    const params = useParams<{id : string}>();
    const id = Number(params.id);

    const getPlaceList = async function()  {
        const baseUrl = 'https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey='
        const apikey = process.env.NEXT_PUBLIC_API_DATA_KEY;
        const Url = `${baseUrl}${apikey}&pageNo=1&numOfRows=10&resultType=json`

        const resp = await fetch(Url);
        const data = await resp.json();
        const item = data.getFoodKr.item;

        setTdata(item.find((item : HotPlace) => item.UC_SEQ === id));
    }

    useEffect(()=>{
        getPlaceList();
    
    },[]);

    useEffect(()=>{
        console.log('Tdata',tdata);
    },[tdata])

  return (
    <div>
    {
        tdata &&
        <HotPlaceDetailCard item={tdata}/>
    }
    </div>
  );
}
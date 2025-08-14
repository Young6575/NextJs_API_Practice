import HotPlaceCard from '@/component/HotPlaceCard';
import React from 'react';
import type { HotPlace } from '@/types/HotPlace';


async function getHotplList() {
    const baseUrl = 'https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey='
    const apikey = process.env.NEXT_PUBLIC_API_DATA_KEY;
    const Url = `${baseUrl}${apikey}&pageNo=1&numOfRows=10&resultType=json`

    const resp = await fetch(Url);

    return resp.json();
}

export default async function HotPlaceList() {
    
    const Data = await getHotplList();
    const items : HotPlace[] = Data.getFoodKr.item;
    // console.log(items);

    return (
    <div>
        <div className='flex justify-between border-2'>
            <div className='text-4xl font-bold'>부산 맛집</div>

            <div className='flex'>
                <div className='mr-5'>홈</div>
                <div>지역</div>
            </div>
        </div>

        <div className='mt-2 border-2'>
            <div className='text-2xl font-bold'>부산 맛집 리스트</div>

            <div className='grid grid-cols-4 gap-5'>
            
        {
            <HotPlaceCard items={items} />

        }
            
            </div>
        </div>

    </div>
  );
}
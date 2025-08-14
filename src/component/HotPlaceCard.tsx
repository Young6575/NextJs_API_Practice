import { HotPlace } from '@/types/HotPlace';
import Link from 'next/link';
import React from 'react';

interface HotPlaceCardProps {
 items : HotPlace[]
}

export default async function HotPlaceCard({items} : HotPlaceCardProps) {

    console.log(items);
  return (
    <>
    {  
        items && 
        items.map(item => 
            <div key={item.UC_SEQ} className='w-full h-full border-1 rounded-2xl'>
                <Link href={`/hotplaceList/${item.UC_SEQ}`}>
                <img src={item.MAIN_IMG_THUMB} className="w-full rounded-t-2xl" />
                <div className='font-bold text-xl'>{item.MAIN_TITLE}</div>
                <div >{item.GUGUN_NM}</div>
                <div>{item.ADDR1}</div>
                </Link>
            </div>
        )
    }
    </>

  );
}
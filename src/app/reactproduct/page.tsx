'use client'
import React, { useEffect, useState } from 'react';
import type { Product } from '@/types/product';
import TailButton from '@/component/ProductBox';
import Link from 'next/link';

export default function ReactProduct() {
    const[tdata,setTdata] = useState<Product[]|null>(null);

    const getFetchdata = async () => {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const res = await fetch(`${baseUrl}/api/products`);
        if (!res.ok) {
        throw new Error('fetch Error');
        }
        const data = await res.json();
        setTdata(data);
        console.log(res);
}

useEffect(()=>{
    getFetchdata();
},[])

  return (
    
    <div>
        <div className='flex justify-between h-full'>
            <div className='text-3xl font-bold'>상품목록</div>
            <Link href={"/"}>
            <div className='flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                홈으로
            </div>
            </Link>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            {tdata && tdata.map(item => (
                    <Link href={`/reactproduct/${item.id}`} key={item.id} >
                    <TailButton 
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                    </Link>
                ))
            }

        </div>

    </div>
  );
}
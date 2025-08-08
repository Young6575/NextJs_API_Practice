import React from 'react';
import type { Product } from '@/types/product';
import TailButton from '@/component/TailBox';
import Link from 'next/link';

async function getAllProduct() : Promise<Product[]> {
    
    const res = await fetch('http://localhost:3000/api/products', {
        cache : 'no-store'
    });

    if (!res.ok) {
        throw new Error('fetch Error');
    }
    return res.json();
}

export default async function allProducts() {
    
    const products = await getAllProduct();
    console.log(products);
    

  return (
    
    <div>
        <div className='flex justify-between'>
            <div className='text-3xl font-bold'>상품목록</div>
            <Link href={"/"}>
            <div className='flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                홈으로
            </div>
            </Link>
        </div>
        <div className='grid grid-cols-4 gap-2 '>
            {
                products.map(item => (
                    <Link href={`/product/${item.id}`} key={item.id} >
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
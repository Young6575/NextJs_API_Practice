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
            <div>상품목록</div>
            <div>홈으로</div>
        </div>
        <div className='flex '>
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
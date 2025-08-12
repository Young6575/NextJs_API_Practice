import TailBoxc from '@/component/ProductDetailBox';
import type { Product } from '@/types/product';
import React from 'react';

async function getIdProduct(id: string) : Promise<Product> {
    
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        cache : 'no-store'
    });

    if (!res.ok) {
        throw new Error('fetch Error');
    }
    console.log(res);
    return res.json();
}


export default async function ProductId({params} : {params : Promise<{id : string}>}) {
    const {id} = await params;

    const product : Product  = await getIdProduct(id);

    return (
    <div>
        {product && <TailBoxc 
            key={product.id}
            product={product}
        />}
    </div>
  );
}
import TailBoxc from '@/component/ProductDetailBox';
import type { Product } from '@/types/product';
import React from 'react';

// async function getIdProduct(id: string) : Promise<Product> {
//     const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
//     const res = await fetch(`${baseUrl}/api/products/${id}`, {
//         cache : 'no-store'
//     });

//     if (!res.ok) {
//         throw new Error('fetch Error');
//     }
//     console.log(res);
//     return res.json();
// }

async function getIdProduct(id : string) : Promise<Product> {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const resp = await fetch(`${baseUrl}/api/products/${id}`, {cache:'no-store'});
        const data = await resp.json();
        return data;
}


export default async function ProductId({params} : {params : {id : string}}) {
    const {id} = params;
 
    const product = await getIdProduct(id);
    

    return (
    <div className=' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
        {product && <TailBoxc 
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
        />}
    </div>
  );
}
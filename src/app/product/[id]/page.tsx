import TailBox from '@/component/TailBox';
import { Product } from '@/types/product';
import React from 'react';
interface ProductIdProps {
    params : {
        id : string
    }
}

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


export default async function ProductId({params} : ProductIdProps) {
    const {id} =  params;

    const product = await getIdProduct(id);

    return (
    <div>
        <TailBox 
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            subt={"처음으로"}
        />
    </div>
  );
}
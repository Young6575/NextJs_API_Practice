import TailBoxc from '@/component/ProductDetailBox';
import { supabase } from '@/lib/supabase/client';
import type { Product } from '@/types/product';
import React from 'react';

async function getIdProduct(id: string) : Promise<Product> {
    
    const {data : product, error} = await supabase
    .from('products')
    .select('*')
    .eq('id',id)
    .single()

    return product
}


export default async function ProductId({params} : {params : Promise<{id : string}>}) {
    const {id} = await params;

    const product : Product  = await getIdProduct(id);

    return (
    <div>
        {product.id && 
        <TailBoxc 
            key={product.id}
            product={product}
        />}
    </div>
  );
}
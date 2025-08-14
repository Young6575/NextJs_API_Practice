import React from 'react';
import { supabase } from '@/lib/supabase/client';


export default async function HelloId({params} : {params : Promise<{id : string}>} ) {
  const {id} = await params 

  const {data, error} = await supabase
  .from('products')
  .select('*')
  .eq('id',id)
  .single()
  
    return (
    <div className='h-full flex justify-center items-center'>
      id : {data.id}<br/>
      상품명 :{data.name}<br/>
      가격 : {data.price}<br/>
      설명 : {data.description}

    </div>
  );
}
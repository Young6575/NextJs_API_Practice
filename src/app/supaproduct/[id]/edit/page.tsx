
import React from 'react';
import ProductForm from '../../ProductForm';
import Link from 'next/link';
import { Product } from '@/types/product';
import { supabase } from '@/lib/supabase/client';

async function getIdProduct(id : string) : Promise<Product> {
  const {data : product, error} = await supabase
  .from('products')
  .select('*')
  .eq('id',id)
  .single()
  
  if (error) {
    return {
    id: '',
    name: '',
    category: '',
    price: 0,
    description: ''
    }
  }

  return product
}



export default async function EditProduct({params} : {params : Promise<{id : string}>}) {
  
  const {id} = await params;
  const product = await getIdProduct(id);

  
  return (
    <div className="container mx-auto min-h-screen p-5 bg-gray-50">
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-4xl font-bold text-gray-800">상품수정</h1>
    <div>
      <Link
        href="/product"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        상품목록으로
      </Link>
    </div>
  </div>

  <ProductForm product={product} />
</div>
  );
}
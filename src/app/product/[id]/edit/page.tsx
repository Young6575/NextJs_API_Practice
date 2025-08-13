
import React from 'react';
import ProductForm from '../../ProductForm';
import Link from 'next/link';

async function getIdProduct(id : string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const resp = await fetch(`${baseUrl}/api/products/${id}`, {cache: 'no-store'});
  return resp.json();
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
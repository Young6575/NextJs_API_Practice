import React from 'react';
import ProductForm from '../ProductForm';
import Link from 'next/link';

export default async function NewProduct() {
  return (
    <div className="container mx-auto min-h-screen p-5 bg-gray-50">
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-4xl font-bold text-gray-800">상품추가</h1>
    <div>
      <Link
        href="/product"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        상품목록으로
      </Link>
    </div>
  </div>

  <ProductForm />
</div>
  );
}
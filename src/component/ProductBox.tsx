'use client'
import Link from 'next/link';
import React from 'react';
import type { Product } from '@/types/product';

interface TailButtonProps {
product : Product
}

export default function TailButton({product} : TailButtonProps) {
  return (            
                
     <div className=' bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        <div className='flex justify-between'>
            <div className='font-bold'>{product.name}</div>
            
            
        </div>
        <div className='text-xs'>{product.description}</div>
        <div className='text-xl text-right text-blue-400 '>{product.price}원</div>
    </div>
                
  );    
}
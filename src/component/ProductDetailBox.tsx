'use client'
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import type { Product } from '@/types/product';
import { supabase } from '@/lib/supabase/client';

interface TailButtonProps {
    product : Product
}

export default function TailButtonc({product} : TailButtonProps) {
    const router = useRouter();
    const id = product.id;

    const Handeldelete = async () => {

        const {data,error} = await supabase
        .from('products')
        .delete()
        .eq('id',id)


        if (error) {
             alert(`삭제오류 : ${error.message || '알 수 없는 오류'}`)
        }

        else {
            alert("정상적으로 삭제되었습니다.");
            router.push('/supaproduct');
            router.refresh();
        }

        // if (confirm("삭제하시겠습니까?")) {
        //     const resp = await supabase
        //     .from('products')
        //     .delete
        //     .eq('id',id)


        //     if (resp.ok) {
        //         alert("정상적으로 삭제되었습니다.");
        //         router.push('/product');
        //         router.refresh();
        //     }
        //     else {
        //         const data = await resp.json();
        //         alert(`삭제오류 : ${data.message || '알 수 없는 오류'}`)
        //     }
        // }
    }

  return (            
                
     <div className=' bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        <div className='flex justify-between'>
            <div className='font-bold'>{product.name}</div>
        
    
            <div className='grid grid-cols-3 gap-2'>
                <Link href={`/supaproduct/${product.id}/edit`}
                    className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>
                    수정하기
                </Link>

                <button className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'
                 onClick={Handeldelete}>
                    삭제하기
                </button>

                <Link href={"/supaproduct"}
                    className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                    처음으로
                </Link>
            </div>

        </div>
        <div className='text-xs'>{product.description}</div>
        <div className='text-xl text-right text-blue-400 '>{product.price}원</div>
    </div>
                
  );    
}
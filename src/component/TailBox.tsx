import Link from 'next/link';
import React from 'react';
interface TailButtonProps {
    name : string,
    description : string,
    price : number
    subt? : string
}

export default async function TailButton({name,description,price,subt} : TailButtonProps) {
  return (            
                
     <div className=' bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        <div className='flex justify-between'>
            <div className='font-bold'>{name}</div>
            {subt && <Link href={"/product"}>
            <div className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                {subt}
            </div>
            </Link>
            }
        </div>
        <div className='text-xs'>{description}</div>
        <div className='text-xl text-right text-blue-400 '>{price}원</div>
    </div>
                
  );    
}
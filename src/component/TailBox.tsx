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
                
                     <div className='border-1'>
                        <div>{name}</div>
                        <div>{description}</div>
                        <div>{price}</div>
                    </div>
                
  );    
}
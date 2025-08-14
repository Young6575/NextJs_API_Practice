'use client'
import { Product } from '@/types/product';
import React, { useActionState } from 'react';
import SubmitButton from './SubmitButton';
import { createProductAction, updateProductAction } from '../action';
import type { FormStatus } from '../action';

interface ProductFormProps {
    product? : Product
}

export default function ProductForm({product} : ProductFormProps) {
  
    const isEditMode = product != null;

    //useActionstate 설정
    const actionUse = isEditMode ? updateProductAction : createProductAction;
    const initState : FormStatus = { message : ''};
    const [state,formAction] = useActionState(actionUse, initState);
  
    return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-left'>{isEditMode ? `상품 [${product.id} : ${product.name}]`
                                                : '상품추가'}
        </div>
        
        <form className='grid grid-cols-4 gap-3 w-9/10 border border-gray-300'
                action={formAction}>
           {isEditMode && <input type='hidden' name='id' value={product.id}></input>}
           <div className='flex flex-col'>
                <label htmlFor="name" className='block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white'>상품이름</label>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    defaultValue={isEditMode ? product.name : ''}
                    className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'>
                </input>
           </div>

            <div className='flex flex-col'>
                <label htmlFor="category" className='block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white'>카테고리</label>
                <input 
                    type='text'
                    id='category'
                    name='category'
                    defaultValue={isEditMode ? product.category : ''}
                    className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'>
                </input>
           </div>

            <div className='flex flex-col'>
                <label htmlFor="price" className='block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white'>상품가격</label>
                <input 
                    type='text'
                    id='price'
                    name='price'
                    defaultValue={isEditMode ? product.price : ''}
                    className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'>
                </input>
           </div>

            <div className='flex flex-col'>
                <label htmlFor="description" className='block mb-2 text-sm font-medium text-center text-gray-900 dark:text-white'>설명</label>
                <input 
                    type='text'
                    id='description'
                    name='description'
                    defaultValue={isEditMode ? product.description : ''}
                    className='shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light'>
                </input>
           </div>
           <div>
                <SubmitButton isEditMode={isEditMode} />
            </div>         

        </form>
    </div>
  );
}
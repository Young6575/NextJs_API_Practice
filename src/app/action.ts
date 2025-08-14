'use server'
import { supabase } from "@/lib/supabase/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; 

export interface FormStatus {
    message : string
}

export async function createProductAction(preState : FormStatus, formData : FormData) : Promise<FormStatus> {
    const name = formData.get('name');
    const category = formData.get('category');
    const price = formData.get('price');
    const description = formData.get('description');

    console.log('createProductAction', name)
    //추가될 자료의 ID 생성
    const newId = Date.now().toString;
    
    await supabase
    .from('products')
    .insert({
        id : newId,
        name,
        category,
        price: parseInt(String(price)),
        description
    });

    revalidatePath("/supaproduct");
    redirect("/supaproduct");
}

export async function updateProductAction(preState : FormStatus, formData : FormData) : Promise<FormStatus> {
    const id = formData.get('id');
    const name = formData.get('name');
    const category = formData.get('category');
    const price = parseInt(String(formData.get('price')?? '0'));
    const description = formData.get('description');

    await supabase
    .from('products')
    .update({name, category, price : price, description})
    .eq('id',id);

    revalidatePath("/supaproduct");
    redirect("/supaproduct");
}

export async function deleteProduct(formData : FormData) {
    const id = formData.get('id') as string;

    await supabase
    .from('products')
    .delete()
    .eq('id',id)

    revalidatePath("/supaproduct");
    redirect("/supaproduct");
}
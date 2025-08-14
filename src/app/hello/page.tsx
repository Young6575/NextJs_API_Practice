import { supabase } from "@/lib/supabase/client";
import type { Product } from "@/types/product";
import Link from "next/link";

export default async function HelloPage() {

  const { data , error} = await supabase
  .from('products')
  .select('*')

  if (error) {
    return <div>Error : {error.message}</div>
  }

  console.log(data);

  return (
    <div className="w-full h-screen
                    flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">
        {data && data.map(item => 
        <Link key={item.id} href={`/hello/${item.id}`}>
        <div key={item.id}>{item.name}</div>
        </Link>)}
      </h1>
    </div>
  );
}
'use client'

import { useEffect, useState } from "react";

type helloT = {
    msg : string
}

export default function HelloPage() {
    const [tdata, setTdata] = useState<helloT[] | null>(null);


    const getFetchData = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const resp = await fetch(`${baseUrl}/api/hello`);
        const data = await resp.json();
        setTdata(data.msg);
    }

    useEffect(()=>{
         getFetchData();
    },[])

  return (
    <div className="w-full h-screen
                    flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">
        {
          tdata && 
          tdata.map(item => <div key={item.msg}>{item.msg}</div>)
        }
      </h1>
    </div>
  );
}
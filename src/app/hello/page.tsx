'use client'

import { useEffect, useState } from "react";

type helloT = {
    msg : string
}

export default function HelloPage() {
    const [tdata, setTdata] = useState<helloT[] | null>(null);

    const getFetchData = async () => {
        const resp = await fetch('http://localhost:3000/api/hello');
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
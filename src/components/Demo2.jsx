import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {
  
    const[y,setY] = useState(20);
    let x = 10;

    const ref = useRef(0);

    console.log("rendering...")

    const i = useRef(null);  
    useEffect(()=>{
     i.current = setInterval(() => {
        console.log("Nmaste YT",Math.floor(Math.random()*10) )
    }, 2000); 
    return ()=> clearInterval(i.current)
    },[]);

  return (
    <div className='h-96 w-96 m-4 p-3 bg-slate-100 border border-black'>
       <div>
        <button className='bg-blue-400 rounded-lg p-2 ' onClick={()=>{x = x+1 ; console.log(x)}}>Increase +</button>
        <span><h1 className='text-xl font-bold p-4'>Let = {x}</h1></span>
       </div>
       <div>
        <button className='bg-blue-400 rounded-lg p-2 ' onClick={()=>{setY(y+1)}}>Increase +</button>
        <span><h1 className='text-xl font-bold p-4'>State = {y}</h1></span>
       </div>
       <div>
        <button className='bg-blue-400 rounded-lg p-2 ' onClick={()=>{ ref.current += 1;
            console.log("Ref =", ref.current)}}>Increase +</button>
        <span><h1 className='text-xl font-bold p-4'>Ref = {ref.current}</h1></span>
       </div>
       <button className='bg-red-800 text-white p-2 font-bold rounded-lg'onClick={()=>{clearInterval(i.current)}}>Stop</button>
    </div>
  )
}

export default Demo2;
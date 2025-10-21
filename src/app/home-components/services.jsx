'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Summary = () => {
  
// Font import
useEffect(() => {
    const link = document.createElement('link');
    link.href =
        'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Quicksand:wght@300..700&display=swap" rel="stylesheet';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}, []);



  return (
    <div className="py-16 px-6 mt-20 bg-[radial-gradient(circle_at_center,_#fff3e3,_#e5caa5)]">
    
    
            <h1 className="text-4xl font-bold text-center mb-8 text-black"
            style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700
        }}>
       OUR SERVICES
        </h1>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 items-center"
      style={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 300
        }}>
      {/* Text block */}

     

<div className="bg-radial 
 flex justify-center p-5 rounded-2xl ">
  <div className="text-center bg-[#4d1207] rounded-2xl">
    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mt-4 mb-6 shadow-xl">
    <Image
      src="/icons/scorpion.png"
      alt="icon"
      width={100}
      height={100}
    />
    </div>
    <h1 className="text-white text-2xl mb-3 pl-5 pr-5">COMMERCIAL PEST CONTROL</h1>
  </div>
</div>

<div className="bg-radial 
 flex justify-center p-5 rounded-2xl ">
  <div className="text-center bg-[#000000]/70 rounded-2xl">
    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mt-4 mb-6 shadow-xl">
    <Image
      src="/icons/scorpion.png"
      alt="icon"
      width={100}
      height={100}
    />
    </div>
    <h1 className="text-white text-2xl mb-3 pl-5 pr-5">COMMERCIAL PEST CONTROL</h1>
  </div>
</div>

<div className="bg-radial 
 flex justify-center p-5 rounded-2xl ">
  <div className="text-center bg-[#4d1207] rounded-2xl">
    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mt-4 mb-6 shadow-xl">
    <Image
      src="/icons/scorpion.png"
      alt="icon"
      width={100}
      height={100}
    />
    </div>
    <h1 className="text-white text-2xl mb-3 pl-5 pr-5">COMMERCIAL PEST CONTROL</h1>
  </div>
</div>






    </div>
       <h1 className="text-2xl font-bold text-center mb-8 text-black"
            style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700
        }}>
    AND MANY MORE!
    </h1>
    </div>
  );
};

export default Summary;

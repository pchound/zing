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
      





      <div
        className="max-w-4xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center"
        style={{
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 300,
        }}
      >
        {/* Box 1 */}
        <div className="bg-radial flex justify-center p-0 rounded-2xl">
          <div className="
            w-[400px] h-[215px]
            sm:w-[400px] sm:h-[215px]
            md:w-[400px] md:h-[215px]
            text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
          ">

            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/scorpion2.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
                PEST FREE GUARANTEE
            </h1>
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-radial flex justify-center p-0 rounded-2xl">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/free.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              FREE RESERVICE
            </h1>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-radial flex justify-center p-0 rounded-2xl">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/home.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              HOME PEST CONTROL
            </h1>
          </div>
        </div>


       

      </div>




            <h1 className="text-2xl font-bold text-center mb-8 text-black mt-15"
            style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700
        }}>
           <Link href="/services" className="px-3 py-2 text-lg text-black hover:text-red-700 hover:bg-gray-300 rounded">AND MANY MORE!</Link>
       
        </h1>

      
    </div>
  );
};

export default Summary;

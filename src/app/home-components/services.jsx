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
    <div className="py-16 px-6 mt-20">
            <h1 className="text-4xl font-bold text-center mb-8 text-black"
            style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700
        }}>
       At Zing Pest,
        </h1>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Text block */}

     

<div className="flex justify-center">
  <Image
    src="/home-pest3.jpg"
    alt="Pest Control Man"
    width={1000}
    height={1000}
    className="rounded-xl shadow-xl"
  />
</div>
        <div className="md:col-span-2">
          <p className="text-lg text-black mb-4">
          we are dedicated to providing top-notch pest control services to ensure your home and business remain pest-free. With years of experience in the industry, our team of licensed professionals utilizes the latest techniques and eco-friendly solutions to effectively eliminate pests while prioritizing the safety of your family and pets.
          </p>
        </div>

    </div>
    </div>
  );
};

export default Summary;

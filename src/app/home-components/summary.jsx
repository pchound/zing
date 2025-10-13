'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Summary = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_center,_#f5deb3,_#f5f5dc)] py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Text block */}

      <div className=''>
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
       At Zing Pest,
        </h1>
        <p className="text-black "> 
  
        <br />
        we firmly believe that exceptional customer service extends
        beyond mere satisfaction; it encompasses building trust and maintaining
        open, honest communication with our clients. We prioritize your peace of
        mind by thoroughly explaining our methods, addressing any concerns, and
        providing you with practical tips to prevent future infestations. We value
        your feedback and are always ready to go the extra mile to ensure your
        complete satisfaction. Our family-owned business is built on a foundation
        of integrity, professionalism, and a genuine passion for creating
        pest-free environments. Contact Zing Pest today, and let us show you why
        we have become the go-to choice for quality services and excellent
        customer care in our community. Trust us with your pest control needs, and
        we'll prove that we are not just exterminators but trusted partners in
        safeguarding your home.
        </p>
      </div>

<div className="w-[600px]">
  <Image
    src="/home-pest3.jpg"
    alt="Pest Control Man"
    width={500}
    height={0} // ignored, but required syntactically
    className="h-auto w-full rounded-xl shadow-xl"
  />
</div>


    </div>
    </div>
  );
};

export default Summary;

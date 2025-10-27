'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ServicesIntro = () => {
 return (
    
      


<div className="relative bg-[url('/background6.jpg')] bg-cover bg-center pt-20 pb-20">
    <h1 className="text-5xl text-center drop-shadow-[0_0_10px_rgba(0,0,0,1)] text-white"
    
    style={{
    fontFamily: '"Anton", sans-serif',
    fontWeight: 500
}}>
        Our Services
    </h1>

    <p className="text-center mt-5 text-white text-2xl"
    style={{
    fontFamily: '"Quicksand", sans-serif',
    fontWeight: 300
}}>
        No matter the pest, we have a solution tailored for you.
    </p>


    <p className="text-center mt-5 text-white text-2xl"
    style={{
    fontFamily: '"Quicksand", sans-serif',
    fontWeight: 300
}}>

        Call us today:
            <Link href="tel:17252423555" className=" text-center block px-3 py-2 text-lg rounded bg-[#801815] text-white hover:bg-[#a12626] w-40 mx-auto mt-3">
                (725) 242-3555
            </Link>
    </p>

</div>

    
    
  );
};

export default ServicesIntro;

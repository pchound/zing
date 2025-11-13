'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Summary = () => {
    useEffect(() => {
        AOS.init({ once: false });
    }, []);

  return (
    <div className="py-16 px-6">

      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Text block */}

     

<div className="flex justify-center">
  <Image
    src="/scorpion2.jpg"
    alt="Pest Control Man"
    width={300}
    height={300}
    className=""
  />
</div>

    <div className="md:col-span-2"  >
      <div data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-5xl font-bold mb-20 text-black"
            style={{
            fontFamily: '"Anton", sans-serif',
            fontWeight: 700
        }}>
       As a family owned business, we offer:
        </h1>
        </div>


<div data-aos="fade-up" data-aos-duration="800">
         <h1 className="text-3xl font-bold mb-3 text-black" 
            style={{
            fontFamily: '"Anton", sans-serif',
            fontWeight: 700
        }}>
       Custom solutions
        </h1>       

        <p className="text-lg text-black mb-4"
        style={{
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 400
      }}>
          We understand that every home and business is unique. That's why we tailor our pest control contact to meet your specific needs, ensuring effective and lasting results.
        </p>
</div>



<div data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-3xl font-bold mb-3 text-black"
            style={{
            fontFamily: '"Anton", sans-serif',
            fontWeight: 700
        }}>
       Long term protection
        </h1>       

        <p className="text-lg text-black mb-4"
        style={{
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 400
      }}>
          Our goal is not just to eliminate pests but to prevent future infestations. We provide ongoing maintenance plans and advice to keep your property pest-free year-round.
        </p>
</div>



<div data-aos="fade-up" data-aos-duration="800">
        <h1 className="text-3xl font-bold mb-3 text-black"
            style={{
            fontFamily: '"Anton", sans-serif',
            fontWeight: 700
        }}>
       Fast response times
        </h1>       

        <p className="text-lg text-black mb-4"
        style={{
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 400
      }}>
          We know that pest problems require immediate attention. Our team is committed to responding quickly to your service requests, minimizing the impact on your home or business.
        </p>
</div>
          

    </div>

    </div>
    </div>
  );
};

export default Summary;

'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Quicksand:wght@300;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="py-10 px-4">
      <h1
        className="text-4xl font-bold text-center text-white mb-8"
        style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 700,
        }}
      >
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
          <div className="w-150 h-55 text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between  shadow-xl">
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
          <div className="w-150 h-55 text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between  shadow-xl">
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
          <div className="w-150 h-55 text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between  shadow-xl">
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


                <div className="bg-radial flex justify-center p-0 rounded-2xl">
          <div className="w-150 h-55 text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between  shadow-xl">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/interior.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              INTERIOR HOME SERVICES
            </h1>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Services;

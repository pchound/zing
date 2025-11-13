'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
      useEffect(() => {
        AOS.init({ once: false });
    }, []);
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
        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
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
        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
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
        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
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


        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
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

        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/garage.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              GARAGE SERVICE
            </h1>
          </div>
        </div>

        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/mouse.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              RODENT ABATEMENT
            </h1>
          </div>
        </div>


        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/spider-web.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              SPIDER WEB REMOVAL
            </h1>
          </div>
        </div>

        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/hornet.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              HORNET/WASP CONTROL
            </h1>
          </div>
        </div>


        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/cockroach.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              ROACH CONTROL
            </h1>
          </div>
        </div>

        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/ant.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              ANT INFESTATIONS
            </h1>
          </div>
        </div>

        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
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
              SCORPION CONTROL
            </h1>
          </div>
        </div>
        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/pest-inspection.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              PEST INSPECTION
            </h1>
          </div>
        </div>

        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/custom.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              CUSTOMIZED HOME PEST SOLUTION
            </h1>
          </div>
        </div>

        <div className="bg-radial flex justify-center p-0 rounded-2xl" data-aos="fade-up" data-aos-duration="800">
          <div className="
  w-[400px] h-[215px]
  sm:w-[400px] sm:h-[215px]
  md:w-[400px] md:h-[215px]
  text-center bg-[#4d1207] rounded-2xl flex flex-col items-center justify-between shadow-xl
">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mt-6 mb-5 shadow-lg">
              <Image
                src="/icons/broom.jpg"
                alt="Commercial Pest Control"
                width={80}
                height={80}
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <h1 className="text-white text-2xl px-2 text-center leading-tight mb-3">
              EAVE SWEEPING
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

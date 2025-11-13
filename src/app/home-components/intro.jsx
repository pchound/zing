'use client';
import Image from 'next/image';
import Link from 'next/link';


const Intro = () => {
  return (
    
      <div className="pb-[130px] md:pb-[50px]">


        <div className="relative bg-[url('/background5.jpg')] bg-cover bg-center h-screen">

            <h1 className="text-6xl lg:text-8xl text-center pt-60  drop-shadow-[0_0_10px_rgba(0,0,0,1)] text-white"
            
            style={{
            fontFamily: '"Anton", sans-serif',
            fontWeight: 500
        }}>
                  Professional Pest Control
            </h1>

            <h1 className="text-4xl text-center mt-5 drop-shadow-[0_0_10px_rgba(0,0,0,1)] text-white"
             style={{
            fontFamily: '"Anton", sans-serif',
            fontWeight: 400
        }}>
                  Family owned and operated
            </h1>




<div className="flex justify-center">
  <Link
    href="/contact"
    className="text-center px-3 py-2 mt-5 text-2xl rounded-xl bg-[#801815] text-white hover:bg-[#a12626] border-2 border-black"
    style={{
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 400
    }}
  >
    Get a free quote today!
  </Link>
</div>



          {/* Wavy divider at the bottom */}
          <svg
            className="absolute -bottom-[1px] left-0 w-full block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="white"
              fillOpacity="1"
              d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,160C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    
    
  );
}

export default Intro;
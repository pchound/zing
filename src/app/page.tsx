import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='bg-black'>
        <div className="relative bg-[url('/background2.jpg')] bg-cover bg-center h-screen">
          <div

            className="flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="Zing Pest"
              width={400}
              height={400}
              className="mt-10"
            />
          </div>

            <h1 className="md:text-8xl text-center mt-20 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
                  Professional Pest Control
            </h1>

            <h1 className="md:text-2xl text-center mt-5 drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
                  Family owned and operated
            </h1>

          {/* Wavy divider at the bottom */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="black"
              fillOpacity="1"
              d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,160C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
        
      </div>
   
    </main>
  );
}

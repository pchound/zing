'use client';
import Image from 'next/image';

const Home = () => {
  return (
    
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

            <h1 className="text-5xl text-center mt-20 drop-shadow-[0_0_10px_rgba(0,0,0,1)] text-white">
                  Professional Pest Control
            </h1>

            <h1 className="text-2xl text-center mt-5 drop-shadow-[0_0_10px_rgba(0,0,0,1)] text-white">
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
        <p className="text-white px-7 sm:mx-10 ">
          As a family-owned business, we understand the significance of providing not only effective solutions for all your pest-related concerns but also fostering long-lasting relationships with our valued clients. Our dedicated team of experienced technicians takes pride in their unwavering commitment to quality service. Armed with the latest industry knowledge and state-of-the-art equipment, they expertly assess, diagnose, and implement customized pest management plans tailored to your specific needs. From the initial inspection to the final eradication of those unwanted guests, we ensure thoroughness and attention to detail throughout the entire process.
          <br></br><br></br>At Zing Pest, we firmly believe that exceptional customer service extends beyond mere satisfaction; it encompasses building trust and maintaining open, honest communication with our clients. We prioritize your peace of mind by thoroughly explaining our methods, addressing any concerns, and providing you with practical tips to prevent future infestations. We value your feedback and are always ready to go the extra mile to ensure your complete satisfaction.
          Our family-owned business is built on a foundation of integrity, professionalism, and a genuine passion for creating pest-free environments. Contact Zing Pest today, and let us show you why we have become the go-to choice for quality services and excellent customer care in our community. Trust us with your pest control needs, and we'll prove that we are not just exterminators but trusted partners in safeguarding your home.
        </p>
      </div>
    
    
  );
}

export default Home;
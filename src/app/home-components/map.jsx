'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Map = () => {
  // Fix the font link tag
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Anton&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Quicksand:wght@300..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="bg-[#ffffff]">
    <div className="py-5 px-0 mt-20 ">
  
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-0 items-center ">
        {/* Map */}
        <div className="md:col-span-2  overflow-hidden shadow-xl h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126061.64876249727!2d-115.19784598108505!3d36.2311133838764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x27b0ecfc7f460e13%3A0x42de5b06a01bd9ba!2sZing%20Pest%20Control!5e0!3m2!1sen!2sus!4v1760558049205!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      <div
  className="bg-[#923a34] flex  items-center p-4 shadow-xl h-[450px] "
>
  <h1 className="text-5xl font-bold text-white leading-normal"
              style={{
              fontFamily: '"Anton", sans-serif',
              fontWeight: 300
          }}>
    We cover the Las Vegas Valley and surrounding areas!
  </h1>

  <br /><br />


</div>



      </div>
    </div>
    </div>
  );
};

export default Map;

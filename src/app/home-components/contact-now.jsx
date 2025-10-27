   {/* Background section */}
      <div className="relative bg-[url('/home-pest.jpg')] bg-cover bg-center h-screen">
        {/* Wavy divider at the top */}
        <svg
          className="absolute top-0 left-0 w-full rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,192L60,165.3C120,139,240,85,360,85.3C480,85,600,139,720,160C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L0,320Z"
          ></path>
        </svg>

        {/* Centered text and button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-30">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-[0_0_10px_rgba(0,0,0,1)] text-white px-4">
            Your pest-free home is right here!
          </h1>

          <Link
            href="/contact"
            className="mt-8 px-6 py-3 bg-[#801815] text-white text-xl rounded hover:bg-[#a12626] transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/100 to-transparent"></div>
      </div>
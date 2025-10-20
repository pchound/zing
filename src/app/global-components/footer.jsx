import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="bg-[#f3f4f6] shadow-inner mt-10 pt-10"
      style={{ fontFamily: "Quicksand, sans-serif", fontWeight: 400 }}
    >

        <div className="flex justify-center items-center gap-2 mb-3">
            <Image src="/icons/phone.png" alt="Phone Icon" width={20} height={20} className="mt-[3px]" />
            <h1 className="text-black text-1xl">(725) 242-3555</h1>
        </div>

        <div className="flex justify-center items-center gap-2 mb-3">
            <Image src="/icons/email.png" alt="Email Icon" width={20} height={20} className="mb-[10px]" />
            <h1 className="text-black text-center text-1xl mb-3">info@zingpest.com</h1>
        </div>


      <p className="text-black text-center">
        &copy; {currentYear} All rights reserved
      </p>
      <br />
    </div>
  );
};
export default Footer;

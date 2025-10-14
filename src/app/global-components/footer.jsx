import Image from "next/image";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return(
        <div>
        <Image
          src="/phone.png"
          alt="Phone Icon"
          width={30}
          height={30}
          className="inline-block"
        />
            <h1 className="text-black text-center text-2xl mt-30 mb-3">(725) 242-3555 </h1>
            <h1 className="text-black text-center text-2xl mb-10">info@Zingpest.com</h1>
            <p className="text-black text-center "> &copy; {currentYear} All rights reserved</p><br></br>
        </div>
    )
}
export default Footer;
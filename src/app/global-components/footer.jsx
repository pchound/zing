const Footer = () => {

    const currentYear = new Date().getFullYear();
    return(
        <div>
            <h1 className="text-white text-center text-2xl mt-30 mb-3">(725) 242-3555 </h1>
            <h1 className="text-white text-center text-2xl mb-10">info@Zingpest.com</h1>
            <p className="text-white text-center "> &copy; {currentYear} All rights reserved</p><br></br>
        </div>
    )
}
export default Footer;
'use client';
import Header from '../global-components/header';
import ServicesIntro from '../services/services-intro';
import Services from '../services/services';
import Footer from '../global-components/footer';





export default function Page(){
  return(
<main className="bg-white
">
  <div className="">
    <Header />
    <ServicesIntro />
    <Services />
    <Footer />
  </div>
</main>

   );
}
import Header from './global-components/header';
import Home from './home-components/home';
import Footer from './global-components/footer';

export default function Page(){
  return(
<main>
  <div className='bg-black'>
  <Header />
   <Home />
   <Footer />
   </div>
   </main>
   );
}
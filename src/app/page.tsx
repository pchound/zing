import Header from './global-components/header';
import Intro from './home-components/intro';
import Summary from './home-components/summary';
import ReviewSlideshow from './home-components/review-slideshow';
import Footer from './global-components/footer';


import { REVIEWS } from './home-components/reviews';

export default function Page(){
  return(
<main>
  <div className='bg-white'>

    
    <Header />
    <Intro />
    <ReviewSlideshow reviews={REVIEWS} />
    <Summary />
    
    <Footer />
  </div>
   </main>
   );
}
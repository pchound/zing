import Header from './global-components/header';
import Intro from './home-components/intro';
import Summary from './home-components/summary';
import Map from './home-components/map';
import ReviewSlideshow from './home-components/review-slideshow';
import { REVIEWS } from './home-components/reviews';
import Footer from './global-components/footer';




export default function Page(){
  return(
<main>
  <div className='bg-white'>

    
    <Header />
    <Intro />

    <div className="-mt-30 z-10">
      <ReviewSlideshow reviews={REVIEWS} />
    </div>

    {/* <Summary /> */}
    <Map />
    <Footer />
  </div>
   </main>
   );
}
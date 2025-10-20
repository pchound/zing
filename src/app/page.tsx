import Header from './global-components/header';
import Intro from './home-components/intro';
import Summary from './home-components/summary';
import Map from './home-components/map';
import ReviewSlideshow from './home-components/review-slideshow';
import { REVIEWS } from './home-components/reviews';
import Services from './home-components/services';
import Footer from './global-components/footer';




export default function Page(){
  return(
<main className="bg-white
">
  <div className="">
    <Header />
    <Intro />
    <div className="-mt-40 mb-10 relative z-1">
      <Summary />
    </div>
    <ReviewSlideshow reviews={REVIEWS} />
    <Map />
    <Services />
    <Footer />
  </div>
</main>

   );
}
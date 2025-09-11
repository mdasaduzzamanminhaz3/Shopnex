

import CarouselSlide from '../components/Carousel/CarouselSlide';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import DiscountSection from '../components/Discount/DiscountSection';
import Features from '../components/Features';
import Products from '../components/Products/Products';

const Home = () => {
    return (
        <div>
        <HeroCarousel/>
        <Features/>
        <Products/>
        <DiscountSection/>
        </div>
    );
};

export default Home;
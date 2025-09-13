import banner from "../../../assets/images/banner-image-bg-1.jpg"
import bannerImg from "../../../assets/images/banner-image3.png"
import DiscountTimer from "./DiscountTimer";
const DiscountSection = () => {
    return (
        <section className="w-full h-[600px] bg-cover bg-center flex justify-center items-center px-4 md:px-8" style={{backgroundImage:`url(${banner})`}}>
        <div className="container w-full  flex flex-col md:flex-row items-center justify-between px-4 md:px-8">

            {/* Left image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img className="max-w-full md:max-w-md dropshadow-lg" src={bannerImg} alt="" />
            </div>
            {/* Right content */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 mb-6">30% Discount on All Items. Hurry Up !!!</h1>
                {/* CountDown timer */}
                <DiscountTimer/>
                <button className='btn btn-secondary px-6 py-3 rounded-full shadow-md'>Shop Collection</button>
            </div>


        </div>
        </section>
    );
};

export default DiscountSection;
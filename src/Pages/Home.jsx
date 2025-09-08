import Navbar from '../Components/Navbar';
import Hero from  '../Components/Hero';
import FeaturedProductsSection from '../Components/Featured';
import About from '../Components/About';
import ServicesSection from '../Components/Services'
import TestimonialSection from '../Components/Testimonials';
import GetInvolvedSection from '../Components/GetInvolvedSection';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';
const Home = () => {
    return(
        <>
                <Navbar/>
                <Hero/>
                <FeaturedProductsSection/>
                <About/>
                <ServicesSection/>
                <TestimonialSection/>
                <GetInvolvedSection/>
                <ContactSection/>
                <Footer/>
        </>
    )
}
export default Home;
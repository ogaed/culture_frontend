import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Invest from "./Invest";
import Opportunity from "./Opportunity";
import Testimonials from "./Testimonials";


const Farm = ()=>{
     return(
          <>
              <Hero/>
              <Opportunity/>
              <Invest/>
              <HowItWorks/>
              <Testimonials/>
              <section className="farm-invest w-105 html">
            <h2 className="farm-invest__title">The future of <span>Farm Investing</span> is Orchard</h2>
            <a href="#" className="btn btn__farm--invest">Invest Now</a>

        </section>
          
          </>
     )
}

export default Farm
import HeroImg from '../../../images/landing/hero.png'

const Hero = () => {
  return (
     <section className="hero">
     <div className="hero__content">
         <div className="hero__text">
             <h1 className="hero__title">A New Way to Invest in Agriculture</h1>
             <p className="hero__description">
                 Orchard provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.
             </p>
             <a href="#" className="btn btn__hero">İnvest Now</a>
         </div>
         <div className="hero__img">
             <img src={HeroImg} alt=""/>
         </div>
     </div>
 </section>
  )
}

export default Hero
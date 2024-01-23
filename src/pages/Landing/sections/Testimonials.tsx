import QouteImg from '../../../images/landing/quote.svg'
import Profile from '../../../images/landing/profile.png'



const Testimonials=()=>{
return(
     <section className="testimonials">
     <div className="testimonials__content">
         <div className="testimonials__head w-105">
             <img src={QouteImg} className="testimonials__quote"/>
             <h2 className="testimonials__title">What investors like you are saying about Orchard</h2>
         </div>
         <div className="testimonials__body">
             <div className="testimonials__list">
                 <div className="testimonial">
                     <div className="testimonial__profile">
                         <div className="testimonial__img">
                             <img src={Profile} alt="Testimonial"/>
                         </div>
                         <div className="testimonial__info">
                             <h4 className="testimonial__name"> Roy Mbera</h4>
                             <h4 className="testimonial__title">Telecommunication Engineer</h4>
                         </div>
                     </div>
                     <p className="testimonial__description">
                         “ Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, “
                     </p>
                 </div>
                 <div className="testimonial">
                     <div className="testimonial__profile">
                         <div className="testimonial__img">
                             <img src={Profile} alt="Testimonial"/>
                         </div>
                         <div className="testimonial__info">
                             <h4 className="testimonial__name"> Edith Oga</h4>
                             <h4 className="testimonial__title">Head of Agrogofund Groups</h4>
                         </div>
                     </div>
                     <p className="testimonial__description">
                         “ Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, “
                     </p>
                 </div>
                 <div className="testimonial">
                     <div className="testimonial__profile">
                         <div className="testimonial__img">
                             <img src={Profile} alt="Testimonial"/>
                         </div>
                         <div className="testimonial__info">
                             <h4 className="testimonial__name"> Brian Omondi</h4>
                             <h4 className="testimonial__title">Software Engineer</h4>
                         </div>
                     </div>
                     <p className="testimonial__description">
                         “ At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium “
                     </p>
                 </div>
                 <div className="testimonial">
                     <div className="testimonial__profile">
                         <div className="testimonial__img">
                             <img src={Profile} alt="Testimonial"/>
                         </div>
                         <div className="testimonial__info">
                             <h4 className="testimonial__name"> Ruth Mayenga</h4>
                             <h4 className="testimonial__title">Head of Agrogofund Groups</h4>
                         </div>
                     </div>
                     <p className="testimonial__description">
                         “ Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, “
                     </p>
                 </div>
             </div>
         </div>
         <div className="testimonials__footer  w-105">
             <div className="testimonials__directions">
                 <button className="btn__testimonials btn__testimonials__prev disable">
                     <i className="fa fa-chevron-left"></i>
                 </button>
                 <button className="btn__testimonials btn__testimonials__next">
                     <i className="fa fa-chevron-right"></i>
                 </button>
             </div>
         </div>
     </div>
 </section>
)
}

export default Testimonials
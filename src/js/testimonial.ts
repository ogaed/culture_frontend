const testimonials = (): void=>{
     const testimonialsSection = document.querySelector('.testimonials__content') as HTMLElement;
     const testimonialContainer = testimonialsSection.querySelector('.testimonials__list') as HTMLElement;
     const nextBtn = testimonialsSection.querySelector('.btn__testimonials__next') as HTMLElement;
     const prevBtn = testimonialsSection.querySelector('.btn__testimonials__prev') as HTMLElement;
     
     const testimonials = testimonialContainer.querySelectorAll('.testimonial') as NodeListOf<HTMLElement>;
     let testimonialsWidth: number, testimonialWidth: number;
     let testimonialIndex = 0;
     const gridGap = 25;
     let limit = getLimit();
     
     window.addEventListener("resize", () => {
         limit = getLimit();
     });
     checkLimitForBtnStatus();
     nextBtn.addEventListener('click', moveToNextSlide);
     prevBtn.addEventListener('click', moveToPrevSlide);
     
     function moveToNextSlide() {
         if (!isContinue({ direction: true })) return;
         testimonialIndex++;
         testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`;
         testimonialContainer.style.transition = ".7s";
     }
     
     function moveToPrevSlide() {
         if (!isContinue({ direction: false })) return;
         testimonialIndex--;
         testimonialContainer.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`;
         testimonialContainer.style.transition = ".7s";
     }
     
     const isContinue = (args: { direction: boolean }): boolean => {
         if (args.direction) {
             if (testimonialIndex < limit) {
                 checkTestimonialFinish(args.direction, nextBtn, prevBtn);
                 return true;
             } else {
                 updateBtnStatus(nextBtn, true);
                 updateBtnStatusByLimit(prevBtn);
                 return false;
             }
         } else {
             if (testimonialIndex > 0) {
                 checkTestimonialFinish(args.direction, prevBtn, nextBtn);
                 return true;
             } else {
                 updateBtnStatus(prevBtn, true);
                 updateBtnStatusByLimit(nextBtn);
                 return false;
             }
         }
     };
     
     function getElementsWidth(): [number, number] {
         return [testimonialContainer.clientWidth, testimonials[testimonialIndex].clientWidth + gridGap];
     }
     
     function getLimit(): number {
         [testimonialsWidth, testimonialWidth] = getElementsWidth();
         const testimonialCountPerWrap = testimonialsWidth / testimonialWidth;
         return Math.round(testimonials.length - testimonialCountPerWrap);
     }
     
     function checkLimitForBtnStatus(): void {
         if (limit === 0) {
             nextBtn.classList.add('disable');
         }
     }
     
     function updateBtnStatus(btn: HTMLElement, status: boolean): void {
         if (status) {
             btn.classList.add('disable');
         } else {
             btn.classList.remove('disable');
         }
     }
     
     function checkTestimonialFinish(direction: boolean, btn1: HTMLElement, btn2: HTMLElement): void {
         const status = direction ? (testimonialIndex + 1 < limit) : (testimonialIndex - 1 > 0);
         if (status) {
             updateBtnStatus(btn1, false);
         } else {
             updateBtnStatus(btn1, true);
         }
         updateBtnStatus(btn2, false);
     }
     
     function updateBtnStatusByLimit(btn: HTMLElement): void {
         if (limit !== 0) {
             updateBtnStatus(btn, false);
         }
     }
     
}
export default testimonials
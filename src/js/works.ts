const works =(): void=>{
     const worksSection = document.querySelector('.works__content') as HTMLElement;
     const progressbar = worksSection.querySelector('.form_progressbar') as HTMLElement;
     const progressbarSteps = progressbar.querySelectorAll('.progressbar__step') as NodeListOf<HTMLElement>;
     const firstStep = worksSection.querySelector('.first_step') as HTMLElement;
     
     progressbar.addEventListener('click', (event) => {
         if (event.target && event.target.nodeName == "LI") {
             const dataStep = event.target.getAttribute('data-step');
             if (dataStep) {
                 for (let index = Number(dataStep) - 1; index < progressbarSteps.length; index++) {
                     progressbarSteps[index].classList.remove('active');
                 }
                 for (let index = Number(dataStep) - 1; index > 0; index--) {
                     progressbarSteps[index].classList.add('active');
                 }
                 event.target.classList.add('active');
                 firstStep.style.marginLeft = `-${(Number(dataStep) - 1) * 100}%`;
             }
         }
     });
     
}
export default works


const navigation = (): void=>{
/* Navigation Menu */
     const nav = document.querySelector('.header__nav__content') as HTMLElement;
     const hamburger_menu = document.querySelector('.hamburger-menu-wrap') as HTMLElement;
     const close_icon = document.querySelector('.nav-close-icon') as HTMLElement;
 
     hamburger_menu.addEventListener('click', (event) => {
         nav.classList.add('open');
     });
 
     close_icon.addEventListener('click', (event) => {
         nav.classList.remove('open');
     });
 
}

export default navigation
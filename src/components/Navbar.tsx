
import { NavLink } from "react-router-dom"
import Logo from "../images/logo/logo_green.png"

const Navbar = () => {
  return (
 <div className="header">
    <nav className="header__nav w-120 html body">
        <div className="header__logo">
        <img src={Logo} alt="Logo" />
        </div>
        <div className="header__nav__content">
            <div className="nav-close-icon"></div>
            <ul className="header__menu">
                <li className="menu__item">
                    <a href="#" className="menu__link active">Home</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Product</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Team</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Blog</a>
                </li>
                <li className="menu__item">
                    <a href="#" className="menu__link">Contact</a>
                </li>
            </ul>
            <div className="header__signup">
                <NavLink to='auth/signin' className="btn header__signup btn__signup">
                    <i className="fas fa-user-plus"></i> Login
                </NavLink>
            </div>
        </div>

        <div className="hamburger-menu-wrap">
            <div className="hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar
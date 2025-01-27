import { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
      <header>
        
        <div id="navbar-page">
          <div className="click-craft">
           <Link to={'/'}> <img src="/Wonderchat.png" alt="click craft logo" /></Link>
          </div>
          <nav>
            <Link to={'/'}>Home</Link>
            <Link to="portfolios">Portfolios</Link>
            <Link to="community">Community</Link>
            <Link to="aboutUs">About Us</Link>
          </nav>
          <img src='/public/hamburger.svg' className="hamburger-menu-open" onClick={toggleMenu} />
          <div className="sign-button">
           <Link to="signIn"> <button className='sign-in'>SignIn</button></Link>
           <Link to="signUp"> <button className="sign-up">SignUp </button></Link>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="hamburger-menu-wrapper">
          <div className="overlay" onClick={toggleMenu}></div>
          <div className="mobile-nav-wrapper">
            <nav className="mobile-nav">
              <a href="#">Home</a>
              <a href="#">Portfolios</a>
              <a href="#">Community</a>
              <a href="#">About Us</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

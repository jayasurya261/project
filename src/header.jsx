import "./style.css";
import logo from "./images/logo.webp.png";
import call from "./images/call.png";
import mail from "./images/mail.png";
import verticalLine from "./images/Vertical-Line.png";
import instagram from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import more from "./images/more.png";
import Menu from "./menu";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} className="header-logo"/>
        <img src={call} className="header-call hide-on-mobile" />
        <p className="header-contact hide-on-mobile">+91 9443092162</p>
        <img src={mail} className="header-mail hide-on-mobile" />
        <p className="header-contact hide-on-mobile">
          arab_cuisine@gmail.com
        </p>
        <p className="header-timing hide-on-mobile">
          Mon-Sat :9:30am-1:00pm | 4:30pm-8:00pm.
        </p>
        <img src={verticalLine} className="header-line hide-on-mobile" />
        <a href="#" className="header-link hide-on-mobile">
          <img src={instagram} />
        </a>
        <a href="#" className="header-link hide-on-mobile">
          <img src={whatsapp} />
        </a>
        <button className="header-menu" onClick="ShowSideBar()">
          <img src={more} />
        </button>
      </div>
      <nav class="header-nav">
        <ul class="header-sidebar">
            <li onClick="hideSideBar()"><a><img src="images/close.png" style={{width: '20px', height: '20px'}}/></a></li>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">HEALTH</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">REVIEWS</a></li>
        </ul>
    </nav>
    <div class="navigation hide-on-mobile">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">HEALTH</a>
        <a href="#">GALLERY</a>
        <a href="#">MENU</a>
        <a href="#">CONTACT</a>
        <a href="#">REVIEWS</a>
    </div>
    </>
  );
};
export default Header;

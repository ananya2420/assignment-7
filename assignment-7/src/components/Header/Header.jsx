
import { assets } from '../../assets/assets';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <div className="image-container">
          <img src={assets.header_img} alt="" />
          <div className="text-overlay">
            <h2>
              Discover an exceptional cooking <br />
              class tailored for you!
            </h2>
            <p>
              Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding
              problems to become an exceptionally well world-class Programmer
            </p>
            <div className="button-container">
              <a href="#explore-menu" className="button-link">
                <button className="buttonwl">Explore now</button>
              </a>
              <button>Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
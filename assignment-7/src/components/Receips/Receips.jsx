import { assets } from '../../assets/assets';
import './Receips.css';

const Receips = () => {
  return (
    <div className="lasted-post text-center">
      <h2 className="text-3xl">Our Receips</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget <br />
        urna volutpat curabitur elementum mauris aenean neque.
      </p>

    
      <div className="recipe-item">
        <img src={assets.logo} alt="" />
        <h2>Spaghetti Bolognese</h2>
        <p>Classic Italian pasta dish with savory meat sauce.</p>
        <div className="ingredients">
          <h2>Ingredients: 6</h2>
          <p>500g ground beef</p>
          <p>1 onion, chopped</p>
          <p>2 cloves garlic, minced</p>
        </div>
        <div>
          <p>30 minutes</p>
          <p>600 calories</p>
          <button>want to cook</button>
        </div>
      </div>

     
    </div>
  );
};

export default Receips;

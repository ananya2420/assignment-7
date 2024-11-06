import { assets } from '../../assets/assets';
import './Chicken.css';

const Chicken = () => {
    return (
      <div className="recipe-item">
        <img src={assets.logo} alt="" />
        <h2>Chicken Caesar Salad</h2>
          <p>Classic salad with grilled chicken, romaine lettuce, and Caesar dressing.</p>
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
      
        
     
    )
  }
  
  export default Chicken
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Reecipe Calories</h1>
        <div>
            <ul>
            <li><a>Home</a></li>
            <li><a>Receips</a></li>
            <li><a>About</a></li>
           <li><a>Search</a></li>
            </ul>
        </div>
        <div className="search-wrapper">
            <label className="search">Search</label>
            <input type="search" id="search"/>
        </div>
      
    </div>
  )
}

export default Navbar

import Chicken from "./components/Chicken/Chicken"
import CookingStatus from "./components/CookingStatus/CookingStatus"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Receips from "./components/Receips/Receips"



const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Receips />
      <Chicken />
      <CookingStatus />
      
      
    </div>
  )
}

export default App


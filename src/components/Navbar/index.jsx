import { Link } from "react-router-dom"


const Navbar = () => {
  return (
   <div id="navbar">
   <Link to="/">
        Home
      </Link>
      <Link to="/newcar">
        New Car Regestration
      </Link>
      
      <Link to="/allcars">
        All Cars
      </Link>
      
      <Link to="/singlecar">
        Single Car
      </Link>
   
   </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch ,FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
            <Link to = '/'>e-SHOP</Link>
        </div>
        <div>
            <form>
                <input type="text" placeholder='Search Product' />
                <FaSearch />
            </form>
        </div>  
        <div>
            <Link to={'/cart'}>
            <FaShoppingCart />
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

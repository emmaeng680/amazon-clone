import React from 'react'
import "./Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";


const Header = () => {
     const [{basket}, dispatch] = useStateValue();

  return (
      <div className="header">
          <Link to="/">
          <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
          </Link>

          <div className="header__search">
              <input className='header__searchInput' type="text" />
              <SearchOutlinedIcon className="header__searchIcon" />
          </div>

          <div className="header__nav">
              <Link to='/login'>
              <div className="header__option">
                  <span className="header__optionLineOne">
                      Hello Guest
                  </span>

                  <span className="header__optionLineTwo">
                      Sign In
                  </span>
              </div>
              </Link>

               <div className="header__option">
                  <span className="header__optionLineOne">
                      Returns
                  </span>

                  <span className="header__optionLineTwo">
                      & Orders
                  </span>
              </div>

               <div className="header__option">
                  <span className="header__optionLineOne">
                      Your
                  </span>

                  <span className="header__optionLineTwo">
                      Prime
                  </span>
              </div>

              <Link to="/checkout">
              <div className="header__optionBasket">
                  <ShoppingBasketOutlinedIcon />
                  <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
              </div>
              </Link>
          </div>
      </div>
  )
}

export default Header
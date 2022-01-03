import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../React-Context-Api/StateProvider'

const Header = () => {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className='header'>
      <Link to='/'>
        <img
          src='https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png'
          alt=''
          className='header__logo'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon'></SearchIcon>
      </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Zino</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon className='header__optionBasket'></ShoppingBasketIcon>
            <span className='header__optionLineTwo header__optionBasketCount'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header

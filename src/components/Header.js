import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from '../images/header.jpg'

const Header = () => {
  return (
      <header className="re-navbar">
        <Link to="/">
          <img src={HeaderImage} alt="Royal Enfield Header"/>
        </Link>
      </header>
  )
}

export default Header

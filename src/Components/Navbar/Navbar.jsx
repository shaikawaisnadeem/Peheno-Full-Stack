import React, { useState } from 'react';
import './Navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import WomenNavbar from '../WomenNavbar/WomenNavbar';
import MenNavbar from '../MenNavbar/MenNavbar';
import CollectionCards from '../CollectonCards/CollectonCards';
import AboutAnd from '../About/About';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  return (
    <>
      <div className='navbar'>
        <div className='laptopView'>
          <NavLink
            to="/women"
            onClick={() => toggleDropdown('women')}
            className={({ isActive }) => isActive ? 'active' : 'link women'}
          >
            Women
          </NavLink>
          <NavLink
            to="/men"
            onClick={() => toggleDropdown('men')}
            className={({ isActive }) => isActive ? 'active' : 'link men'}
          >
            Men
          </NavLink>
          <NavLink
            to="/collections"
            onClick={() => toggleDropdown('collections')}
            className={({ isActive }) => isActive ? 'active' : 'link collection'}
          >
            Collections
          </NavLink>
          <NavLink
            to="/company"
            onClick={() => toggleDropdown('company')}
            className={({ isActive }) => isActive ? 'active' : 'link company'}
          >
            Company
          </NavLink>
        </div>

        <div className='hamburgerMobile'>
          <RxHamburgerMenu className='hamburgerIcon' />
          <h2>Peheno</h2>
        </div>

        <div className='laptop'>
          <h2>Peheno</h2>
        </div>

        <div className='rightNavbar'>
          <IoIosSearch className='searchIcon' />
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : 'link'}>
            Cart (0)
          </NavLink>
        </div>
      </div>

      {openDropdown === 'women' && <WomenNavbar />}
      {openDropdown === 'men' && <MenNavbar />}
      {openDropdown === 'collections' && <CollectionCards />}
      {openDropdown === 'company' && <AboutAnd />}
    </>
  );
}

export default Navbar;

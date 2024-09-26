import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    id: 'home',
    link: '/',
    name: 'Home',
    childMenus: []
  },
  {
    id: 'about-us',
    link: '/about-us',
    name: 'About Us',
    childMenus: []
  },
  {
    id: 'services',
    link: '/services',
    name: 'Services',
    childMenus: []
  },
  {
    id: 'portfolio',
    link: '/portfolio',
    name: 'Portfolio',
    childMenus: []
  },
  {
    id: 'contact-us',
    link: '/contact-us',
    name: 'Contact Us',
    childMenus: []
  }
];

const Menus = () => {
  return (
    <nav className="menu-wrapper">
      {menuItems?.map(menu => (
        <div className="menu-item" key={menu?.id}>
          <NavLink to={menu?.link}>{menu.name}</NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Menus;

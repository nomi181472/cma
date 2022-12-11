import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        M&amp;A Construction Company
        
      </div>
      <div className="flex mt-4 sm:mt-0">
        
        <AnchorLink className="px-4" href="#about">
          ABOUT
        </AnchorLink>

        <AnchorLink className="px-4" href="#services">
         SERVICES
        </AnchorLink>
        <AnchorLink className="px-4" href="#contact-us">
          CONTACT US
        </AnchorLink>
        <AnchorLink className="px-4" href="#career">
          CAREERS
        </AnchorLink>
      </div>

    </div>
  </header>
);

export default Header;

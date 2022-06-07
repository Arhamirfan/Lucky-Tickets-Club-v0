import React from 'react';
import Lp from './navdown';
import Lpp from './navdownd';
import Threecontact from './threecontact';
import Undercontact from './undercontact';
import Underwehelp from './underwehelp';
import Service from './service';
import Footer from './footer';
import Naav from './naav';

import './header.css'

    document.body.className += " js-loading";

      // Listen for when everything has loaded
      window.addEventListener("load", showPage, false);

      function showPage() {
        // Remove the "js-paused" class
        document.body.className = document.body.className.replace("js-loading","");
      }
const Header =()=> {
    return(
        <>
<Naav/>
  <Lp/>
  <Lpp/>
<Footer/>


  </>
    );
}

export default Header;
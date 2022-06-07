import React, { useState } from 'react';
import './footer.css'
import {footer} from './menuitem';
import { Button } from './button';
// Detect request animation frame

 

// Call the loop for the first time


// Helper function from: http://stackoverflow.com/a/7557433/274826

 


const Footer =()=> {
  

    return(
        <>
        <div className='footer'>
        



   
   <div class='ti'>
    <h1 className='titlerr'>JOIN OUR PLATFORMS</h1>
    <div className='bud'>
    <button className='bu1'><a className='fab fa-twitter'></a><p>TWITTER</p></button>
    <button className='bu2'></button>
    <button className='bu3'></button>
    </div>
    <p>Join our Discord and Twitter for inquiries, questions and updates.</p>
    </div>
</div>
                         
                

       
         
  </>
    );
}

export default Footer;
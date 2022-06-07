import React, { useState } from 'react';
import './service.css'
import {service} from './menuitem';

// Detect request animation frame

 

// Call the loop for the first time


// Helper function from: http://stackoverflow.com/a/7557433/274826

 


const Service =()=> {
  
    const elementsToShow = document.getElementsByClassName('show-on-scroll'); 



    window.addEventListener('scroll', function() {
  Array.prototype.forEach.call(elementsToShow,function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
      
    } else {
      element.classList.remove('is-visible');
    }
  });

});
   
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

    return(
        <>
        <div className='full'>
            <p className='abouttt'>Our Service</p>
           <h1 className='happyy  show-on-scroll'>Health  Services 
               <strong className='black'>We  Provided</strong></h1>
               <div className='ser'>
              { service.map((name)=>{
   return  (
          <div className='service show-on-scroll'>
              <i class={name.cimg} id='img'></i>
              <p className='titlees' id='titlees'>{name.title}</p>
               <p className='textt' id='textt'>{name.text}</p>
              </div>

   )
                 
})}
</div>

        </div>
         
  </>
    );
}

export default Service;
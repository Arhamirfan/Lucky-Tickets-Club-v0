import React from 'react';

import './threecontact.css';
import { threecontact } from './menuitem';
const Threecontact = () => {
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
    return (
        <>
        <div className='three show-on-scroll'>
         {threecontact.map((item,index)=>{
                return(
                    <div key={index}  className='threee'>
                      <div className='inn'>
                        <div className='img' id='id'> 
                        <i className={item.cimg}></i>
                        </div>
                        <div className='con'>
                        <p className='title'  id='title'>{item.title}</p>
                        <h3 className='contact' id='contact'>{item.contact}</h3>
                        </div>
                        </div>
                       
                </div>
                )
                })}
            </div>
        </>
    );
   
}

export default Threecontact;
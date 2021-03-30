import React from 'react'

import image1 from '../Asset/insta.svg'
import image2 from '../Asset/one.svg'
import image3 from '../Asset/two.svg'
import Email from './email'



const Footer = () => {
    

    return(
        <>
        <div className='footer'>
          
         <div className="foot-email">
             <Email/>
         </div>
         <div className="foot">
             <div className="company">
                 <h2>startup</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus harum omnis fuga facere voluptatem enim modi eveniet maxime a beatae?</p>
             </div>
             <div className="meet">
                 <h5>Meet STARTUP</h5>
                 <ul>
                     <li>About</li>
                     <li>contact</li>
                     <li>carrers</li>
                     <li>explore</li>
                 </ul>
             </div>
         <div className="social">
             <img src={image2} alt="facebook"/>
             <img src={image1} alt=" instagram"/>
             <img src={image3} alt="twitter"/>
         </div>
         </div>
        </div>
        </>
    )
}
export default Footer
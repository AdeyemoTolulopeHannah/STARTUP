import React from 'react'
import {Link} from 'react-router-dom'



const Landing =() => {
    return(
        <>
       
        <div className='landing'>
             <div className='overlay'>
                <h1>start your business  with us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati</p>
                <Link className='read' to='/about'>Read more</Link>
             </div>
        </div>
        </>
    )
}
export default Landing
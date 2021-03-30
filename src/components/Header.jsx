import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <>
        <div className='header'>
        <Link className='logo' to='/'>Startup</Link>
            <ul>
                <Link className='links' to='/about'>About</Link>
                 <Link className='links' to='/service'>Service</Link>
                 <Link className='links' to='/contact'>Contact</Link>
            </ul>
        </div>
        </>
    )
}
export default Header
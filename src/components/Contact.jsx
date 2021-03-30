import React from 'react'
import image1 from '../Asset/m.svg'
import image2 from '../Asset/mm.svg'
import image3 from '../Asset/mmm.svg'


const Contact = () => {
    return(
        <>
        <div className="contact">
            <div className="info">
                <h3>contact us</h3>
                <h5><img src={image3} alt=""/> 51, More close, Somewhere in the world</h5>
                <h5><img src={image2} alt=""/> startup@gmail.com</h5>
                <h5><img src={image1} alt=""/> +234 000 000 000</h5>
            </div>
            <div className="touch">
                <h1>get in touch</h1>
                <form action="#">
                <input type="text" placeholder='Your Name' required/>
                <input type="Email" placeholder='Email' required/>
                <textarea type="text" placeholder='Message' maxLength='70' required/>
                <button className='read'>submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact
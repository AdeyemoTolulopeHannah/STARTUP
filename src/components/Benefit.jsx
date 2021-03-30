import React from 'react'
import image1 from '../Asset/image1.jpg'
import image2 from '../Asset/image2.jpg'
import image3 from '../Asset/image4.jpg'

const Benefit = () => {
    return(
        <>
        <div className='benefit'>
            <div className='title'>
              <h1>welcome to business startup</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit suscipit laudantium magnam? Accusantium quidem minus similique natus sit et?</p>

            </div>
            <div className='benefitlist'>
                <div className='one'>
                    <img src={image1} alt="consultation"/>
                    <i>01</i>
                    <h3>Business Consulting</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur incidunt dolore sequi inventore nostrum voluptates corporis voluptate ipsum id!</p>
                </div>
                <div className='one'>
                    <img src={image2} alt=" marketing"/>
                    <i>02</i>
                    <h3>Marketing Analysis</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur incidunt dolore sequi inventore nostrum voluptates corporis voluptate ipsum id!</p>
                </div>
                <div className='one'>
                    <img src={image3} alt="planning"/>
                    <i>03</i>
                    <h3>Financial Planning</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur incidunt dolore sequi inventore nostrum voluptates corporis voluptate ipsum id!</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Benefit
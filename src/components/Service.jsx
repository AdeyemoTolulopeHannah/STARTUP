import React from 'react'
import image1 from '../Asset/image5.svg'
import image2 from '../Asset/image6.svg'
import image3 from '../Asset/image7.svg'
import image4 from '../Asset/money.svg'


const Service = () => {
    return(
        <>
        <div className='service'>
            <h1>What We Do?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos omnis fuga aspernatur voluptatem hic totam.</p>
            <i className='line'></i>
            <div className='servicelist'>
               <div className='list1'>
               <img src={image4} alt='image' />
               <h3>Marketing Intelligence</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime necessitatibus dignissimos aspernatur, odit laboriosam id reprehenderit provident aperiam repellat error!</p>
               <button className='read'>Read more</button>
               </div>
               <div className='list1'>
               <img src={image2}  alt='image'/>
               <h3>Marketing Intelligence</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime necessitatibus dignissimos aspernatur, odit laboriosam id reprehenderit provident aperiam repellat error!</p>
               <button className='read'>Read more</button>
               </div>
               
               <div className='list1'>
               <img src={image1}  alt='image'/>
               <h3>Marketing Intelligence</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime necessitatibus dignissimos aspernatur, odit laboriosam id reprehenderit provident aperiam repellat error!</p>
               <button className='read'>Read more</button>
               </div>
            </div>

        </div>
            </>
    )
}
export default Service
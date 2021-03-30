import React from 'react'
import image1 from '../Asset/abt.jpg'
import image2 from '../Asset/ab.jpg'
import image3 from '../Asset/a.jpg'


const About = () => {
    return(
        <>
        <div className="about">
            <div className="vision">
                <div className="text">
                <h1>our vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem laborum soluta, consectetur nisi dolorem temporibus ipsum mollitia maxime sit amet saepe a error commodi sunt, veniam ex eos labore voluptatum minus molestias. Velit autem reiciendis, necessitatibus qui numquam, ut voluptatibus non nostrum praesentium quasi nisi voluptatem consequatur! Iusto, repellendus.</p>
                </div>
                <img src={image1} alt=""/>
            </div>
            <div className="approach">
            <div className="text">
                <h1>our approach</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem laborum soluta, consectetur nisi dolorem temporibus ipsum mollitia maxime sit amet saepe a error commodi sunt, veniam ex eos labore voluptatum minus molestias. Velit autem reiciendis, necessitatibus qui numquam, ut voluptatibus non nostrum praesentium quasi nisi voluptatem consequatur! Iusto, repellendus.</p>
                </div>
                <img src={image3} alt="approach"/>
            </div>
            <div className="process">
            <div className="text">
                <h1>our process</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem laborum soluta, consectetur nisi dolorem temporibus ipsum mollitia maxime sit amet saepe a error commodi sunt, veniam ex eos labore voluptatum minus molestias. Velit autem reiciendis, necessitatibus qui numquam, ut voluptatibus non nostrum praesentium quasi nisi voluptatem consequatur! Iusto, repellendus.</p>
                </div>
                <img src={image2} alt="process"/>
            </div>
        </div>
        </>
    )
}
export default About
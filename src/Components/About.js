import React from 'react';
import "./Components_CSS/About.css"

const About = () => {
    return (
        <section id='about'>
            <div className='textContainer'>
            <div className='aboutText'>
            <p>This app will contain my family's favourite recipes. When you can't decide what to cook, you can come here and pick one of those tasty everyday classics.</p>
            </div>
            <div className='aboutSmallText'>
            <p>- Salla</p>
            </div>
            </div>
        </section>
    );
};

export default About;
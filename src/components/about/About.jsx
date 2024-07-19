import React from 'react';
import "./about.css";

import aboutImg from '../../assets/aboutpic.webp';
import {FiCheck} from 'react-icons/fi';

const About = () => {
    return (
        <section className='about section' id='about'>
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="about" className="about__img" />
                </div>
                
                <div className="about__content">
                    <h2 className="section__title title-left" data-title="About Us">
                    Authentic Indian flavors with freshly brewed coffees and snacks in a cozy, inviting atmosphere.
                    </h2>
                    <p className="about__description">
                    we are passionate about bringing the rich and diverse flavors of India to your daily coffee and snacks. Our mission is to create a unique and delightful experience that blends traditional Indian tastes with modern comfort.
                    </p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck className="about__details-icon" />
                            offer a range of freshly brewed coffees.
                        </p>
                        <p className="about__details-description">
                            <FiCheck className="about__details-icon" />
                            including spiced chai lattes and Madras filter coffee.
                        </p>
                        <p className="about__details-description">
                            <FiCheck className="about__details-icon" />
                            alongside authentic Indian snacks.
                        </p>
                    </div>

                    <a href="#team" className="btn">Our Experts</a>
                </div>
            </div>
        </section>
    );
}

export default About;

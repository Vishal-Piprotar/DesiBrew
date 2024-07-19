import React from 'react';

import chef1 from "../../assets/c-1.png";
import chef2 from "../../assets/c-3.png";
import chef3 from "../../assets/c-2.png";
import chef4 from "../../assets/c-4.png";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import "./team.css";

const Team = () => {
    return (
        <section className='section team' id='team'>
            <h2 className="section__title" data-title="Chefs">
                Meet Our Experts
            </h2>

            <div className="team__grid grid container">
                <div className="team__item">
                    <img src={chef1} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Sanjeev Kapoor</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="team__item">
                    <img src={chef2} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Ranveer Brar</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="team__item">
                    <img src={chef3} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Vikas Khanna</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="team__item">
                    <img src={chef4} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Harpal Singh Sokhi</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;

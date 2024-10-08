import React from 'react';
import "./stats.css";

import coffeeShop from "../../assets/coffee-shop.svg";
import experience from "../../assets/experience.svg";
import coffeeCup from "../../assets/coffee-cup.svg";
import chef from "../../assets/chef.svg";

const Stats = () => {
    return (
        <section className='state section'>
            <div className="stats__grid container grid">
                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={coffeeShop} alt="stats" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">10</p>
                        <h3 className="stats__title">+ Total Branches</h3>
                    </div>
                </div>

                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={coffeeCup} alt="stats" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">350</p>
                        <h3 className="stats__title">+ Happy Customers</h3>
                    </div>
                </div>

                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={chef} alt="stats" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">8</p>
                        <h3 className="stats__title">+ Professional chefs</h3>
                    </div>
                </div>

                <div className="stats__item">
                    <div className="stats__img-wrapper">
                        <img src={experience} alt="stats" className="stats__img" />
                    </div>

                    <div>
                        <p className="stats__no">5</p>
                        <h3 className="stats__title">+ Years Of Experience</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;

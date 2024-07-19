import React from 'react';
import "./choose.css";

import chooseImg from "../../assets/chose.png";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";

const Choose = () => {
    return (
        <section className='choose section'>
            <div className="choose__grid container grid">
                <div className="choose__content">
                    <h2 className="section__title title-left" data-title='Why Choose Us'>
                    Offering a unique blend of authentic Indian flavors and warm hospitality.
                    </h2>
                    <p className="choose__description">
                    our freshly brewed coffees and traditional snacks to our cozy ambiance and friendly service, we strive to create a welcoming space where every visit is a delightful experience of rich taste and cultural authenticity.
                    </p>

                    <div className="choose__details grid">
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeMug} alt="choose" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Awesome Aroma</h3>
                                <p className="choose__details-description">
                                Indulge in the delightful allure of our coffee's captivating aroma, a perfect blend of tradition and excellence that enhances every sip.
                                </p>
                            </div>
                        </div>
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans2} alt="choose" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Pure Grades</h3>
                                <p className="choose__details-description">
                                Experience the essence of uncompromising quality at DesiBrew, where every offering reflects our commitment to excellence and purity, ensuring a taste that's truly exceptional.

                                </p>
                            </div>
                        </div>
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans3} alt="choose" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Healthy Coffee</h3>
                                <p className="choose__details-description">
                                Enjoy guilt-free indulgence at DesiBrew with our health-conscious coffee options, crafted to nourish your body and soul with every flavorful sip.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={chooseImg} alt="choose" className="choose__img" />
            </div>
        </section>
    );
}

export default Choose;

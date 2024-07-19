import React from 'react';
import "./home.css";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="container home__container">
                <div className="home__content">
                    <span className="home__subtitle">Welcome To DesiBrew!</span>
                    <h1 className="home__title">
                    Discover the Rich Flavors of Desi Culture.
                    </h1>
                    <p className="home__description">
                    DesiBrew brings the flavors of India to life with freshly brewed coffees and authentic snacks, creating a cozy and inviting atmosphere to savor traditional tastes with every visit.
                    </p>

                    <div className="home__btns">
                        <a href="#menu" className="btn">Check menu</a>
                        <a href="#reservation" className="btn home__btn">Book Table</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;

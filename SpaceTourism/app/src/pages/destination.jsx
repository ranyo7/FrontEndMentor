import React from "react";
import {Link} from "react-router-dom";

const Destination = () => {
  return (
    <div className="destination">
      <a className="skip-to-content" href="#main">Skip to main content</a>
      <header className="primary-header flex">

        <div>
          <img src="./assets/shared/logo.svg" alt="space tourism log" className="logo" />
        </div>

        <button className="mobile-nav-toggle" aria-controls="primary-navigation" type="button">
          <span className="sr-only" aria-expanded="false"> Menu </span>
        </button>

        <nav>
          <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
            <li><Link to="/home"><span aria-hidden="true">00</span>Home</Link></li>
            <li className="active"><Link to="/destination"><span aria-hidden="true">01</span>Destination</Link></li>
            <li><Link to="/crew"><span aria-hidden="true">02</span>Crew</Link></li>
            <li><Link to="/technology"><span aria-hidden="true">03</span>Technology</Link></li>
          </ul>
        </nav>

      </header>

      <main id="main" className="grid-container flow">

        <h1 className="numbered-title"><span aria-hidden="true">01</span>Pick your destination</h1>
        <picture>
          <source srcset="../assets/destination/image-moon.webp" type="image/webp" />
          <img src="../assets/destination/image-moon.png" alt="the moon" />
        </picture>

        <div className="tab-list underline-indicators flex">
          <button className="tabButton moon" aria-selected="true">Moon</button>
          <button className="tabButton mars" aria-selected="false">Mars</button>
          <button className="tabButton europa" aria-selected="false">Europa</button>
          <button className="tabButton titan" aria-selected="false">Titan</button>
        </div>


        <article className="destination-info">

          <h2 className="fs-800 ff-serif uppercase name">Moon</h2>
          <p className="description">
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help
            regain perspective and come back refreshed. While you’re there, take in some history
            by visiting the Luna 2 and Apollo 11 landing sites.
          </p>

          <div className="destination-meta flex ">
            <div>
              <h3 className="text-light fs-200 uppercase">Avg. distance</h3>
              <p className="ff-serif uppercase distance">384,400 km</p>
            </div>

            <div>
              <h3 className="text-light fs-200 uppercase">Est. travel time</h3>
              <p className="ff-serif uppercase travelLength">3 days</p>
            </div>
          </div>

        </article>

      </main>

    </div>
  );
};

export default Destination;

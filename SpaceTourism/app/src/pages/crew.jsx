import React from "react";
import {Link} from "react-router-dom";

const Crew = () => {
  return (
    <div className="crew">
      <a className="skip-to-content" href="#main">Skip to main content</a>
      <header className="primary-header flex">

        <div>
          <img src="./assets/shared/logo.svg" alt="space tourism log" className="logo"></img>
        </div>

        <button className="mobile-nav-toggle" aria-controls="primary-navigation" >
          <span className="sr-only" aria-expanded="false"> Menu </span>
        </button>

        <nav>
        <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
          <li><Link to="/home"><span aria-hidden="true">00</span>Home</Link></li>
          <li><Link to="/destination"><span aria-hidden="true">01</span>Destination</Link></li>
          <li className="active"><Link to="/crew"><span aria-hidden="true">02</span>Crew</Link></li>
          <li><Link to="/technology"><span aria-hidden="true">03</span>Technology</Link></li>
        </ul>
        </nav>

      </header>

      <main id="main" className="grid-container flow">

        <h1 className="numbered-title"><span aria-hidden="true">02</span>Meet your crew</h1>

        <picture>
          <source srcSet="./assets/crew/image-douglas-hurley.webp" type="image/webp"></source>
          <img src="./assets/crew/image-douglas-hurley.png" alt="the commander"></img>
        </picture>

        <article className="crew-info flow">
          <header className="flow flow--sm">
            <h2 className="fs-600 uppercase ff-serif text-light title">Commander</h2>
            <p className="fs-700 ff-serif uppercase name">Douglas Hurley</p>
          </header>

          <p className="text-light description">
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
            and former NASA astronaut. He launched into space for the third time as
            commander of Crew Dragon Demo-2.
          </p>
        </article>

        <div className="dot-indicators flex">
          <button className="commander" aria-selected="true"><span className="sr-only ">The Commander</span></button>
          <button className="specialist" aria-selected="false"><span className="sr-only ">The Mission Specialist</span></button>
          <button className="pilot" aria-selected="false"><span className="sr-only ">The Pilot</span></button>
          <button className="engineer" aria-selected="false"><span className="sr-only ">The Engineer</span></button>
        </div>

      </main>

    </div>
  );
};

export default Crew;

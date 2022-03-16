import React from "react";
import {Link} from "react-router-dom";

const Technology = () => {
  return (
    <div className="technology">
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
            <li><Link to="/crew"><span aria-hidden="true">02</span>Crew</Link></li>
            <li className="active"><Link to="/technology"><span aria-hidden="true">03</span>Technology</Link></li>
          </ul>
        </nav>

      </header>

      <main id="main" className="grid-container flow">

        <h1 className="numbered-title"><span aria-hidden="true">03</span>Space Launch 101</h1>

        <picture>
          <source media="(min-width: 45em)" srcset="./assets/technology/image-launch-vehicle-portrait.jpg" type="image/jpg" />
          <img className="image" src="./assets/technology/image-launch-vehicle-landscape.jpg" alt="Rocket Launch" />
        </picture>

        <div className="number-indicators flex">
          <button id="launch" aria-selected="true">1</button>
          <button id="spaceport" aria-selected="false">2</button>
          <button id="capsule" aria-selected="false">3</button>
        </div>

        <article className="technology-info">
          <header className="flow flow--sm">
            <h2 className="fs-400 uppercase ff-serif text-light">The terminology...</h2>
            <p className="fs-700 ff-serif uppercase name">Launch Vehicle</p>
          </header>

          <p className="description">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
          payload from Earth's surface to space, usually to Earth orbit or beyond. Our
          WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
          it's quite an awe-inspiring sight on the launch pad!</p>
        </article>

      </main>

    </div>
  );
};

export default Technology;

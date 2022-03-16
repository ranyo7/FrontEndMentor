import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
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
            <li className="active"><Link to="/home"><span aria-hidden="true">00</span>Home</Link></li>
            <li><Link to="/destination"><span aria-hidden="true">01</span>Destination</Link></li>
            <li><Link to="/crew"><span aria-hidden="true">02</span>Crew</Link></li>
            <li><Link to="/technology"><span aria-hidden="true">03</span>Technology</Link></li>
          </ul>
        </nav>

      </header>

      <main id="main" className="grid-container">
        <div>
          <h1 className="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
          <span className="fs-900 ff-serif text-white d-block">Space</span></h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>
        </div>

        <div>
          <a href="./destination.html" className="large-button uppercase">Explore</a>
        </div>
      </main>

    </div>
  );
};

export default Home;

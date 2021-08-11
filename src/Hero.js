import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod explicabo saepe ducimus molestias nesciunt quo corrupti placeat
            ipsum dolore cupiditate, non animi quaerat repellat esse magni
            doloremque incidunt. Doloremque?
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phoneImg" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

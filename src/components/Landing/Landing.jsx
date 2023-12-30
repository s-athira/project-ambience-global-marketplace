import "./Landing.scss";
import landingImg from "../../assets/images/landing-img.svg";

function Landing() {
  return (
    <div className="landing">
      <div className="landing__top">
        <h1 className="landing__title">.ambience</h1>
        <p className="landing__description">
          Discover uniquely crafted building materials from artisans around the
          world. Spice up your space with{" "}
          <strong>Handcrafted Materials Delivery Service</strong>
        </p>
      </div>
      <div className="landing__bottom">
        <section className="landing__more-details">
          <section className="landing__img-container">
            <img src={landingImg} alt="" className="landing__img" />
          </section>
          <p className="landing__detailed-decription">
            Experience the joy of beautiful living spaces with our artistic
            material finishes. Order online and let us deliver, authentic
            materials sourced from around the world, to your doorsteps.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Landing;

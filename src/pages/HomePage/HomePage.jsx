import "./HomePage.scss";
import landingImg from "../../assets/images/landing-img";

function HomePage() {
  return (
    <>
      <div className="landing__top">
        <h1 className="landing__title">.ambience</h1>
        <p className="landing__description">
          Discover uniquely crafted building materials from artisans around the
          world. Spice up your space with Handcrafted Materials Delivery Service
        </p>
      </div>
      <div className="landing__bottom">
        <section className="landing__more-details">
          <img src={landingImg} alt="" className="landing__img" />
          <p className="landing__detailed-decription">
            Experience the joy of beautiful living spaces with our artistic
            material finishes. Order online and let us deliver, authentic
            materials sourced from around the world, to your doorsteps.
          </p>
        </section>
      </div>
    </>
  );
}

export default HomePage;

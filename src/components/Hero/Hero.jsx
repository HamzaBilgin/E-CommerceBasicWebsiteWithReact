import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Son model teknolojiler ile tanış</span>
        <h2>Tüm çeşitleri ile </h2>
        <a href="/">Şimdi Keşfet</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;

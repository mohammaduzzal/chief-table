
const Banner = () => {
    return (
        <div>
           <div
  className="hero h-full md:h-[35rem] mb-10 rounded-2xl"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/xH2WykR/cover.png)",
  }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-3 text-xl md:text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-3">
      Cooking is the art of transforming raw ingredients into delicious meals through creativity and technique. It brings people together, nourishing both the body and soul with flavors and shared experiences.
      </p>
      <button className="btn btn-primary rounded-4xl bg-emerald-400">Explore Now</button>
      <button className="btn btn-primary bg-transparent rounded-4xl hover:bg-emerald-400">Our Feedback</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
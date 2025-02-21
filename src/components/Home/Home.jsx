const Home = () => {

  
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/p6tSKxFN/Map.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
          <p className="mb-5 text-black font-semibold">Visiting place is the best place in the world. I want to visit place. Which is located. Eveyone visit this place to register & login. 
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

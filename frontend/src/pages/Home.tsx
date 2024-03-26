import Hero from "../components/Hero";
import Campaigns from "../components/Campaigns.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="home">
        <div>
          <h1>Live &amp; Recent Campaigns</h1>
          <p className="subtitle">Invest in exciting Australian brands</p>
        </div>
        <Campaigns/>
      </div>
    </>
  );
};

export default Home;

import Hero from "./../../components/Hero/Hero";
import homeBackground from "../../public/images/headers/header-home.png";
import Background from "./../../components/Background/Background";

const Solution = () => {
  return (
    <div>
      <Hero>
        <Background
          src="/images/headers/header-home.png"
          alt="Image de fond accueil de teamdoc"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          className="header__background"
        />
        Solution
      </Hero>
      <div style={{ width: "100%", height: 5000 }}></div>
    </div>
  );
};

export default Solution;

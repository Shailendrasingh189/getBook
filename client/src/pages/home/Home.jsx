import Banner from "./Banner";
import News from "./News";
import Recommened from "./Recommened";
import TopSallers from "./TopSallers";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSallers />
      <Recommened />
      <News />
    </>
  );
};

export default Home;

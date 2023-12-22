import Footer from "../components/Footer";
import Cartegories from "../home/Cartegories";
import FindOutMore from "../home/FindOutMore";
import Home from "../home/Home";
import Jeans from "../home/Jeans";
import MoreFashion from "../home/MoreFashion";
import Tshirts from "../home/Tshirts";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Tshirts />
      <Cartegories />
      <Jeans />
      <FindOutMore />
      <MoreFashion />
      <Footer />
    </div>
  );
};

export default HomePage;

import Cartegories from "../home/Cartegories";
import Home from "../home/Home";
import Jeans from "../home/Jeans";
import Tshirts from "../home/Tshirts";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Tshirts />
      <Cartegories />
      <Jeans />
    </div>
  );
};

export default HomePage;

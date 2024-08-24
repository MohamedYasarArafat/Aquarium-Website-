import Cards from "./cards";
import ImageSlider from "./imageSlider";
import ShoppingItems from "./shopingItems";

const Home = () => {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <div>
          <ImageSlider />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <ShoppingItems />
        </div>
      </div>
    </>
  );
};

export default Home;

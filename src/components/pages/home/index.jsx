import Cards from "./cards";
import ImageSlider from "./imageSlider";
import ShoppingItems from "./shopingItems";
import Video from "./video";
import ClassNames from "./home.module.css";
import FishTankSetup from "./fishTankSetup";

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
        <div className={ClassNames["video-container"]}>
          <Video />
        </div>
        <div>
          <FishTankSetup />
        </div>
      </div>
    </>
  );
};

export default Home;

import Cards from "./cards";
import ImageSlider from "./imageSlider";
import ShoppingItems from "./shopingItems";
import Video from "./video";
import ClassNames from "./home.module.css";
import FishTankSetup from "./fishTankSetup";

const Home = () => {
  return (
    <>
      <div className={ClassNames["home-container"]}>
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
        <div className={ClassNames["fish-tank-info"]}>
          <FishTankSetup />
        </div>
      </div>
    </>
  );
};

export default Home;

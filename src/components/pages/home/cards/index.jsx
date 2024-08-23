import ClassNames from "./cards.module.css";
import FilterImg from "../../../../assets/images/filter.jpg";
import FoodImg from "../../../../assets/images/food.jpg";
import FishImg from "../../../../assets/images/fish.jpg";
import FishTankImg from "../../../../assets/images/fishTank.jpg";
import PlantImg from "../../../../assets/images/plant.jpg";

const Cards = () => {
  return (
    <>
      <div className={ClassNames["card-heading"]}>Top Rated</div>
      <div style={{ display: "flex", marginLeft: "1rem" }}>
        <div className={ClassNames["card"]}>
          <img src={FilterImg} alt="Avatar" style={{ width: "100%" }} />
          <div className={ClassNames["container"]}>
            <h4>
              <b>Filter's</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className={ClassNames["card"]}>
          <img src={FoodImg} alt="Avatar" style={{ width: "100%" }} />
          <div className={ClassNames["container"]}>
            <h4>
              <b>Fish Foods</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className={ClassNames["card"]}>
          <img src={FishImg} alt="Avatar" style={{ width: "100%" }} />
          <div className={ClassNames["container"]}>
            <h4>
              <b>Fish's</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className={ClassNames["card"]}>
          <img src={FishTankImg} alt="Avatar" style={{ width: "100%" }} />
          <div className={ClassNames["container"]}>
            <h4>
              <b>Fish Tank's</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className={ClassNames["card"]}>
          <img src={PlantImg} alt="Avatar" style={{ width: "100%" }} />
          <div className={ClassNames["container"]}>
            <h4>
              <b>Plants's</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

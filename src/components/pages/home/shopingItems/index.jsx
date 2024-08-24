import classNames from "./shopping-item.module.css";
import FilterIcon from "../../../../assets/images/filter.png";
import FishTankIcon from "../../../../assets/images/fishTank.jpg";
import ToyIcon from "../../../../assets/images/reef.png";
import FishIcon from "../../../../assets/images/fish2.jpg";
import ShirmsICon from "../../../../assets/images/shirms.png";
import BoulIcon from "../../../../assets/images/boul.jpg";
import Filter2 from "../../../../assets/images/filter2.jpg";
import FishFoodIcon from "../../../../assets/images/fish-food.png";
import fishfood from "../../../../assets/images/fishfood.png";
import supplementIcon from "../../../../assets/images/supplement.png";
import tool1 from "../../../../assets/images/tool1.png";
import tool2 from "../../../../assets/images/tool2.jpg";
import plant2 from "../../../../assets/images/plant2.png";
import plant3 from "../../../../assets/images/plant3.png";
import Filter4 from "../../../../assets/images/health.png";
import Filter5 from "../../../../assets/images/g1.png";

const ShoppingItems = () => {
  return (
    <>
      <div>
        <div className={classNames["shopping-heading"]}>Start Shopping</div>
        <div>
          <div className={classNames["shopping-items"]}>
            <div className={classNames["shopping-icons-items"]}>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={FilterIcon}></img>
                <img style={{ width: "3rem" }} src={Filter2}></img>
                <div>Aquarium Accessories</div>
              </span>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={FishTankIcon}></img>
                <img style={{ width: "3rem" }} src={BoulIcon}></img>
                <div>Tanks & Fish Bowl</div>
              </span>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={ToyIcon}></img>
                <div>Toys & Decors</div>
              </span>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={FishIcon}></img>
                <img style={{ width: "2rem" }} src={ShirmsICon}></img>
                <div>Fish & shrimps</div>
              </span>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={FishFoodIcon}></img>
                <img style={{ width: "2rem" }} src={fishfood}></img>
                <div>Aquarium Foods</div>
              </span>
            </div>
            <div className={classNames["shopping-icons-items"]}>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={tool1}></img>
                <img style={{ width: "3rem" }} src={tool2}></img>
                <div>Aqua scaping Tools</div>
              </span>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={supplementIcon}></img>
                <div>Remedies & Fertilizers</div>
              </span>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={plant2}></img>
                <img style={{ width: "3rem" }} src={plant3}></img>
                <div>Live Plants & Rocks</div>
              </span>
              <span style={{ marginRight: "2rem" }}>
                <img style={{ width: "4rem" }} src={Filter5}></img>
                <img style={{ width: "3rem" }} src={Filter4}></img>
                <div>Gadgets</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingItems;

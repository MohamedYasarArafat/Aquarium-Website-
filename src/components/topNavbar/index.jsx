import classNames from "./top-nav-bar.module.css";
import Icon from "../../assets/images/icon4.png";
import HomeIcon from "../../assets/images/home.png";
import Trolley from "../../assets/images/trolley.png";
import UserIcon from "../../assets/images/user.png";
import TrackOrder from "../../assets/images/track.png";

const TopNavbar = () => {
  return (
    <>
      <div className={classNames["top-nav-bar-container"]}>
        <div className={classNames["top-nav-bar-img-title"]}>
          <img className={classNames["top-nav-bar-img"]} src={Icon}></img>
          <h4 className={classNames["top-nav-bar-img-title-h4"]}>
            Aquarium Pets
          </h4>
        </div>
        <div className={classNames["top-nav-bar-search"]}>
          <input
            className={classNames["top-nav-bar-search-input"]}
            placeholder="Search Products"
          ></input>
        </div>
        <div className={classNames["top-nav-bar-menu"]}>
          <div className={classNames["top-nav-bar-sub-menu-div"]}>
            <div className={classNames["top-nav-bar-img-div"]}>
              <img
                className={classNames["top-nav-bar-menu-icons"]}
                src={HomeIcon}
              ></img>
            </div>
            <div>Home</div>
          </div>
          <div className={classNames["top-nav-bar-sub-menu-div"]}>
            <div className={classNames["top-nav-bar-img-div"]}>
              <img
                className={classNames["top-nav-bar-menu-icons"]}
                src={UserIcon}
              ></img>
            </div>
            <div>Profile</div>
          </div>
          <div className={classNames["top-nav-bar-sub-menu-div"]}>
            <div className={classNames["top-nav-bar-img-div"]}>
              <img
                className={classNames["top-nav-bar-menu-icons"]}
                src={Trolley}
              ></img>
            </div>
            <div>Cart</div>
          </div>
          <div className={classNames["top-nav-bar-sub-menu-div"]}>
            <div className={classNames["top-nav-bar-img-div"]}>
              <img
                className={classNames["top-nav-bar-menu-icons"]}
                src={TrackOrder}
              ></img>
            </div>
            <div>Track Order</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;

import classNames from "./submenu.module.css";

const Submenu = () => {
  return (
    <>
      <div className={classNames["sub-menu-container"]}>
        <div className={classNames["sub-menu-titile"]}>Home</div>
        <div className={classNames["sub-menu-titile"]}>Shop</div>
        <div className={classNames["sub-menu-titile"]}>Contact us</div>
        <div className={classNames["sub-menu-titile"]}>Shipping policy</div>
        <div className={classNames["sub-menu-titile"]}>Terms & Conditions</div>
        <div className={classNames["sub-menu-titile"]}>Privacy Policy</div>
        <div className={classNames["sub-menu-titile"]}>Disclaimer</div>
        <div className={classNames["sub-menu-titile"]}>About us</div>
      </div>
    </>
  );
};

export default Submenu;

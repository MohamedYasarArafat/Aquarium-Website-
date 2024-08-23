import classNames from "./submenu.module.css";

const Submenu = () => {
  return (
    <>
      <div className={classNames["sub-menu-container"]}>
        <div>Home</div>
        <div>Shop</div>
        <div>Contact us</div>
        <div>Shipping policy</div>
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
        <div>Disclaimer</div>
        <div>About us</div>
      </div>
    </>
  );
};

export default Submenu;

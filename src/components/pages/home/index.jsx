import Cards from "./cards";
import ImageSlider from "./imageSlider";

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
        <div></div>
      </div>
    </>
  );
};

export default Home;

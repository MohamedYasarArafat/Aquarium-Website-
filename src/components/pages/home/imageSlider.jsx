import "./image-slider.css";
import Slide1 from "../../../assets/images/slide1.jpg";
import Slide2 from "../../../assets/images/slide2.jpg";
import Slide3 from "../../../assets/images/slide3.jpg";
import Slide4 from "../../../assets/images/slide4.jpg";
import Slide5 from "../../../assets/images/slide5.jpg";
import Slide6 from "../../../assets/images/slide6.jpg";

const ImageSlider = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* <div style={{ width: "50%" }}>TEST</div> */}
        <div>
          <section className={"slider_container"}>
            <section className={"slider"}>
              <div className={"slide one"}>
                <img src={Slide1} alt="" />

                {/* <span className={"caption"}>slide one</span> */}
              </div>
              <div className={"slide two"}>
                <img src={Slide2} alt="" />
                {/* <span className={"caption"}>slide two</span> */}
              </div>
              <div className={"slide three"}>
                <img src={Slide3} alt="" />
                {/* <span className={"caption"}>slide three</span> */}
              </div>
              <div className={"slide four"}>
                <img src={Slide4} alt="" />
                {/* <span className={"caption"}>slide four</span> */}
              </div>
              <div className={"slide four"}>
                <img src={Slide5} alt="" />
                {/* <span className={"caption"}>slide five</span> */}
              </div>
              <div className={"slide four"}>
                <img src={Slide6} alt="" />
                {/* <span className={"caption"}>slide five</span> */}
              </div>
            </section>
          </section>
        </div>
        {/* <div style={{ width: "50%" }}>TEST</div> */}
      </div>
    </>
  );
};

export default ImageSlider;

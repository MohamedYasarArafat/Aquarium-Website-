import ClassNames from "./video.module.css";
import freshWater from "../../../../assets/images/freshwaterfish.jpg";

const Video = () => {
  return (
    <>
      <div className={ClassNames["video-sub-container"]}>
        <div style={{ width: "50%", padding: "0.5rem" }}>
          <iframe
            width="100%"
            height="350"
            src={
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4?autoplay=1&mute=1"
            }
            allow="autoplay"
            autoplay="1"
          ></iframe>
        </div>
        <div style={{ width: "50%", padding: "0.5rem", display: "flex" }}>
          <div className={ClassNames["video-info"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className={ClassNames["video-info1"]}>
            <img src={freshWater} style={{ width: "14rem" }}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;

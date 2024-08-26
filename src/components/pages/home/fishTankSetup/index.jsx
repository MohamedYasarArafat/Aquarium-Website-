import "./fishtanksetup.css";
import PlantIcon from "../../../../assets/images/pt.jpg";
import BedRoomTank from "../../../../assets/images/brt.jpg";
import TableTank from "../../../../assets/images/tableTank.jpg";
import BedroomPaludarium from "../../../../assets/images/BedroomPaludarium.jpg";
import LivingRoom from "../../../../assets/images/living.jpg";

const FishTankSetup = () => {
  //function declaration
  function openCity(evt, cityName) {
    //variable declaration
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("activetab");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).classList.add("activetab");
    evt.currentTarget.className += " active";
  }

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <div class="tab">
          <button
            class="tablinks active"
            onClick={(e) => {
              openCity(e, "Tab1");
            }}
          >
            Planted Aquarium
          </button>
          <button
            class="tablinks"
            onClick={(e) => {
              openCity(e, "Tab2");
            }}
          >
            Bedroom Tank
          </button>
          <button
            class="tablinks"
            onClick={(e) => {
              openCity(e, "Tab3");
            }}
          >
            Table tank
          </button>
          <button
            class="tablinks"
            onClick={(e) => {
              openCity(e, "Tab4");
            }}
          >
            Bedroom Paludarium
          </button>
          <button
            class="tablinks"
            onClick={(e) => {
              openCity(e, "Tab5");
            }}
          >
            Living room tank
          </button>
        </div>

        <div id="Tab1" class="tabcontent activetab">
          <div className="tab-info-image">
            <div>
              <img
                style={{ width: "30rem", height: "20rem" }}
                src={PlantIcon}
              ></img>
            </div>
            <div className="tab-info-content">
              Planted or natural aquariums contain specially selected aquatic
              plants and fish to closely replicate beautiful underwater
              environments found in nature. Gardeners, teachers, and experienced
              aquarists alike are discovering the many benefits of these
              beautiful aquariums
            </div>
          </div>
        </div>
        <div id="Tab2" class="tabcontent">
          <div className="tab-info-image">
            <div>
              <img
                style={{ width: "30rem", height: "20rem" }}
                src={BedRoomTank}
              ></img>
            </div>
            <div className="tab-info-content">
              One should avoid keeping aquariums in the bedroom or kitchen, as
              it can cause sleep or food-related problems to the occupants of
              the house. Keeping an aquarium in the kitchen may also lead to
              conflicts amongst the family members
            </div>
          </div>
        </div>
        <div id="Tab3" class="tabcontent">
          <div className="tab-info-image">
            <div>
              <img
                style={{ width: "30rem", height: "20rem" }}
                src={TableTank}
              ></img>
            </div>
            <div className="tab-info-content">
              Placing an aquarium in right place in your home or office will
              attract positive energies which help to attract wealth and
              happiness. Yes you can keep aquarium
            </div>
          </div>
        </div>
        <div id="Tab4" class="tabcontent">
          {" "}
          <div className="tab-info-image">
            <div>
              <img
                style={{ width: "30rem", height: "20rem" }}
                src={BedroomPaludarium}
              ></img>
            </div>
            <div className="tab-info-content">
              One should avoid keeping aquariums in the bedroom or kitchen, as
              it can cause sleep or food-related problems to the occupants of
              the house. Keeping an aquarium in the kitchen may also lead to
              conflicts amongst the family members
            </div>
          </div>
        </div>
        <div id="Tab5" class="tabcontent">
          <div className="tab-info-image">
            <div>
              <img
                style={{ width: "30rem", height: "20rem" }}
                src={LivingRoom}
              ></img>
            </div>
            <div className="tab-info-content">
              An aquarium ( PL aquariums or aquaria) is a vivarium of any size
              having at least one transparent side in which aquatic plants or
              animals are kept and displayed. Fishkeepers use aquaria to keep
              fish, invertebrates, amphibians, aquatic reptiles, such as
              turtles, and aquatic plants.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FishTankSetup;

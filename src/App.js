import React from "react";
import Contact from "./components/Contact";
import "./App.css";
import bc from "./images/ComingSoonBg.png";
import logo from "./images/tunesbidlogo.png";
import "./css/main.css";
import "./css/util.css";

function App() {
  return (
    <div>
      <div class="simpleslide100">
        <div
          class="simpleslide100-item bg-img1"
          style={{ backgroundImage: `url(${bc})` }}
        ></div>
      </div>

      <div class="size1 overlay1">
        <div class="size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50">
          <img
            src={logo}
            alt="tunesbid logo"
            width="50%"
            height="50%"
            //style={{ marginTop: "-10px" }}
          />
          <br />
          <h3 class="l1-txt1 txt-center p-b-25">Coming Soon</h3>

          <p class="m2-txt1 txt-center p-b-48">
            Our website is under construction, follow us for update now!
          </p>

          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import gog from "../images/gog.png";
import gp from "../images/gp.png";

function Header() {
  return (
    <>
      <div className="header">
        <header className="flex-row-center">
          <div className="img-holder flex-row-center">
            <div className="header-img">
              <img src={gog} alt="" />
            </div>
            <div className="header-img">
              <img src={gp} alt="" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;

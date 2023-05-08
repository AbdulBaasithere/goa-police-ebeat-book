// This is the footer that will be same for all users

import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer-main flex-row-center">
        <div className="footer-inner">
          <i class="fa-solid fa-bell"></i>
          <div className="other-footer-features">
            <button className="btn btn-primary">Map</button>
            <button className="btn btn-primary">Start</button>
          </div>
        </div>
      </div>
    </>
  );
};

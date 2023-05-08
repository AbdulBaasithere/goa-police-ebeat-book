// This contains the officers personal details, this will remain same for all officers

import React from "react";

export const Personal = () => {
  return (
    <>
      <div className="row personal-details flex-row-center">
        <div className="col col-sm-6 flex-col-center">
          <div className="user-img">
            <i class="fa-regular fa-user"></i>
          </div>
        </div>
        <div className="col col-sm-6 flex-col-center">
          <h4>VINAY SINGH</h4>
          <h4>12Ad341</h4>
          <h4>9090878545</h4>
        </div>
      </div>
    </>
  );
};

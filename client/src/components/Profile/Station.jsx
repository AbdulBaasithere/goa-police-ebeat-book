// This contains officers station details, this will have to be changes according to the job roles of the officer

import React from "react";

export const Station = () => {
  return (
    <>
      <div className="station-details flex-row-center">
        <div>
          <span>Beat Area: 1A</span>
        </div>
        <div>
          <span>Police Station: xyz....</span>
        </div>
        <div>
          <span>
            Police Inspector:
            <ul type="none">
              <li>Anil Rathod</li>
              <li>9087647411</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

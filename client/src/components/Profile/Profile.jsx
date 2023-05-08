import React from "react";
import {Personal} from "./Personal";
import {Station} from "./Station";
import {Features} from "./Features";
import {Footer} from "./Footer";

export const Profile = () => {
  return (
    <>
      <div className="profile-main">
        <Personal></Personal>
        <Station></Station>
        <Features></Features>
        <Footer></Footer>
      </div>
    </>
  );
};

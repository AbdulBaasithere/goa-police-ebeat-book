import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

export const OTP = (props) => {
  const history = useNavigate();
  const [otpdetails, setOtpDetails] = useState({
    phone: "",
    otp: "",
  });

  const params = useParams();
  const {type} = params;

  const handleSubmitt = async (e) => {
    e.preventDefault();

    try {
    const address = "http://localhost:3000/user/" + type +"/verifyotp";
      await axios
        .post(address, {
          otpdetails,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.login);
          if (res.data.isValid === 2) {
            alert("Successfully Logged In!");
            history("/profile/BeatOfficer");
          } else if (res.data.isValid === 1) {
            alert("Successfully Registered!");
            history("/");
          } else if (res.data.isValid === 0) {
            alert("Invlid OTP!");
            history("/user/otp");
          } else if (res.data.isValid === -1) {
            alert("User Does not Exist!");
            history("/signup");
          }
        });
    } catch (error) {}
  };

  const handleFormm = (e) => {
    // console.log(e.target.name + " : " + e.target.value);
    setOtpDetails({
      ...otpdetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex-col-center mt-5">
        {/* <h1>helo {type}</h1> */}
        <form
          className="flex-col-center"
          method="POST"
          onSubmit={handleSubmitt}
        >
          <input
            className="my-2 mt-4"
            type="text"
            value={otpdetails.phone}
            onChange={handleFormm}
            name="phone"
            placeholder="Registerd Phone"
            required
          />
          <input
            className="my-2"
            value={otpdetails.otp}
            onChange={handleFormm}
            name="otp"
            type="text"
            placeholder="OTP"
            required
          />
          <button className="my-2 btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

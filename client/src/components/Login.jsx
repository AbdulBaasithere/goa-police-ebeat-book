import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();

  // const [police_id, setPoliceId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3000/user/login", {
          password,
          phone,
        })
        .then((res) => {
          console.log(res);

          if(res.data.isValid){
            // alert("Successfully Logged in!")
            history("/user/otp/login");
          if(res.data.isToken){
            history("/profile/BeatOfficer")
          }
          }else{
            alert("Invalid Credentials")
            history("/")
          }
        })
        .catch((e) => {
          // alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="login-main flex-col-center">
        <div className="login-inner-content flex-col-center">
          <h1>EBeat Login</h1>
          <form action="post">
            {/* <div class="input-group mb-3">
              <input
                value={police_id}
                onChange={(e) => setPoliceId(e.target.value)}
                type="text"
                class="form-control"
                placeholder="User ID"
                aria-label="UserID"
                aria-describedby="basic-addon1"
              />
            </div> */}

            <div class="input-group mb-3">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                class="form-control"
                placeholder="Phone No"
                aria-label="Phone"
                aria-describedby="basic-addon1"
              />
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="pword"
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-labelledby="passwordHelpBlock"
              placeholder="Password"
            />
            <button
              type="submit"
              onClick={submit}
              value=""
              className="btn btn-primary"
            >
              Get OTP
            </button>
          </form>
          <br />
          <p>or</p>
          <br />
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

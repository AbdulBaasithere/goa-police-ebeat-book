const userModel = require("../Models/user.model");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

exports.userregister = async (req, res) => {
  // console.log(req.body);
  const { name, police_id, phone, password, cpassword, designation } = req.body;
  const existingUser = await userModel.findOne({ phone });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User with this phone number already exists", isValid: 0 });
  }

  if (password != cpassword) {
    return res.status(400).json({ message: "INVALID CONFIRRM PASSWORD", isValid: 0 });
  }

  const otp = Math.floor(1000 + Math.random() * 9000);

  const user = new userModel({
    name,
    police_id,
    phone,
    password,
    cpassword,
    designation,
    otp: { code: otp, expiresAt: new Date(Date.now() + 60 * 1000) },
  });
  await user.save();

  console.log(`OTP for ${name}: ${otp}`);
  res.json({ message: "OTP sent to your phone number", OTP: otp, isValid: 1 });
};

exports.userregisterotpverification = async (req, res) => {
  let type = req.params;
  console.log(type);
  console.log(req.body);
  const { phone, otp } = req.body.otpdetails;

  const user = await userModel.findOne({ phone });

  if (!user) {
    return res.status(401).json({ message: "User not found", isValid: -1  });
  }

  if (user.otp.code !== otp) {
    return res.status(401).json({ message: "Invalid OTP", isValid: 0  });
  }

  // if (user.otp.expiresAt < new Date()) {
  //   return res.status(401).json({ message: "OTP has expired", isToken: false  });
  // }

  console.log("Doneeee");

  const token = jwt.sign({ phone }, process.env.SECRET_KEY);
  await userModel.updateOne(
    {
      phone,
    },
    {
      token: token,
    }
  );
  if(req.params.type === "login"){
    const userFound = await userModel.findOne({phone: phone});
    if(!userFound){
      console.log("user not found");
    }else{
      console.log("user found" + userFound);
      res.json({ token, isValid: 2, payload: userFound });
    }
  }
  else if(req.params.type === "register")
  res.json({ token, isValid: 1 });
};

exports.userlogin = async (req, res) => {
  const { password, phone } = req.body;
  const user = await userModel.findOne({ phone: phone });
  if(!password || !phone){
    return res.status(400).json({error: "Credentials not provided", isValid: -1});
  }
  console.log("Alll cred present");
  if(user.password === password){
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(`Newww LOGIN OTP is ${otp}`);
    const foundUser = userModel.findById(user._id)
    .then((user)=>{
      user.otp.code = otp;
      user.save()
    })
    console.log("User with new otp saved");
      res.status(200).json({msg: "Successfully logged in in LOGIN", isValid: 1})
  }else{
    res.status(200).json({msg: "Invalid Credentials", isValid: -1})
  }
};

const express = require('express');
const {userregister,userregisterotpverification,userlogin} = require('../Controllers/user.controller');
const userRouter = express.Router();



userRouter.post('/user/register',userregister)
userRouter.post('/user/:type/verifyotp',userregisterotpverification)
userRouter.post('/user/login',userlogin)


module.exports = userRouter;
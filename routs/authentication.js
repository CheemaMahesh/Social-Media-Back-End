const express=require('express');
const router=express.Router();
const passport=require('passport');


const authController=require('../Controllers/authenticationController');

router.get('/login',authController.LoginPage);
router.get('/signup',authController.SignUpPage);
router.get('/profile',authController.profilePage);
router.post('/create',authController.createUser);


//use passport as middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {
failureRedirect:'/auth/login'

}),authController.createSession);


//rout for destroying the session 
router.get('/destroy',authController.destroySession);

module.exports=router;


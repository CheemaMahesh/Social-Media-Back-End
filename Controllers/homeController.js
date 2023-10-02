const User=require('../models/user');

module.exports.homePage=async function(req,res){
    try{
        if(!req.isAuthenticated()){
            return res.redirect('/auth/login');
          }
        return res.render('home');
    }catch(err){
        console.log("error in rendring the home page",err);
        return res.status(500);
    }
}

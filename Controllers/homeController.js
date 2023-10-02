const User=require('../models/user');
const Post=require('../models/posts');

module.exports.homePage=async function(req,res){
    try{
        if(!req.isAuthenticated()){
            return res.redirect('/auth/login');
          }
          const posts = await Post.find({})
          .sort('-createdAT')
          .exec();
        return res.render('home',{
            posts
        });
    }catch(err){
        console.log("error in rendring the home page",err);
        return res.status(500);
    }
}

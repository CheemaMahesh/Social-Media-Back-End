// const User=require('../models/user');
const User=require('../models/user')
//creating an user
module.exports.createUser=async function (req,res){
    try{
        const user=await User.findOne({email:req.body.email});
        if(user){
            console.log("user exists already");
            return res.render('');
        }else{
            if(req.body.password===req.body.conformPassword){
                const newUser = await User.create({
                    email: req.body.email,
                    password: req.body.password,
                    name: req.body.name
                  });
            }else{
                console.log("Password does not match");
                return res.redirect('back');
            }
            return res.render('login');
        }
    }catch(err){
        console.log("Error while rendering the register", err);
        return res.status(500).send("Internal Server Error");
    }
};


//rendering the signin page
module.exports.LoginPage=async function(req,res){
    try{
        return res.render('login');
    }catch(err){
        console.log("error in rendering the login page",err);
        return res.status(500);
    }
}

//rendering the signup page
module.exports.SignUpPage=async function(req,res){
    try{
        return res.render('signup');
    }catch(err){
        console.log('error in rendering the singup page',err);
        return res.status(500);
    }
}


//sign out and destroying the sesssion
module.exports.destroySession=async function(req,res){
    try{
        req.logout(function(err) {
            if (err) { return console.log(err); }
            console.log("Signed out")
            return res.redirect('/auth/login');
          });
        
    }catch(err){
        return;
    }
    }



  //rendering the profilepage
  module.exports.profilePage=async function(req,res){
    try{
        return res.render('profile')

    }catch(err){
        console.log("error in rendering the profile page",err);
        return res.status(500);
    }
  }


// Function to create a session (e.g., after successful login)
module.exports.createSession = async function(req, res) {
    try{
        console.log("session created");
        return res.redirect('/');   


    }catch(err){
        console.log("error in creating the session",err);
        return res.status(500);
    }
  }
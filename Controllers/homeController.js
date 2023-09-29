

module.exports.homePage=async function(req,res){
    try{
        return res.render('home');
    }catch(err){
        console.log("error in rendring the home page",err);
        return res.status(500);
    }
}
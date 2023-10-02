const Post = require('../models/posts');
const User = require('../models/user');

// Creating a Post
module.exports.createPost = async function (req, res) {
    try {
        const post = await Post.create({
            posttext: req.body.posttext,
            url: req.body.url,
            user: req.body.user
        });
        console.log("Post created");
         return res.redirect('/');

    } catch (err) {
        console.error("Error in creating a post", err);
    }
}

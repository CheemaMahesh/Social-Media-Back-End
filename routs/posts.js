const express=require('express');
const router=express.Router();

const postsController=require('../Controllers/postscontroller');

router.post('/create',postsController.createPost);




module.exports=router;
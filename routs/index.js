const express=require('express');

const router=express.Router();

const homeController=require('../Controllers/homeController');

router.get('/',homeController.homePage);
router.use('/auth',require('./authentication'));
router.use('/posts',require('./posts'));
module.exports=router;
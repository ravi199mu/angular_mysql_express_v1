const express = require("express");
const router = express.Router();
const db = require('../config/database');

router.post('/register',(req,res,next)=>{
    let user = req.body;
    let result = db.insertUser(user);
    if(result){
        res.json({success:true , msg:"Inserted success"});
    }else{
        res.json({success:false , msg:"Something went wrong"});
    }
});

module.exports = router;
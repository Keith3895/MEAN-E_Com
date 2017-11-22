const express = require('express');
const router  = express.Router();
const cart  = require('../models/cart');

router.post('/addEntry',(req,res)=>{
    cart.addEntry(req.body,(err,cart)=>{
        if(err)res.json({success:false,msg:err});
        else
        res.json({success:true,msg:cart});
    });
});
router.get('/getCart/:id',(req,res)=>{
    cart.getCart(req.params.id,(err,cart)=>{
        if(err)res.json({success:false,msg:err});
        else
        res.json({success:true,msg:cart});
    });
});
router.post('/EmptyCart',(req,res)=>{
    cart.removeCart(req.body.id,(err,status)=>{
        if(err)res.json({success:false,msg:err});
        else
        res.json({success:true,msg:status});
    });
});
module.exports=router;
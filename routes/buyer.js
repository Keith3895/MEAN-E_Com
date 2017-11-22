const express = require('express');
const router  = express.Router();
const Product = require('../models/product');

router.get('/allProducts',(req,res,next)=>{
    
    Product.getAll((err,products)=>{
        if(err)res.send({success:false,msg:err});
        else{
            console.log(products);
            res.send({success:true,products:products});
        }
            
    });
});
module.exports=router;
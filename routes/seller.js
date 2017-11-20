const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const upload  = multer({ dest: 'public/images/' }).single('file');

const Product = require('../models/product');

router.post('/addProduct',(req,res,next)=>{
    console.log(req.body);
    Product.AddProduct(req.body,(err,product)=>{
        if(err) res.json({success:false,msg:err});
        else 
            res.json({success:true,msg:product});
    });
});
router.post('/upload', (req, res) =>{
    upload(req,res,(err)=>{
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
        res.json({error_code:0,err_desc:null,fileName:req.file.path});
         
    });
});
module.exports=router;
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    Pname:String,
    price:Number,
    stock:Number,
    fileList:String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Product = module.exports= mongoose.model('Product',ProductSchema);

module.exports.getProductById = (id,callback)=>{
    Product.findOne({_id:id},callback);
} 
module.exports.getProductsbyUser= (userId,callback)=>{
    Product.find({author:userId},callback);
}
module.exports.AddProduct = (product,callback)=>{
    Product.create(product,callback);
}
module.exports.getAll = (callback)=>{
    Product.find({}).populate({
        path: 'author',
        model:'User'
    }).exec(callback);
}
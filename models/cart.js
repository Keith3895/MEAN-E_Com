const mongoose  =  require('mongoose');
const CartSchema = mongoose.Schema({
    index: Number,
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity: Number,
    Price:Number,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});

const Cart = module.exports=mongoose.model('Cart',CartSchema);

module.exports.addEntry= (entry,callback)=>{
    entry.product= entry.product._id;
    Cart.create(entry,callback);
}
module.exports.getCart= (id,callback)=>{
    Cart.find({author:id}).populate({
        path:'product',
        model:'Product'
    }).exec(callback);
}
module.exports.removeCart= (id,callback)=>{
    Cart.remove({author:id},callback);
}
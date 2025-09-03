const {Schema}=require("mongoose");

const PositionsSchema=new Schema({
    product:String,
    name:String,
    qty:Number,
    avg:Number,
    net:String,
    day:String,
    isLoss:Boolean,
});

module.exports={PositionsSchema};
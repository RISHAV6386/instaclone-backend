const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/instaclone");
 const postSchema=mongoose.Schema({
  picture:String,
  caption:String,
  user:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
  date:{ type:Date,default:Date.now },
  likes:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}]
 });
 module.exports=mongoose.mongoose.model("post",postSchema);
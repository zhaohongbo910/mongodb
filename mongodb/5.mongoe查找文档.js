//   处理mongodb的模块
var mongoose = require("mongoose");
/*
   连接数据库
   mongodb ：协议名
   27017 ： 默认端口号
   0210db :数据库
 */
mongoose.connect("mongodb://localhost:27017/0215db")

/*
    定集合的骨架
    属性的以及对应夫人类型
    通过集合创建的文档的时候的都应必训有下列字段
 */

var personSchema = new mongoose.Schema({
   name:String,   //  字符型
   age:Number,
   addr:String
})

/*
    model ： 创建的集合
    参数一  集合的名字
    参数二： 集合对应的字段
 */

var personModel = mongoose.model("person",personSchema)

//  查询
//personModel.find({name:"tong"},function (err, doc) {
//        if(!err){
//            console.log(doc);
//        }else{
//            console.log(err);
//        }
//    }
//);


//personModel.find({name:"tong"},{addr:1},function (err, doc) {
//        if(!err){
//            console.log(doc);
//        }else{
//            console.log(err);
//        }
//    }
//);

//   查找一条
//personModel.findOne({name:/pujing/},function(err,doc){
//    if(!err){
//        console.log(doc)
//    }else{
//        console.log(err)
//    }
//})

//    通过id 查找
//personModel.findById("58a165b0f3d32403c4a04aad",function(err,doc){
//    if(!err){
//        console.log(doc)
//    }else{
//        console.log(err)
//    }
//})

//   查找年龄不等于31 的
//personModel.find({age:{$ne:31}},function(err,doc){
//    if(!err){
//        console.log(doc)
//    }else{
//        console.log(err)
//    }
//})
//
////  包含
//personModel.find({age:{$in:[35,36,38]}},function(err,doc){
//    if(!err){
//        console.log(doc)
//    }else{
//        console.log(err)
//    }
//})


//   查找姓名为pujing　　或年龄大于３９的
//personModel.find({$or:[{name:"pujing"},{age:{$gt:38}}]},function(err,doc){
//    if(!err){
//        console.log(doc)
//    }else{
//        console.log(err)
//    }
//})

//  查询  名字为  pujing 或者  年龄在是 31,37 的用户
//personModel.find({$or:[{name:"pujing"},{age:{$in:[31,37]}}]},function(err,doc){
//    if(!err){
//        console.log(doc)
//    }else{
//        console.log(err)
//    }
//})






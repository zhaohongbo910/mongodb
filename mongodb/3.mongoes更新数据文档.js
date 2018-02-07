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


personModel.update({
    name:/tong/
},{$set:{addr:"北京"}},function(err,doc){

    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }

})

//personModel.update({name:/^jingtian/},{$inc:{age:5}}, function (err, doc) {
//    if(!err){
//        console.log(doc);
//    }else{
//        console.log(err);
//    }
//});

//更新时，没有找到相关的，则创建
//personModel.update({name:/^gulinazha/}, {name:"zhouqiuyu", age:28, addr:"dalian"},{upsert: true}, function (err, doc) {
//    if(!err){
//        console.log(doc);
//    }else{
//        console.log(err);
//    }
//});



//{multi:true} 更新全部符合条件的文档 ，【默认是更新一条】
personModel.update({name:/^jingtian/}, {$set:{addr:"百知"}}, {multi:true}, function (err, doc) {
        if(!err){
            console.log(doc);
        }else{
            console.log(err);
        }
    })



















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



//var ary = []
//for(var i=0; i<10; i++){
//    ary.push({name:"pujing" + i, age:30+i, addr: "俄罗斯"});
//}
//
//personModel.create(ary,function (err, doc) {
//        if(!err){
//            console.log(doc);
//        }else{
//            console.log(err);
//        }
//    }
//);




//personModel.remove({
//    name:/tong/
//},{$set:{addr:"北京"}},function(err,doc){
//
//    if(!err){
//        console.log(doc)
//    }else{
//        console.log(err)
//    }
//})


//  删除一条
//personModel.findOneAndRemove({name:/^pujing/},function(err,doc){
//    if(!err){
//       console.log(doc)
//    }else{
//        console.log(err)
//    }
//})


//删除名字以pujing开头，并且年龄在32到35岁之间的数据
personModel.remove({name:/^pujing/,age:{$gt:32,$lt:35}}, function (err, doc) {
    if(!err){
        console.log(doc);
    }else{
        console.log(err);
    }
});


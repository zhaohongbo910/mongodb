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
})

/*
    model ： 创建的集合
    参数一  集合的名字
    参数二： 集合对应的字段
 */

var personModel = mongoose.model("person",personSchema)

//  查询
//personModel.create({name:"zhangxueyou",age:55},function (err, doc) {
//        if(!err){
//            console.log(doc);
//        }else{
//            console.log(err);
//        }
//    }
//);

//   查找 包含addr  字段的信息      true : 包含字段  false  不包含字段
personModel.find({addr:{$exists:false}},function (err, doc) {
        if(!err){
            console.log(doc);
        }else{
            console.log(err);
        }
    }
);





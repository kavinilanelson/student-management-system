let mongoose=require("mongoose");
let studentSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true},
    regno:{
        type:String,
        required:true,
        unique:true
    },
    dept:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:16,
        max:100
    },
    cgpa:{
        type:Number,
        required:true,
        min:0,
        max:10
    }

});
module.exports=mongoose.model("Student",studentSchema);
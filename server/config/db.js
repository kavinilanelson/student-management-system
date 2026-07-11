let mongoose=require("mongoose");
function connectDB()
{
    mongoose.connect("mongodb+srv://kavinilanelson:kavinila1011@cluster0.00jyw1n.mongodb.net/?appName=Cluster0")
    .then(()=>{
        console.log("mongodb successfully connected");
    })
    .catch((err)=>{

        console.log("mongodb connection failed");
        console.log(err);
    }
    );
}
module.exports=connectDB;
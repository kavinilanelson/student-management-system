const express=require("express");
const router=express.Router();
const {getstudents,addstudents,updatestudents,deletestudent}=require("../controllers/studentControllers.js");
router.get("/students",getstudents);
router.post("/students",addstudents);
router.put("/students/:id",updatestudents);
router.delete("/students/:id",deletestudent);
module.exports=router;
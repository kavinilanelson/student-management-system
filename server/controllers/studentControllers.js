const Student=require("../models/studentmodel.js");

   async function getstudents(req, res) {
    try{
    const students=await Student.find();
    res.status(200).json({
        success: true,
        count: students.length,
        students
    });

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

   // res.json(students)
    

}
async function addstudents(req,res)
{
    try{
    let newStudent=new Student(req.body);
    let savedStudent=await newStudent.save();
    res.status(201).json({
        success:true,
        message:"student added successfully",
        student:savedStudent
    });
   }
   catch(error){
     if (error.code === 11000) {
        return res.status(400).json({
            success: false,
            message: "Register Number already exists."
        });
    }
    console.error(error);
    res.status(500).json({
        success:false,
        message:error.message
    });
   }

}
async function updatestudents(req,res)
{
    try{
        const updatedStudent=await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true,
             runValidators: true
            }

        );
        if(!updatedStudent)
        {
            return res.status(404).json({
                message:"No student found "
            });
        }
        res.status(200).json({
            success:true,
            message:"student data updated successfully",
            student:updatedStudent
        });
    }
    catch(error){
        if (error.code === 11000) {
        return res.status(400).json({
            success: false,
            message: "Register Number already exists."
        });
    }
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
    
   

}
async function deletestudent(req,res)
{
    try{
    const deletedstudent=await Student.findByIdAndDelete(req.params.id);
    if(!deletedstudent)
    {
        return res.status(404).json({
            message:"student data not found"

        });
    }
    res.status(200).json({
        success:true,
        message:"student deleted successfully",
        student:deletedstudent

    });
}
catch(err){
    res.status(500).json({
        success:false,
    message:err.message
    });
}

   
}
module.exports={getstudents,addstudents,updatestudents,deletestudent};


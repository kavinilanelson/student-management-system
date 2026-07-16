import {useState,useEffect} from "react";
import "./studentform.css";
function StudentForm({addStudent,editingStudent}){
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [StudentName,setStudentName]=useState("");
      const [StudentRegno,setStudentRegno]=useState("");
      const [Department,setDepartment]=useState("");
      const [Age,setAge]=useState("");
      const [Cgpa,setCgpa]=useState("");
      const [error,setError]=useState({});
      useEffect(()=>{
        if(editingStudent)
        {
            setStudentName(editingStudent.name),
            setStudentRegno(editingStudent.regno),
            setDepartment(editingStudent.dept),
            setAge(editingStudent.age),
            setCgpa(editingStudent.cgpa)
        }
        else{
            clearForm();
        }
      },[editingStudent]);
      async function handlesubmit(){
        
        let tempError={};
        if(!StudentName) tempError.name="Name is Required";
        if(!StudentRegno) tempError.regno="Register number is Required";
        if(!Department) tempError.dept="Department is required";
        if (!Age) {
              tempError.age = "Age is Required";
          } 
        else if (Number(Age) < 16 || Number(Age) > 100) 
          {
            tempError.age = "Age must be between 16 and 100";
          }
        if (!Cgpa)
           {
              tempError.cgpa = "CGPA is Required";
           } 
        else if (Number(Cgpa) < 0 || Number(Cgpa) > 10) 
           {
             tempError.cgpa = "CGPA must be between 0 and 10";
           }
        if(Object.keys(tempError).length>0)
        {
            setError(tempError);
            return;
        }
      const newStudent={
        id: Date.now(),     
      name:StudentName,
      regno:StudentRegno,
      dept:Department,
      age:Number(Age),
      cgpa:Number(Cgpa)
      };
      setIsSubmitting(true);
      if (editingStudent) {
    if (window.confirm("Are you sure you want to update this student?")) {
        await addStudent(newStudent);
    }
} else {
    await addStudent(newStudent);
}
      setIsSubmitting(false);
      clearForm();
      setError({});
    }
      function clearForm(){
        setStudentName("");
        setStudentRegno("");
        setDepartment("");
        setAge("");
        setCgpa("");
      }
       
    return(
        <form className="student-form">
     <div className="form-row">
      <label>STUDENT NAME</label>
      <input
      type="text"
      placeholder="Enter student Name"
       value={StudentName}
       onChange={(e)=>setStudentName(e.target.value)}
       />
       </div>
       {error.name && <p className="error">{error.name}</p>}
       <div className="form-row">
       <label>REGISTER NUMBER</label>
       <input
      type="text"
      placeholder="Enter your Register Number"
       value={StudentRegno}
       onChange={(e)=>setStudentRegno(e.target.value)}
       />
       </div>
        {error.regno && <p className="error">{error.regno}</p>}

       <div className="form-row">
       <label>DEPARTMENT</label>
       <select
  value={Department}
  onChange={(e) => setDepartment(e.target.value)}
>
  <option value="">Select Department</option>
  <option value="CSE">CSE</option>
  <option value="ECE">ECE</option>
  <option value="IT">IT</option>
  <option value="BIO">BIO</option>
  <option value="MECH">MECH</option>
</select>
       </div>
        {error.dept && <p className="error">{error.dept}</p>}
       <div className="form-row">
       <label>AGE</label>
       <input
      type="text"
      placeholder="Enter your Age"
       value={Age}
       onChange={(e)=>setAge(e.target.value)}
       />
       </div>
        {error.age && <p className="error">{error.age}</p>}
       <div className="form-row">
       <label>CGPA</label>
       <input
      type="text"
      placeholder="Enter your CGPA"
       value={Cgpa}
       onChange={(e)=>setCgpa(e.target.value)}
       />
       </div>
        {error.cgpa && <p className="error">{error.cgpa}</p>}
    
       <div className="button-container">
       <button
    type="button"
    onClick={handlesubmit}
    disabled={isSubmitting}
>
    {isSubmitting
        ? "Saving..."
        : editingStudent
        ? "UPDATE STUDENT"
        : "ADD STUDENT"}
</button>
       </div>
       
       
       
    </form>

    );
    
}
export default StudentForm;
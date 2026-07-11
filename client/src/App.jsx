import {useState,useEffect} from "react";
import axios from "axios";
import Header from "./components/header.jsx";
import StudentForm from "./components/studentform.jsx";
import StudentTable from "./components/studenttable.jsx";
import "./app.css";
function App(){
 
  let [students,setStudents]=useState([]);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [editIndex,setEditIndex]=useState(-1);
  const [editingStudent,setEditingStudent]=useState(null);
  const [searchStudent,setSearchStudent]=useState("");
  const [deptFilter,setDeptFilter]=useState("All");
  const[cgpaFilter,setCgpaFilter]=useState("All");
  const [sortBy,setsortBy]=useState("Default");
  async function fetchStudents() {
    try {
        setLoading(true);

        const response = await axios.get("http://localhost:3000/students");

        setStudents(response.data.students);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
}
  useEffect(() => {
    fetchStudents();
}, []);
  let filteredStudents=students.filter((student)=>{
   
             const matchedsearch=student.regno.toLowerCase().includes(searchStudent.toLowerCase());
             const deptmatch=deptFilter==="All"||student.dept.toLowerCase()==deptFilter.toLowerCase();
             const cgpamatch=cgpaFilter==="All"|| Number(student.cgpa)>=Number(cgpaFilter);
             return matchedsearch && deptmatch && cgpamatch;
  });
  let sortedStudents=[...filteredStudents];
  if(sortBy==="Name")
  {
    sortedStudents.sort((a,b)=>a.name.localeCompare(b.name));
  }
  if(sortBy==="Cgpa")
  {
    sortedStudents.sort((a,b)=>Number(b.cgpa)-Number(a.cgpa));
  }
  if(sortBy==="Age")
  {
    sortedStudents.sort((a,b)=>Number(a.age)-Number(b.age));
  }
  async function addStudent(newStudent) {
    try {

        if (editingStudent) {
            await axios.put(
                `http://localhost:3000/students/${editingStudent._id}`,
                newStudent
            );
            
        } else {
            await axios.post(
                "http://localhost:3000/students",
                newStudent
                
            );
             
            
        }

        fetchStudents();
        setEditingStudent(null);
        setEditIndex(-1);

    } catch (error) {
       setErrorMessage(error.response.data.message);
    }
}
  async function deleteStudent(index) {
    try {
        const student = students[index];

        await axios.delete(`http://localhost:3000/students/${student._id}`);
        

        fetchStudents();

    } catch (error) {
       setErrorMessage(error.response.data.message);
    }
}
  function editStudent(index)
  {
    setEditIndex(index);
    setEditingStudent(students[index]);
    console.log(index);
    console.log(students[index]);
  }
  return(
    <div>
      <Header/>
  <StudentForm 
        addStudent={addStudent}
        editingStudent={editingStudent}
  />
  <p className="student-count">
    Total Students:{students.length}
  </p>
  {errorMessage && <p className="error-message">{errorMessage}</p>}
  <div className="filter-container">
    <div className="filter-group">
  <label>Search Register Number</label>
          <input
             type="text"
             placeholder="Enter your search Register Number"
             value={searchStudent}
             onChange={(e)=>setSearchStudent(e.target.value)}
             />
             </div>
             <div className="filter-group">
              <label>Select Department</label>
      <select
           
           value={deptFilter}
           onChange={(e)=>setDeptFilter(e.target.value)}
           >
            <option value="All">All</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="BIO">BIO</option>
            <option value="MECH">MECH</option>
           </select>
           </div>
           <div className="filter-group">
            <label>Select Cgpa</label>
        <select
            
             value={cgpaFilter}
             onChange={(e)=>setCgpaFilter(e.target.value)}
             >
            <option value="All">All</option>
            <option value="9">9 & Above</option>
            <option value="8">8 & Above</option>
            <option value="7">7 & Above</option>
            <option value="6">6 & Above</option>
             </select>
             </div>
             <div className="filter-group">
            <label>Sort By</label>
          <select
               value={sortBy}
               onChange={(e)=>setsortBy(e.target.value)}
               >
                <option value="Default">Default </option>
                <option value="Name">Name(A-Z)</option>
                <option value="Cgpa">CGPA(High-Low)</option>
                <option value="Age">Age(High-Low)</option>
               </select>
               </div>
               </div>

  {loading ? (
    <p>Loading students...</p>
) : (
    <StudentTable
        students={sortedStudents}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
    />
)}
  
  </div>
  );
}
  
  export default App;

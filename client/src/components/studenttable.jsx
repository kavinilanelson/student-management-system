import "./studenttable.css";
function StudentTable({students,deleteStudent,editStudent})
{
    if(students.length===0){
    return <p>No students found.</p>;
}
    return(
        <div className="table-container">
        <table className="student-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Regno</th>
                    <th>Dept</th>
                    <th>Age</th>
                    <th>Cgpa</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student,index)=>(
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.regno}</td>
                    <td>{student.dept}</td>
                    <td>{student.age}</td>
                    <td>{student.cgpa}</td>
                    <td>
                        <button className="edit-btn" onClick={()=>editStudent(index)}>EDIT</button>
                        <button className="delete-btn" onClick={()=>{
                            if(window.confirm("Are you sure you want delete this student details?")){
                                deleteStudent(index);
                            }
                        }}>DELETE</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}
export default StudentTable;
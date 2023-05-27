import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function TeacherForm(){
    const Backend = "http://localhost:7000/api/teacherRouter";
    //GET DATA
    const GetData = () => {
        axios.get(Backend)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
      }
      //POST DATA
      const [Name, setName] = useState("")
     const [Contact, setContact] = useState("")
     const [Course, setCourse] = useState("")
     const TeachersData = {
         Name,
         Contact,
         Course
     }
     const Submit = () => {
         axios.post(Backend, TeachersData)
             .then((res) => console.log(res.data))
             .catch((err) => console.log(err))
     }
    return(
        <>
             <Button onClick={() => GetData()}>GET DATA</Button>
             <div className='Student'>
                <Typography variant='h3'>Teachers</Typography>
                <TextField label="Name" onChange={(e) => setName(e.target.value)} /><br />
                <TextField label="Contact" onChange={(e) => setContact(e.target.value)} /><br />
                <TextField label="Course" onChange={(e) => setCourse(e.target.value)} /><br />
                <Button onClick={() => Submit()}>Submit</Button>
                </div>   
        </>
    )
}
export default TeacherForm
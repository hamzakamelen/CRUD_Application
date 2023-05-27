import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function StudentForm() {
    const Backend = "http://localhost:7000/api/studentRouter";
    //GET DATA
    const GetData = () => {
        axios.get(Backend)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }
    //Post Data

    const [firstName, setfirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [contact, setcontact] = useState("")
    const [Course, setCourse] = useState("")
    const [Email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const StudentData = {
        firstName,
        LastName,
        contact,
        Email,
        password,
        Course
    }
    const Submit = () => {
        axios.post(Backend, StudentData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }
    return (
        <>
            <Button onClick={() => GetData()}>GET DATA</Button>
            <div className='Student'>
      <Typography variant='h3'>Students</Typography>
      <TextField label="First Name" onChange={(e) => setfirstName(e.target.value)} /><br />
      <TextField label="Last Name" onChange={(e) => setLastName(e.target.value)} /><br />
      <TextField label="Contact" onChange={(e) => setcontact(e.target.value)} /><br />
      <TextField label="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <TextField label="password" onChange={(e) => setpassword(e.target.value)} /><br />
      <TextField label="Course" onChange={(e) => setCourse(e.target.value)} />
      <Button onClick={() => Submit()}>Submit</Button>
    </div>  
        </>
    )
}
export default StudentForm
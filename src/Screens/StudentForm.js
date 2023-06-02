import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentForm() {
    const Backend = "http://localhost:7000/api/studentRouter";
    //GET DATA
    const GetData = () => {
        axios.get(Backend)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }
    let navigate = useNavigate()
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
            .then((res) => {console.log(res.data)
            navigate('/StudentData')
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
        <div className='Students'>
                <Box marginLeft={50} borderRadius={20} marginTop={5} padding={20} boxShadow={17}  width={400} height={350}>
      <Typography fontStyle="inherit" marginTop={-16} variant='h2' textAlign="center" fontFamily="monospace">Students</Typography> <br />
  <TextField label="First Name" sx={{marginBottom:"1.2em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setfirstName(e.target.value)} />
                <TextField label="Last Name" sx={{marginBottom:"1.2em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setLastName(e.target.value)} />
                <TextField label="Contact" sx={{marginBottom:"1.2em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setcontact(e.target.value)} />
                <TextField label="Email" sx={{marginBottom:"1.2em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" sx={{marginBottom:"1.2em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setpassword(e.target.value)} />
                <TextField label="Course" sx={{marginBottom:"1.5em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setCourse(e.target.value)} />
                <Button variant="contained" color="primary" sx={{fontWeight:"bold",fontSize:"1.2em",marginLeft:"-1em",borderRadius:"10px", width:"22em" }} onClick={() => Submit()}>Submit</Button>
                </Box>
                </div>   
        </>
    )
}
export default StudentForm
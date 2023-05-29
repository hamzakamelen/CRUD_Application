import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
     let navigate = useNavigate()

     const Submit = () => {
         axios.post(Backend, TeachersData)
             .then((res) =>{ console.log(res.data)
            navigate('/TeacherData')
            })
             .catch((err) => console.log(err))
     }
    return(
             <div className='Teachers'>
                <Box marginLeft={50} borderRadius={20} marginTop={8} padding={20} boxShadow={17}  width={400} height={280}>
                <Typography fontStyle="inherit" marginTop={-13} variant='h2' textAlign="center" fontFamily="monospace">Teachers</Typography> <br /> <br />
                <TextField label="Name" sx={{marginBottom:"2.5em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setName(e.target.value)} />
                <TextField label="Contact" sx={{marginBottom:"2.5em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setContact(e.target.value)} />
                <TextField label="Course" sx={{marginBottom:"3em",width:"35em",marginLeft:"-5em"}} onChange={(e) => setCourse(e.target.value)} />
                <Button variant="contained" color="primary" sx={{fontWeight:"bold",fontSize:"1.2em",marginLeft:"-1em",borderRadius:"10px", width:"22em" }} onClick={() => Submit()}>Submit</Button>
                </Box>
                </div>   
    )
}
export default TeacherForm
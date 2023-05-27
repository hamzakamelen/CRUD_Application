import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function CourseForm(){
    const Backend = "http://localhost:7000/api/CourseRouter";
    //GET DATA
    const GetData = () => {
        axios.get(Backend)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
      }
      //POST DATA
      const [Name, setName] = useState("")
     const [ShortName, setShortName] = useState("")
     const [Duration, setDuration] = useState("")
     const [Fees, setFees] = useState("")
     const CourseData = {
         Name,
         ShortName,
         Duration,
         Fees
     }
     const Submit = () => {
         axios.post(Backend, CourseData)
             .then((res) => console.log(res.data))
             .catch((err) => console.log(err))
     }
    return(
        <>
                <Button onClick={() => GetData()}>GET DATA</Button>
                <div className='Student'>
                <Typography variant='h3'>Course</Typography>
                <TextField label="Name" onChange={(e) => setName(e.target.value)} /><br />
                <TextField label="Short Name" onChange={(e) => setShortName(e.target.value)} /><br />
                <TextField label="Duration" onChange={(e) => setDuration(e.target.value)} /><br />
                <TextField label="Fees" onChange={(e) => setFees(e.target.value)} /><br />
                <Button onClick={() => Submit()}>Submit</Button>
                </div>
        </>
    )
}
export default CourseForm
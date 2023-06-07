import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CourseForm() {
    const Backend = "https://amused-headscarf-pike.cyclic.app//api/CourseRouter";
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
    let navigate = useNavigate()

    const Submit = () => {
        axios.post(Backend, CourseData)
            .then((res) => {
                console.log(res.data)
                navigate('/CourseData')
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <div className='Course'>
                <Box marginLeft={50} borderRadius={20} marginTop={7} padding={20} boxShadow={17} width={400} height={350}>
                    <Typography fontStyle="inherit" marginTop={-13} variant='h2' textAlign="center" fontFamily="monospace">Course</Typography> <br />
                    <TextField label="Name" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setName(e.target.value)} />
                    <TextField label="Short Name" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setShortName(e.target.value)} />
                    <TextField label="Duration" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setDuration(e.target.value)} />
                    <TextField label="Fees" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setFees(e.target.value)} />
                    <Button variant="contained" color="primary" sx={{ fontWeight: "bold", fontSize: "1.2em", marginLeft: "-1em", borderRadius: "10px", width: "22em" }} onClick={() => Submit()}>Submit</Button>
                </Box>
            </div>
        </>
    )
}
export default CourseForm
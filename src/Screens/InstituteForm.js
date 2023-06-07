import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InstituteForm() {
    const Backend = "https://amused-headscarf-pike.cyclic.app//api/instituteRouter";
    //GET DATA
    const GetData = () => {
        axios.get(Backend)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }
     //Post Data

     const [InstituteName, setInstituteName] = useState("")
     const [ShortName, setShortName] = useState("")
     const [contact, setcontact] = useState("")
     const [InstituteLocation, setInstituteLocation] = useState("")
     const InstituteData = {
         InstituteName,
         ShortName,
         contact,
         InstituteLocation
     }
     let navigate = useNavigate()

     const Submit = () => {
         axios.post(Backend, InstituteData)
             .then((res) => {console.log(res.data)
                navigate('/InstituteData')
            })
             .catch((err) => console.log(err))
     }
    return (
        <>

            <div className='Institute'>
            <Box marginLeft={50} borderRadius={20} marginTop={7} padding={20} boxShadow={17} width={400} height={350}>
                    <Typography fontStyle="inherit" marginTop={-13} variant='h2' textAlign="center" fontFamily="monospace">Institute</Typography> <br />
                    <TextField label="Institute Name" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setInstituteName(e.target.value)} />
                    <TextField label="Short Name" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setShortName(e.target.value)} />
                    <TextField label="InstituteLocation" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setInstituteLocation(e.target.value)} />
                    <TextField label="Contact" sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} onChange={(e) => setcontact(e.target.value)} />
                    <Button variant="contained" color="primary" sx={{ fontWeight: "bold", fontSize: "1.2em", marginLeft: "-1em", borderRadius: "10px", width: "22em" }} onClick={() => Submit()}>Submit</Button>
                </Box>
                </div>
            </>
            )
}
            export default InstituteForm
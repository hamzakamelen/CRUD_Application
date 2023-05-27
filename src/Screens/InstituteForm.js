import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function InstituteForm() {
    const Backend = "http://localhost:7000/api/instituteRouter";
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
     const Submit = () => {
         axios.post(Backend, InstituteData)
             .then((res) => console.log(res.data))
             .catch((err) => console.log(err))
     }
    return (
        <>

            <Button onClick={() => GetData()}>GET DATA</Button>
            <div className='Student'>
                <Typography variant='h3'>Institute</Typography>
                <TextField label="Institute Name" onChange={(e) => setInstituteName(e.target.value)} /><br />
                <TextField label="Short Name" onChange={(e) => setShortName(e.target.value)} /><br />
                <TextField label="Contact" onChange={(e) => setcontact(e.target.value)} /><br />
                <TextField label="InstituteLocation" onChange={(e) => setInstituteLocation(e.target.value)} /><br />
                <Button onClick={() => Submit()}>Submit</Button>
                </div>
            </>
            )
}
            export default InstituteForm
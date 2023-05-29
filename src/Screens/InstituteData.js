import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography } from "@mui/material";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InstituteData() {
    const [data, setData] = useState([]);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editData, setEditData] = useState({});
    const Backend = "http://localhost:7000/api/instituteRouter";

    const openEditDialog = (student) => {
        setEditData(student);
        setEditDialogOpen(true);
    };

    const closeEditDialog = () => {
        setEditData({});
        setEditDialogOpen(false);
    };

    const saveEditData = () => {
        // Send the updated data to the backend
        axios
            .put(`${Backend}/${editData._id}`, editData)
            .then((res) => {
                console.log(res.data);
                // Update the data in the state with the updated student information
                setData((prevData) =>
                    prevData.map((student) =>
                        student._id === editData._id ? editData : student
                    )
                );
                closeEditDialog();
            })
            .catch((err) => console.log(err));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDelete = (id) => {
        console.log(id);
        axios
            .delete(`${Backend}/${id}`)
            .then((res) => {
                console.log(res.data);
                // Remove the deleted student from the data in the state
                GetData()
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const GetData = () =>{
    axios
            .get(Backend)
            .then((res) => {
                console.log(res.data);
                setData(res.data.data);
            })
            .catch((err)=>console.log(err));
        }

        useEffect(()=>{
            GetData()
        },[])
        let navigate = useNavigate()
    return (
        <div>
             <Box>
            <Typography fontStyle="inherit" marginTop={1} variant='h2' textAlign="center" fontFamily="monospace">Institutes</Typography> <br />
                <Box borderRadius={3} marginLeft={5}  padding={4} sx={{ boxShadow: "5" }}
                    width={1400} height={10} component='div'>
                    <Typography marginLeft={2} fontWeight="bold" fontSize={27} marginTop={-1.9}>Institute Name</Typography>
                    <Typography marginLeft={60} fontWeight="bold" fontSize={27} marginTop={-5}>ShortName</Typography>
                    <Typography marginLeft={110} fontWeight="bold" fontSize={27} marginTop={-5}>Institute Location</Typography>
                    <Typography marginLeft={160} fontWeight="bold" fontSize={27} marginTop={-5.2}>Contact</Typography>
                </Box>
                <Button onClick={() => { navigate('/InstituteForm') }} variant="contained" sx={{ borderRadius: "20px", fontWeight: "bold", color: "whitesmoke", fontSize: "16px", marginLeft: "87em", marginTop: "0.8em", marginBottom: "0.8em" }} color="success" ><AddIcon />New</Button>
                {data.map((x, i) => (
                    <Box borderRadius={3} marginBottom={2} marginLeft={5} key={i} padding={4} sx={{ boxShadow: "7" }} width={1400} height={27} component='div'>
                        <Typography marginLeft={-1} marginTop={-2} variant="h6">{x.InstituteName }</Typography>
                        <Typography marginLeft={65} marginTop={-4} variant="h6">{x.ShortName}</Typography>
                        <Typography marginLeft={60} textAlign="center" marginTop={-4} variant="h6">{x.InstituteLocation}</Typography>
                        <Typography marginLeft={150} textAlign="end" marginTop={-4} variant="h6">{x.contact}</Typography>
                        <Button fontWeight="bold" sx={{ borderRadius: "22px", marginRight: "6px" }} onClick={() => openEditDialog(x)} variant="outlined" color="primary"><EditIcon /></Button>
                        <Button fontWeight="bold" sx={{ borderRadius: "22px" }} onClick={() => handleDelete(x._id)} variant="outlined" color="error"><DeleteIcon /></Button>
                    </Box>
                ))}
            </Box>
            {/* <Button onClick ={()=>{navigate('/InstituteForm')}}>Create</Button>
             {data.map((x, i) => (
                <ul key={i}>
                    <Box border={1} width={150}>
                        <li>{x.InstituteName}</li>
                        <li>{x.ShortName}</li>
                        <li>{x.InstituteLocation}</li>
                        <li>{x.contact}</li>
                        <Button onClick={() => openEditDialog(x)}>Edit</Button>
                        <Button onClick={() => handleDelete(x._id)}>Delete</Button>
                    </Box>
                </ul>
            ))} */}

            <Dialog open={editDialogOpen} onClose={closeEditDialog}>
                <DialogTitle>Edit Institute</DialogTitle>
                <DialogContent>
                    <TextField
                        name="InstituteName"
                        label="Institute Name"
                        value={editData.InstituteName || ""}
                        onChange={handleEditChange}
                        fullWidth
                    />
                    <TextField
                        name="ShortName"
                        label="Short Name"
                        value={editData.ShortName || ""}
                        onChange={handleEditChange}
                        fullWidth
                    />
                    <TextField
                        name="InstituteLocation"
                        label="InstituteLocation"
                        value={editData.InstituteLocation || ""}
                        onChange={handleEditChange}
                        fullWidth
                    />

                    <TextField
                        name="contact"
                        label="Contact"
                        value={editData.contact || ""}
                        onChange={handleEditChange}
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={closeEditDialog}>Cancel</Button>
                    <Button onClick={saveEditData}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default InstituteData;

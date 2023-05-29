import { Box, Button, Dialog, Typography, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function TeacherData() {
    const [data, setData] = useState([]);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editData, setEditData] = useState({});
    const Backend = "http://localhost:7000/api/teacherRouter";

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

    const GetData = () => {
        axios
            .get(Backend)
            .then((res) => {
                console.log(res.data);
                setData(res.data.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        GetData()
    }, [])
    let navigate = useNavigate()
    return (
        <div>
            <Box>
            <Typography fontStyle="inherit" marginTop={1} variant='h2' textAlign="center" fontFamily="monospace">Teachers</Typography> <br />
                <Box borderRadius={3} marginLeft={5}  padding={4} sx={{ boxShadow: "5" }}
                    width={1400} height={10} component='div'>
                    <Typography fontWeight="bold" fontSize={27} marginTop={-1.9}>Name</Typography>
                    <Typography fontWeight="bold" fontSize={27} textAlign="center"marginTop={-5}  >Course</Typography>
                    <Typography fontWeight="bold" fontSize={27} textAlign="end" marginTop={-5.2} >Contact</Typography>
                </Box>
                <Button onClick={() => { navigate('/TeacherForm') }} variant="contained" sx={{ borderRadius: "20px", fontWeight:"bold",color:"whitesmoke", fontSize: "16px", marginLeft: "87em", marginTop: "0.8em", marginBottom: "0.8em" }} color="success" ><AddIcon />New</Button>
                {data.map((x, i) => (
                    <Box borderRadius={3} marginBottom={2} marginLeft={5} key={i} padding={4} sx={{ boxShadow: "7" }} width={1400} height={27} component='div'>
                        <Typography marginTop={-2} variant="h6">{x.Name}</Typography>
                        <Typography textAlign="center" marginTop={-4} variant="h6">{x.Course}</Typography>
                        <Typography textAlign="end" marginTop={-4} variant="h6">{x.Contact}</Typography>
                        <Button fontWeight="bold" sx={{ borderRadius: "22px", marginRight: "6px" }} onClick={() => openEditDialog(x)} variant="outlined" color="primary"><EditIcon /></Button>
                        <Button fontWeight="bold" sx={{ borderRadius: "22px"}}  onClick={() => handleDelete(x._id)} variant="outlined" color="error"><DeleteIcon /></Button>
                    </Box>
                ))}
            </Box>

            <Dialog open={editDialogOpen} onClose={closeEditDialog}>
                <DialogTitle>Edit Teacher</DialogTitle>
                <DialogContent>
                    <TextField
                        name="Name"
                        label="Name"
                        value={editData.Name || ""}
                        onChange={handleEditChange}
                        fullWidth
                    />
                    <TextField
                        name="Course"
                        label="Course"
                        value={editData.Course || ""}
                        onChange={handleEditChange}
                        fullWidth
                    />

                    <TextField
                        name="Contact"
                        label="Contact"
                        value={editData.Contact || ""}
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

export default TeacherData;

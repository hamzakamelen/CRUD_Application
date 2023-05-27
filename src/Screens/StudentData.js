// import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
// import axios from "axios";
// import { useEffect, useState } from "react";

// function StudentData() {
//     const [data, setData] = useState([]);
//     const [editDialogOpen, setEditDialogOpen] = useState(false);
//     const [editData, setEditData] = useState({});
//     const Backend = "http://localhost:7000/api/studentRouter";

//     const openEditDialog = (student) => {
//         setEditData(student);
//         setEditDialogOpen(true);
//     };

//     const closeEditDialog = () => {
//         setEditData({});
//         setEditDialogOpen(false);
//     };

//     const saveEditData = () => {
//         // Send the updated data to the backend
//         axios
//             .put(`${Backend}/${editData._id}`, editData)
//             .then((res) => {
//                 console.log(res.data);
//                 // Update the data in the state with the updated student information
//                 setData((prevData) =>
//                     prevData.map((student) =>
//                         student._id === editData._id ? editData : student
//                     )
//                 );
//                 closeEditDialog();
//             })
//             .catch((err) => console.log(err));
//     };

//     const handleEditChange = (e) => {
//         const { name, value } = e.target;
//         setEditData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleDelete = (id) => {
//         console.log(id);
//         axios
//             .delete(`${Backend}/${id}`)
//             .then((res) => {
//                 console.log(res.data);
//                 // Remove the deleted student from the data in the state
//                 setData((prevData) => prevData.filter((student) => student._id !== id));
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     useEffect(() => {
//         axios
//             .get(Backend)
//             .then((res) => {
//                 console.log(res.data);
//                 setData(res.data.data);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     return (
//         <div>
//             {data.map((x, i) => (
//                 <ul key={i}>
//                     <Box border={1} width={150}>
//                         <li>{x.firstName}</li>
//                         <li>{x.LastName}</li>
//                         <li>{x.Course}</li>
//                         <li>{x.contact}</li>
//                         <Button onClick={() => openEditDialog(x)}>Edit</Button>
//                         <Button onClick={() => handleDelete(x._id)}>Delete</Button>
//                     </Box>
//                 </ul>
//             ))}

//             <Dialog open={editDialogOpen} onClose={closeEditDialog}>
//                 <DialogTitle>Edit Student</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         name="firstName"
//                         label="First Name"
//                         value={editData.firstName || ""}
//                         onChange={handleEditChange}
//                         fullWidth
//                     />
//                     <TextField
//                         name="LastName"
//                         label="Last Name"
//                         value={editData.LastName || ""}
//                         onChange={handleEditChange}
//                         fullWidth
//                     />
//                     <TextField
//                         name="Course"
//                         label="Course"
//                         value={editData.Course || ""}
//                         onChange={handleEditChange}
//                         fullWidth
//                     />

//                     <TextField
//                         name="contact"
//                         label="Contact"
//                         value={editData.contact || ""}
//                         onChange={handleEditChange}
//                         fullWidth
//                     />

//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={closeEditDialog}>Cancel</Button>
//                     <Button onClick={saveEditData}>Save</Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }

// export default StudentData;

import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function StudentData() {
    const [data, setData] = useState([]);
    const [editData,setEditData] = useState({})
    const Backend = "http://localhost:7000/api/studentRouter";
    
    const Edit = (id) => {
        axios.put(`${Backend}/${id}`,editData)
        .then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const Delete = (id) => {
        console.log(id)
        axios.delete(`${Backend}/${id}`)
        .then((res) =>{ console.log(res.data)})
        .catch((err) =>{ console.log(err)})
    }
    useEffect(() => {
        axios
            .get(Backend)
            .then((res) => {
                console.log(res.data);
                setData(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {data.map((x, i) => (
                <ul key={i}>
                    <Box border={1} width={150}>
                        <li>{x.firstName}</li>
                        <li>{x.LastName}</li>
                        <li>{x.Course}</li>
                        <li>{x.contact}</li>
                        <Button onClick={() => Edit(x._id)} >Edit</Button>
                        <Button onClick={() => Delete(x._id)}>Delete</Button>
                    </Box>
                </ul>
            ))}
        </div>
    );
}

export default StudentData;

// import { useState } from 'react';
// import './App.css';
// import { Button, TextField, Typography } from '@mui/material';
// import axios from 'axios';
import AppRouter from './config/router';

function App() {

  // const obj = {
  //   firstName,
  //   LastName,
  //   contact,
  //   Email,
  //   password,
  //   Course
  // }
  // const GetData = () => {
  //   axios.get("http://localhost:7000/api/studentRouter")
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err))
  // }

  return (<>
  <AppRouter />
    {/* <Button onClick={() => GetData()}>GET DATA</Button> */}
    
  </>
  );
}

export default App;

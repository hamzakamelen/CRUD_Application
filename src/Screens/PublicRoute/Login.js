import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
  const Backend = "https://amused-headscarf-pike.cyclic.app//api/UserRouter/login";
  let navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const LoginData = {
    email,
    password
  }
  const Submit = () => {
      axios.post(Backend, LoginData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === false) {
            setError(res.data.message);
          } else {
            navigate('/StudentData');
          }
        })
        .catch((err) => {
          console.log(err);
          setError("An error occurred. Please try again.");
        });
    };
    const PasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const InputChange = (e) => {
      if (Error) {
        setError("");
      }
      if (e.target.name === 'email') {
        setemail(e.target.value);
      } else if (e.target.name === 'password') {
        setPassword(e.target.value);
      }
    };
  return (
    <div className='Login'>
      <Box marginLeft={50} borderRadius={20} marginTop={10} padding={20} boxShadow={17} width={400} height={170}>
        <Typography fontStyle="inherit" marginTop={-13} variant='h2' textAlign="center" fontFamily="monospace">Login</Typography> <br />
        <TextField label="Email"
         sx={{ marginBottom: "2em", width: "35em", marginLeft: "-5em" }} 
         name="email"
         value={email}
         onChange={InputChange} />
        <TextField
          label="Password"
          sx={{ marginBottom: "3em", width: "35em", marginLeft: "-5em" }}
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={InputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={PasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography marginTop={-5} marginLeft={-6} marginBottom={5} fontSize={18} fontFamily='inherit'>Don't have an Account? <Link to='Signup'>SignUp</Link></Typography>
        {Error && <Typography sx={{marginBottom:"10px",marginLeft:"-3em",marginTop:"-12px"}} fontSize={20} color="error">Error:  {Error}</Typography>} 
        <Button variant="contained" color="primary" sx={{ fontWeight: "bold", fontSize: "1.2em", marginLeft: "-1em", borderRadius: "10px", width: "22em" }} onClick={() => Submit()}>Submit</Button>
      </Box>
    </div>
  )
}

export default Login;
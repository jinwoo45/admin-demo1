import React from 'react'
import '../App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  
  function Login() {
    return (
      <div className='loginroot'>
        <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container component="main" maxWidth="xs">
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src = "./togather_logo.png" alt = "logo"></img>
      <TextField label="관리자 ID" margin="normal"required fullWidth><input></input></TextField>
      <TextField label="패스워드"  margin="normal"type="password"required fullWidth></TextField>
      <FormControlLabel control = {<Checkbox value="remember" color="primary" />} label = "ID,PW 기억하기" />

      <Button type = "submit" fullWidth variant='contained' sx={{mt:3,mb:2}}>로그인</Button>
      <Link>Forgot password?</Link>
      </Box>

    </Container>
    </ThemeProvider>
      </div>
    )
  }
  
  export default Login
  
import React from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function Login() {
    const navigate = useNavigate();
    const loginUser = (e) => {
        navigate("/member");
    };

    return (
        <div className="loginroot">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 27,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <img width={350} src="./togather_logo.png" alt="logo"></img>

                        <TextField label="관리자 ID" margin="normal" required fullWidth sx={{ mt: 5 }}>
                            <input></input>
                        </TextField>
                        <TextField label="패스워드" margin="normal" type="password" required fullWidth>
                            <input></input>
                        </TextField>
                        {/* <FormControlLabel control = {<Checkbox value="remember" color="primary" />} label = "ID,PW 기억하기" /> */}

                        <Button onClick={loginUser} className="login-btn" type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            로그인
                        </Button>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default Login;

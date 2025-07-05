import {
  Box,
  Button,
  Stack,
  TextField,
  Collapse,
  Alert,
  Grid,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [successmsg, setSuccessmesg] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationKey: ["Signup"],
    mutationFn: async (userData: User) => {
      const response = await axios.post("/api/register", userData);
      return response.data;
    },
    onSuccess: (data) => {
      setSuccessmesg(data.message);
      setErrormsg("");
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message;
      setErrormsg(message);
      setSuccessmesg("");
    },
  });

  const handleSignup = () => {
    if (password !== confPass) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    signupMutation.mutate(userData);
  };

  return (
    <Box sx={{ width: 300, margin: "auto", padding: 4 }}>
      <Stack spacing={2}>
        <Grid>
          <Collapse in={!!successmsg}>
            <Alert severity="success" onClose={() => setSuccessmesg("")}>
              {successmsg}
            </Alert>
          </Collapse>

          <Collapse in={!!errormsg}>
            <Alert severity="error" onClose={() => setErrormsg("")}>
              {errormsg}
            </Alert>
          </Collapse>

          <TextField
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <TextField
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            placeholder="Confirm Password"
            type="password"
            value={confPass}
            onChange={(e) => setConfPass(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleSignup}
            disabled={signupMutation.isPending}
          >
            {signupMutation.isPending ? "Signing up..." : "Signup"}
          </Button>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Signup;

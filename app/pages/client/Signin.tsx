import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuthStore } from "~/store/useAuth";

interface User {
  email: string;
  password: string;
}

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const Login = useMutation({
    mutationKey: ["login"],
    mutationFn: async (UserData: User) => {
      const response = await axios.post("/api/login", UserData);
      return response.data;
    },
    onSuccess: (data) => {
      setError("");
      setSuccess(data.message);

      if (data.token) {
        setToken(data.token);
      }
      console.log(data.token);
      setTimeout(() => navigate("/dashboard"), 2000);
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || "Login failed";
      setSuccess("");
      setError(message);
    },
  });

  const handleLogin = () => {
    const UserData = { email, password };
    Login.mutate(UserData);
  };

  return (
    <Box sx={{ width: 300, margin: "auto", padding: 4 }}>
      <Stack spacing={2}>
        {success && <Alert severity="success">{success}</Alert>}
        {errormsg && <Alert severity="error">{errormsg}</Alert>}

        <TextField
          type="email"
          required
          label="Email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          required
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          disabled={Login.isPending}
        >
          {Login.isPending ? "Logging in..." : "Login"}
        </Button>
      </Stack>
    </Box>
  );
};

export default Signin;

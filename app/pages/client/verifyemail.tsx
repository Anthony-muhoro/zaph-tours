import { useSearchParams, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  Alert,
  Box,
  CircularProgress,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

const verifyEmail = async (token: string) => {
  const response = await axios.post(`/api/verify-email?token=${token}`);
  return response.data;
};

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  const { mutate, data, error, isPending, isError, isSuccess } = useMutation({
    mutationFn: () => {
      if (!token) throw new Error("No token provided");
      return verifyEmail(token);
    },
    onSuccess: () => {
      setShowMessage(true);
      navigate("/dashboard");
    },
    onError: () => setShowMessage(true),
  });

  return (
    <Box sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h5" mb={2}>
        Verify Your Email
      </Typography>

      <Button
        variant="contained"
        onClick={() => mutate()}
        disabled={!token || isPending}
      >
        {isPending ? "Verifying..." : "Click to Verify"}
      </Button>

      <Stack spacing={2} mt={3} alignItems="center">
        {showMessage && isSuccess && (
          <Alert severity="success">
            {data?.message || "Email verified successfully!"}
          </Alert>
        )}

        {showMessage && isError && (
          <Alert severity="error">
            {(error as any)?.response?.data?.message || "Verification failed"}
          </Alert>
        )}
      </Stack>

      {isSuccess && (
        <Button sx={{ mt: 2 }} onClick={() => navigate("/sign-in")}>
          Go to Login
        </Button>
      )}
    </Box>
  );
};

export default VerifyEmail;

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { theme } from "~/context/Themes";

const ContactPage = () => {
  return (
    <Box py={8} px={2} bgcolor={theme.palette.secondary.main}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
          Contact Us
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          justifyContent="space-between"
          mb={8}
        >
          <Box flex={1}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Send us a message
            </Typography>
            <Stack spacing={2} color={theme.palette.primary.dark}>
              <TextField label="Name" fullWidth />
              <TextField label="Email" type="email" fullWidth />
              <TextField label="Subject" fullWidth />
              <TextField label="Message" multiline rows={4} fullWidth />
              <Button variant="contained" sx={{ width: "fit-content" }}>
                Send Message
              </Button>
            </Stack>
          </Box>

          <Stack flex={1} spacing={4}>
            <Box>
              <Typography variant="h6" fontWeight={600} mb={1}>
                Contact Information
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Mail size={18} />
                  <Typography variant="body2">support@company.com</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone size={18} />
                  <Typography variant="body2">+254 712 345 678</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <MapPin size={18} />
                  <Typography variant="body2">
                    Nairobi, Kenya – Westlands, Kenyatta Ave
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600} mb={1}>
                Office Hours
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Clock size={18} />
                <Typography variant="body2">
                  Mon - Fri: 8:00 AM - 5:00 PM
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Typography variant="h6" fontWeight={600} mb={1}>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="inherit">
                  <Facebook size={20} />
                </IconButton>
                <IconButton color="inherit">
                  <Twitter size={20} />
                </IconButton>
                <IconButton color="inherit">
                  <Instagram size={20} />
                </IconButton>
                <IconButton color="inherit">
                  <Linkedin size={20} />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  IconButton,
  useTheme,
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

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box py={10} px={2} bgcolor="background.default">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={8}
          color="text.primary"
        >
          Contact Us
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          alignItems="flex-start"
        >
          <Stack flex={1} spacing={4}>
            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
                color="text.primary"
              >
                Contact Information
              </Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Mail size={18} />
                  <Typography variant="body2">Zaphtours@support.com</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone size={18} />
                  <Typography variant="body2">+254 712 345 678</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <MapPin size={18} />
                  <Typography variant="body2">Murang'a, Kenya</Typography>
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
                color="text.primary"
              >
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
              <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
                color="text.primary"
              >
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary">
                  <Facebook size={20} />
                </IconButton>
                <IconButton color="primary">
                  <Twitter size={20} />
                </IconButton>
                <IconButton color="primary">
                  <Instagram size={20} />
                </IconButton>
                <IconButton color="primary">
                  <Linkedin size={20} />
                </IconButton>
              </Stack>
            </Box>

            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 2,
                mt: 2,
              }}
            >
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1331.3365347603183!2d37.15903169518851!3d-0.721376096510206!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a28207db7113%3A0xbc8b3625ac089be8!2sMurang&#39;a!5e0!3m2!1sen!2ske!4v1751721498453!5m2!1sen!2ske"
                width="100%"
                height="250"
                loading="lazy"
                style={{ border: 0 }}
              />
            </Box>
          </Stack>

          <Box flex={1}>
            <Typography
              variant="h6"
              fontWeight={600}
              mb={3}
              color="text.primary"
            >
              Send us a message
            </Typography>
            <Stack spacing={3}>
              <TextField label="Name" variant="outlined" fullWidth />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <TextField label="Subject" variant="outlined" fullWidth />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
              <Button
                variant="contained"
                size="large"
                sx={{ alignSelf: "flex-start" }}
                fullWidth
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;

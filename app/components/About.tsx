import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Slide,
  Stack,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import { stats, teamMembers } from "~/assets/data";

const About = () => {
  const theme = useTheme();

  return (
    <Stack component="section" sx={{ py: 8, px: { xs: 2, md: 6 }, gap: 6 }}>
      {/* Title */}
      <Slide direction="left" in={true} timeout={600}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
          }}
        >
          About Zaph Tours
        </Typography>
      </Slide>

      <Typography
        variant="body1"
        sx={{
          mx: "auto",
          textAlign: "center",
          color: theme.palette.text.secondary,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque
        quaerat dolorum ut necessitatibus praesentium enim corrupti
        exercitationem facere perferendis amet voluptates sint harum, vitae
        assumenda ipsam, aliquid aspernatur architecto ipsa officia esse ex
        consequuntur. Corrupti amet repellat magni. Nostrum ad sunt aliquam
        neque repellat inventore ipsam, placeat ex velit?
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={3}
        sx={{ mt: 4 }}
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card
              key={idx}
              sx={{
                minWidth: 200,
                px: 3,
                py: 2,
                textAlign: "center",
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "secondary.main",
                  width: 48,
                  height: 48,
                  mx: "auto",
                  mb: 1,
                }}
              >
                <Icon size={20} />
              </Avatar>
              <Typography variant="h6" fontWeight="bold">
                {stat.number}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Card>
          );
        })}
      </Stack>

      <Box sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
        >
          Meet Our Team
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={4} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Card
              key={idx}
              sx={{
                width: 280,
                borderRadius: 3,
                boxShadow: 3,
                textAlign: "center",
                p: 2,
              }}
            >
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default About;

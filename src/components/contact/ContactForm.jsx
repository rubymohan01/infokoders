"use client";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import { useState } from "react";
import emailjs from "emailjs-com";
import Grid from "@mui/material/Grid2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x299nyh",
        "template_3ujol22",
        formData,
        "94TtzAZZ4eCvZYHzO"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 800,
        marginTop: "20px",
        p: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "bold",
          fontFamily: "NovemberPro",
          color: "#333",
          mb: 2,
        }}
      >
        Get in Touch With Us
      </Typography>

      <Grid className="mt-10" container spacing={6}>
        {/* First Name & Last Name */}
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Email, Contact & Subject */}
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SubjectIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Message */}
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            multiline
            rows={2.5}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{
                    marginBottom: "28px",
                    fontFamily: "NovemberPro-Reg",
                  }}
                >
                  <MessageIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          fontFamily: "circular",
        }}
      >
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{
            px: 3,
            py: 1,
            textTransform: "capitalize",
            backgroundColor: "#333",
            fontFamily: "NovemberPro-Reg",
            "&:hover": {
              backgroundColor: "#fff",
              border: "1px solid #333",
              color: "#333",
            },
          }}
          type="submit"
        >
          Send Enquiry
        </Button>
      </Box>
    </Box>
  );
}

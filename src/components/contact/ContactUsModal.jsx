"use client";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import { useState } from "react";
import emailjs from "emailjs-com";
import Grid from "@mui/material/Grid2";

export default function ContactUsModal({setOpen,open}) {
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
          setOpen(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box textAlign="center" mt={3}>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{
          textTransform: "capitalize",
          fontFamily: "NovemberPro-Reg",
          backgroundColor: "#333",
          "&:hover": {
            backgroundColor: "#fff",
            border: "1px solid #333",
            color: "#333",
          },
        }}
      >
        Contact Us
      </Button> */}

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ textAlign: "center", fontFamily: "NovemberPro" }}>
          Get in Touch With Us
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              p: 3,
              backgroundColor: "#fff",
            }}
          >
            <Grid container spacing={2}>
              {/* First Name & Last Name */}
              <Grid xs={12} sm={6}>
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
              <Grid xs={12} sm={6}>
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
              <Grid xs={12} sm={6}>
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
              <Grid xs={12} sm={6}>
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
              <Grid xs={12}>
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
              <Grid xs={12}>
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
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={handleClose}
            color="#333"
            sx={{
              textTransform: "capitalize",
              fontFamily: "NovemberPro-Reg",
            }}

          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{
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
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

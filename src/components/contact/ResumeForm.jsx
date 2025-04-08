"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import JobListings from "../contact/JobListings";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkIcon from "@mui/icons-material/Link";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import styles from "../../styles/Careers.module.css";
import emailjs from "emailjs-com";
import Navbar from "../../components/navbar/Navbar";
const ResumeForm = () => {
  // const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contact: "",
    experience: "",
    message: "",
    role: "",
    position: "",
    profileUrl: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = () => {
    const { firstName, email, contact, experience, position } = formData;
    setIsFormValid(
      firstName.trim() !== "" &&
        email.trim() !== "" &&
        contact.trim() !== "" &&
        experience.trim() !== "" &&
        position.trim() !== ""
      // resume !== null  Ensure a file is selected
    );
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
      return updatedFormData;
    });
    // Run validation after state update
    setTimeout(validateForm, 0);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    // Create a temporary URL for the uploaded file
    const fileUrl = URL.createObjectURL(file);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = () => {
    //   const base64String = reader.result.split(",")[1];
    //   setResume({filename: file.name,
    //     content: base64String,
    //     type: file.type,});
    //   validateForm();
    // };
    console.log("Selected File:", fileUrl);
    // setResume(file); // Store the file URL instead of base64
    validateForm();
  };
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/api/getjobs", { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        console.error("Failed to fetch jobs");
      }
    };
    fetchJobs();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Resume Before Submission:", resume);
    // if (!resume) {
    //   console.error("No file uploaded");
    //   return;
    // }
    const emailParams = {
      ...formData,
      // resume: [{content: resume.content, // Base64 string
      // name: resume.filename, // File name
      // type: resume.type, }]
      // resume:resume
    };
    // console.log("resume after submit", emailParams)
    emailjs
      .send(
        "service_x299nyh",
        "template_jknz8by",
        emailParams,
        "94TtzAZZ4eCvZYHzO"
      )
      .then(
        () => {
          setFormData({
            firstName: "",
            email: "",
            contact: "",
            experience: "",
            message: "",
            role: "",
            position: "",
            profileUrl: "",
          });
          // setResume(null);
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Grid container className={styles.backgroundCareer}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          sx={{
            fontSize: "45px",
            color: "white",
            mt: 4,
            fontFamily: "NovemberPro",
          }}
        >
          Join Our Team
        </Typography>
      </Grid>
      <Grid container justifyContent="center" sx={{ padding: "3% 10%" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: 800,
            p: 3,
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "NovemberPro",
            }}
            variant="h5"
            align="center"
            fontWeight="bold"
            mb={4}
          >
            Want to Join Our Team? Fill this form
          </Typography>
          <Grid container spacing={3}>
            {[
              { name: "firstName", label: "First Name", icon: <PersonIcon /> },
              { name: "lastName", label: "Last Name", icon: <PersonIcon /> },
              { name: "email", label: "Email Address", icon: <EmailIcon /> },
              { name: "contact", label: "Contact", icon: <PhoneIcon /> },
              // { name: "subject", label: "Subject", icon: <SubjectIcon /> },
            ].map(({ name, label, icon }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={name}>
                <TextField
                  fullWidth
                  required
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  placeholder={label}
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{icon}</InputAdornment>
                    ),
                    sx: {
                      paddingBottom: "12px",
                      backgroundColor: "#f5f5f5",
                      fontFamily: "NovemberPro-Reg",
                      borderRadius: 1,
                      "&:MuiInputBase-input": {
                        paddingTop: "18px",
                      },
                      "&:before, &:after": { display: "none" }, // Hides underline effects
                    },
                  }}
                />
              </Grid>
            ))}

            {/* Role and Position */}
            {[
              // {
              //   name: "role",
              //   label: "Select Role",
              //   options: ["Manager", "Employee", "Intern"],
              // },
              {
                name: "position",
                label: "Select Position",
                options: [
                  "Frontend Developer",
                  "Backend Developer",
                  "UI/UX Designer",
                  "Devops Engineer",
                  "Project Manager",
                  "HR",
                  "Business Development Executive",
                  "Sales Manager",
                ],
              },
              {
                name: "experience",
                label: "Select Experience",
                options: [
                  "Fresher",
                  "Less than 1 year",
                  "1 year",
                  "2 Years",
                  "3 Years",
                  "4 Years",
                  "5 Years",
                  "More than 5 Years",
                ],
              },
            ].map(({ name, label, options }) => (
              <Grid size={{ xs: 12, sm: 6 }} key={name}>
                <Select
                  fullWidth
                  required
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  displayEmpty
                  variant="filled"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: 1,
                    paddingBottom: "12px",
                    "&:before, &:after": { display: "none" }, // Hides underline effects
                    "&.MuiFilledInput-root": { backgroundColor: "#f5f5f5" },
                    "&:hover": { backgroundColor: "#f5f5f5" },
                    fontFamily: "NovemberPro-Reg",
                  }}
                >
                  <MenuItem value="" disabled>
                    {label}
                  </MenuItem>
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            ))}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="profileUrl"
                value={formData.profileUrl || ""}
                onChange={handleChange}
                placeholder="URLs"
                type="url" // Ensures URL format
                variant="filled"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />{" "}
                      {/* You can replace this with <LinkIcon /> */}
                    </InputAdornment>
                  ),
                  disableUnderline: true, // Removes the underline
                  sx: {
                    backgroundColor: "#f5f5f5",
                    fontFamily: "NovemberPro-Reg",
                    borderRadius: 1,
                    "&:before, &:after": { display: "none" }, // Hides underline effects
                    "& input": {
                      // padding: "10px 14px", // Ensures placeholder is aligned
                      // lineHeight: "1.5",
                    },
                  },
                }}
              />
            </Grid>
            {/* Upload Resume */}
            {/* <Grid size={{ xs: 12, md: 6 }}>
              <div
                style={{
                  marginBottom: "5px",
                  fontFamily: "NovemberPro-Reg",
                  fontSize: "16px",
                }}
              >
                Upload Your CV/Resume
              </div>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                style={{
                  fontFamily: "NovemberPro-Reg",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              />
            </Grid> */}
            {/* Message Field */}
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <TextField
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                multiline
                rows={3}
                variant="filled"
                InputProps={{
                  sx: {
                    backgroundColor: "#f5f5f5",
                    fontFamily: "NovemberPro-Reg",
                    borderRadius: 1,
                    "&:before, &:after": { display: "none" }, // Hides underline effects
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                px: 3,
                py: 1,
                textTransform: "capitalize",
                backgroundColor: "#333", // Gray when disabled
                fontFamily: "NovemberPro-Reg",
                "&:hover": {
                  backgroundColor: "#fff",
                  border: "1px solid #333",
                  color: "#333",
                },
              }}
              type="submit"
              // disabled={!isFormValid}
            >
              Send
            </Button>
            {/* {resume && (
              <Button
                variant="outlined"
                onClick={() => {  
                  const a = document.createElement("a");
                  a.href = resume;
                  a.download = "Resume.pdf";
                  a.click();
                }}
              >
                Download Resume
              </Button>
            )} */}
          </Box>
        </Box>
      </Grid>
      {/* <JobListings/> */}
      <JobListings jobs={jobs} />
    </Box>
  );
};
export default ResumeForm;

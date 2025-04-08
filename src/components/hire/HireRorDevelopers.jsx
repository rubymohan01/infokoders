"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import styles from "../../styles/Services.module.css";
import { Typography, CardMedia } from "@mui/material";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Tab,
  Tabs,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import topengineer from "../../../public/assets/img/topengineer.png";
import SubjectIcon from "@mui/icons-material/Subject";
import MessageIcon from "@mui/icons-material/Message";
import emailjs from "emailjs-com";
import Footer from "../footer/Footer";
const HireRorDevelopers = () => {
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
  const partnerValue = [
    {
      image: "/assets/img/teammember.gif",
      title: "Cost-effectiveness",
      desc: "When compared to other nations, India has a large pool of highly skilled ROR developers at a reduced cost. This cost advantage can assist firms in lowering total development expenses and increasing profitability.",
    },
    {
      image: "/assets/img/railsmvp.gif",
      title: "Access to a broad pool of talent",
      desc: "India has a huge and developing technology industry, which provides organizations with access to a vast pool of talented ROR developers. This enables firms to find the best fit for their specific project objectives and demands.",
    },
    {
      image: "/assets/img/customers.gif",
      title: "Technical knowledge",
      desc: "ROR developers in Mumbai and Bangalore have strong technical backgrounds and are well-versed in cutting-edge technologies such as ROR. They bring a plethora of knowledge and experience to the table, assisting organizations in the development of high-quality, scalable apps.",
    },
    {
      image: "/assets/img/dataprotections.gif",
      title: "Cultural affinities",
      desc: "Because India has a rich culture of outsourcing and dealing with international clients, firms can communicate and collaborate with their ROR development team more easily.",
    },
    {
      image: "/assets/img/clock.gif",
      title: "Time zone advantage",
      desc: "India is in a different time zone than most Western countries, allowing for round-the-clock development work and ensuring that projects are delivered on time.",
    },
  ];
  const services = [
    {
      image: "/assets/img/teammember.gif",
      title: "Expertise",
      desc: "We have a team of highly skilled and experienced Ruby on Rails developers who have deep knowledge and expertise in building robust, scalable, and secure web applications using the latest technologies and best practices.",
    },
    {
      image: "/assets/img/mobileapp.gif",
      title: "Quality Work",
      desc: "We are known for delivering high-quality work that meets client expectations and project requirements. They use Agile methodologies and keep clients informed throughout the development process to ensure complete transparency and satisfaction.",
    },
    {
      image: "/assets/img/economial.gif",
      title: "Cost-effective",
      desc: "We offer cost-effective solutions for clients looking to hire ROR developers. They have a flexible pricing model that helps clients stay within their budget without sacrificing quality.",
    },
    {
      image: "/assets/img/gathering.gif",
      title: "Technology Stack",
      desc: "We have a wide range of technology stacks that enables us to offer full-stack development services and find the best solution for clients’ needs.",
    },
    {
      image: "/assets/img/ondemand.gif",
      title: "Dedicated Team",
      desc: "InfoKoders technologies offers dedicated teams of developers to clients who are looking for ongoing development services. This allows clients to have full control over their projects and ensures that their projects receive the attention they deserve.",
    },
    {
      image: "/assets/img/customersupport.gif",
      title: "Post-Launch Support",
      desc: "We provide post-launch support and maintenance services to ensure that clients’ applications remain up-to-date, secure, and functional. This helps clients avoid costly downtime and protects their investments.",
    },
    {
      image: "/assets/img/deploypro.gif",
      title: "Proven Track Record",
      desc: "We have a proven track record of delivering successful projects to clients in a variety of industries, and they have received positive feedback from their clients. ",
    },
  ];
  const Industry = [
    {
      title: "Save 70% on development cost",
    },
    {
      title: "Fast On-boarding",
    },
    {
      title: "Easy scale up and Scale down",
    },
    {
      title: "Proficiency on advance technologies",
    },
    {
      title: "Agile development process",
    },
  ];
  const role = [
    {
      desc: "Designing and developing web applications using the Ruby on Rails framework, including the implementation of new features, user-facing components, and back-end services.",
    },
    {
      desc: "Writing high-quality, maintainable, and efficient code that adheres to best practices and coding standards. This includes writing tests to ensure the code is working as expected.",
    },
    {
      desc: "Debugging and resolving technical issues in the application, such as fixing bugs, improving performance, and resolving compatibility issues.",
    },
    {
      desc: "Collaborating with cross-functional teams, including designers, product managers, and other developers, to define, design, and ship new features.",
    },
    {
      desc: "Ensuring high performance and responsiveness of applications by optimizing database queries, and utilizing caching techniques, among other methods.",
    },
    {
      desc: "Participating in code reviews to maintain code quality and to identify areas for improvement.",
    },
    {
      desc: "Implementing security and data protection measures, such as encryption, authentication, and authorization, to ensure the safety and privacy of user data.",
    },
    {
      desc: "Keeping up-to-date with the latest industry trends and technologies, including new programming languages, frameworks, and tools.",
    },
    {
      desc: "Maintaining and updating documentation related to the application, including technical specifications, user guides, and API documentation.",
    },
    {
      desc: "Providing technical support to customers and stakeholders, including troubleshooting and problem-solving.",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);
  const tabContent = [
    "Hire the top ROR developers in Bangalore India to create custom web apps from the ground up, ensuring that they suit the needs and specifications of a business. They can create applications with e-commerce, content management, social networking, and other features.",
    "Our E-commerce solution supports businesses of all sizes — from small stores to large-scale marketplaces. Scale effortlessly with multi-store capabilities, international shipping, and multi-currency support.",
    "Ensure top-notch performance and scalability to handle millions of users with cloud-based infrastructure, load balancing, and optimized databases.",
    "Our ROR experts can create unique CMS solutions to assist organizations in easily managing and updating their website content.",
    "The RoR developers we hire for you are highly talented and enable you the top-notch mobile applications that are tailored for multiple devices and platforms, ensuring that they are user-friendly and accessible on the go.",
    "Our approved RoR Developers team serves new businesses and enterprises with tailor-made custom services. Our committed team of ROR experts has successfully translated game-changing product concepts into feasible software solutions. Our highly competent and experienced Ruby on Rails developers will provide long-term consistency.",
    "We use CI/CD to ensure the codebase’s integrity. Our remote ROR engineers adhere to Agile principles to keep the code deployable and optimized consistently.",
    "Our ROR experts can integrate applications with a wide range of third-party services, including payment gateways, social media platforms, and analytics tools.",
    "To ensure that existing applications run well, our ROR experts can correct any faults or errors that may develop.To ensure that existing applications run well, our ROR experts can correct any faults or errors that may develop.",
    "Our ROR experts can put in place a variety of security safeguards to safeguard apps and sensitive data.",
    "Applications can be tested by our ROR developers to hire to guarantee that they are of a high caliber and adhere to the specifications established by the company.",
  ];
  return (
    <>
      <Grid id="carousel" className={styles.backgroundRor}>
        <Navbar />
        <Typography
          className={styles.imageTitle}
          fontSize={{
            xs: "30px",
            sm: "30px",
            md: "45px",
            lg: "45px",
            xl: "45px",
          }}
          sx={{ paddingTop: "200px !important", fontFamily: "NovemberPro" }}
        >
          Hire Ruby on Rails Developers
        </Typography>
        <Typography
          className={styles.imageSubTitle}
          sx={{
            fontSize: {
              xs: "18px",
              sm: "18px",
              md: "20px",
              lg: "25px",
              xl: "25px",
            },
            fontFamily: "NovemberPro-Reg",
          }}
        >
          InfoKoders technologies is a tech company that offers Ruby on Rails
          programming services. Our Ruby on Rails developers assists in the
          development of powerful, secure, and scalable online applications.
          They quickly understand business needs for web application
          development, migration, integration, and other tasks.
        </Typography>
      </Grid>
      <Grid container spacing={3} className={styles.hirecontainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Hire{" "}
            <span style={{ color: "#650909" }}> Ruby on Rails Developers</span>
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Interested in hiring a Ruby on Rails developer in India or a
            specialist in this technology? Then your problem is solved right
            here
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            InfoKoders Technologies is a tech company that offers Ruby on Rails
            programming services. Our Ruby on Rails developers assists in the
            development of powerful, secure, and scalable online applications.
            They quickly understand business needs for web application
            development, migration, integration, and other tasks.
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            We have professional and cost-effective RoR developers to Hire in
            Mumbai, Bangalore, Delhi and Gurgaon who are available on a
            full-time, part-time, and hourly basis. Let's get started on your
            next project with our skilled Ruby on Rails developers.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ padding: "0 4%" }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              border: "1px solid #ebebeb",
              borderRadius: "10px",
              maxWidth: 800,
              marginTop: "20px",
              padding: "6% 4% 8% 4%",
              // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
              Hire Software Developers
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
                  type="text"
                  required
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
                  type="text"
                  required
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
                  type="email"
                  required
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
                  type="tel"
                  required
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
                  placeholder="Message "
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
        </Grid>
      </Grid>
      <Grid container spacing={5} className={styles.RailsEngineers}>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{
            marginTop: "8%",
          }}
        >
          <Image
            src={topengineer}
            className={styles.engineerImage}
            alt="image not found of the hire ror developers"
            width={600}
            height={400}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            The top Ruby on Rails engineers are available to help you advance
            your business concepts
          </Typography>
          <Typography
            className={styles.rubySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            One of the top resource onboarding companies, InfoKoders
            Technologies, employs a large number of potential experts who are
            knowledgeable about the most recent technologies and have a wealth
            of relevant expertise.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            With our extensive and illustrious industry expertise, we can
            provide you with the resources you need to make your project a
            reality. Each resource we bring on board for you is highly qualified
            and has a track record of accomplishment.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            They increase the value of the development process by opening your
            mind to potential inputs, conversations, and brainstorming sessions.
            When it comes to successfully completing a project, they rely on
            their pertinent experience.
          </Typography>
          <Typography
            className={styles.obstaclesRightTitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            <TripOriginIcon className={styles.obstaclesRightIcon} />
            Hiring Ruby on Rails engineers in Delhi from InfoKoders Technologies
            will speed up your development process and assist you in utilizing
            the most recent tools and technologies to create the best solution
            that satisfies your requirements and provides an unparalleled
            experience to the end customers.
          </Typography>
        </Grid>
      </Grid>
      <Grid className={styles.growth}>
        <Grid className={styles.coreQuote}>
          <Typography
            className={styles.hirepart}
            sx={{
              fontSize: { lg: "25px", md: "22px ", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              marginBottom: "1rem",
            }}
          >
            {" "}
            What makes hiring a
            <span className={styles.OurUsp}> ruby on rails </span> developer in
            India a realistic choice for your company's growth?
          </Typography>
          <Typography
            className={styles.coreDescriptionUsppartner}
            sx={{
              fontSize: {
                lg: "18px ",
                md: "16px ",
                sm: "18px ",
                xs: "16px",
              },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Several reasons contribute to companies’ willingness to hire Ruby on
            Rails (ROR) developers from India, especially from Bangalore, Delhi,
            Gurgaon and Mumbai:
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.partnerContainer}>
          {partnerValue?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
              key={index}
              className={styles.uspBoxPartner}
            >
              <CardMedia
                sx={{ width: "90px", height: "90px", marginBottom: "20px" }}
                component="img"
                image={item?.image}
              />
              <Typography
                className={styles.uspBoxTitle}
                sx={{
                  fontSize: {
                    lg: "20px ",
                    md: "20px ",
                    sm: "20px ",
                    xs: "20px ",
                  },
                  fontFamily: "NovemberPro",
                  marginBottom: "1rem",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                className={styles.uspBoxDesc}
                sx={{
                  fontSize: {
                    lg: "16px ",
                    md: "16px ",
                    sm: "16px ",
                    xs: "16px ",
                  },
                  fontFamily: "NovemberPro-Reg",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              MarginBottom: "1.5rem",
            }}
          >
            Role and Responsibilities of ROR developer
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.partnerContainer}>
          {role?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              key={index}
              className={styles.uspBox}
            >
              <Typography
                className={styles.uspBoxDesc}
                sx={{
                  fontSize: {
                    lg: "16px ",
                    md: "16px ",
                    sm: "16px ",
                    xs: "16px ",
                  },
                  fontFamily: "NovemberPro-Reg",
                  marginTop: "10px",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container className={styles.Professionals}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Typography
            className={styles.ProfessionalsTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Top
            <span style={{ color: "#650909" }}> Ruby on Rails </span>
            Services Offered by Professionals
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "800px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="standard"
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                // borderRight: "1px solid #ddd",
                width: { lg: "300px", md: "300px", sm: "250px", xs: "120px" },
                // backgroundColor: "#f4f4f4"
              }}
            >
              {[
                "Custom web application development",
                "E-commerce solutions",
                "Social networking solutions",
                "CMS (content management systems)",
                "Mobile application development",
                "Ruby on Rails for Startups / Enterprises",
                "ROR Optimisation and Integration",
                "Integration with third-party services",
                "Bug fixing",
                "Security measures",
                "Quality control and testing",
              ].map((label, index) => (
                <Tab
                  key={index}
                  label={label}
                  sx={{
                    fontFamily: "NovemberPro",
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "16px",
                      xs: "10px",
                    },
                    textAlign: "center",
                    color: "#333",
                    marginBottom: "10px",
                    transition: "0.3s ease",
                    "&.Mui-selected": {
                      color: "#ffffff",
                      backgroundColor: "#650909",
                    },
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#650909",
                    },
                  }}
                />
              ))}
            </Tabs>
            <Box
              sx={{
                flex: 1,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "NovemberPro-Reg",
                  fontSize: { lg: "25px", md: "18px", sm: "16px", xs: "14px" },
                }}
              >
                {tabContent[activeTab]}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Why choose */}
      <Grid container className={styles.servicesContainer}>
        <Grid>
          <Typography
            className={styles.coreTitleUsp}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
              marginBottom: "1rem",
            }}
          >
            Why Choose InfoKoders Technologies to Hire ROR developers in India?
          </Typography>
        </Grid>
        <Grid container spacing={4} className={styles.partnerContainer}>
          {services?.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
              key={index}
              className={styles.uspBox}
            >
              <CardMedia
                sx={{ width: "90px", height: "90px", marginBottom: "10px" }}
                component="img"
                image={item?.image}
              />
              <Typography
                className={styles.uspBoxTitle}
                sx={{
                  fontSize: {
                    lg: "20px ",
                    md: "20px ",
                    sm: "20px ",
                    xs: "20px ",
                  },
                  fontFamily: "NovemberPro",
                  marginTop: "10px",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                className={styles.uspBoxDesc}
                sx={{
                  fontSize: {
                    lg: "16px ",
                    md: "16px ",
                    sm: "16px ",
                    xs: "16px ",
                  },
                  fontFamily: "NovemberPro-Reg",
                  marginTop: "10px",
                }}
              >
                {item?.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container spacing={3} className={styles.hirecontainer}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography
            className={styles.hirerubyTitle}
            sx={{
              fontSize: { lg: "25px", md: "22px", sm: "25px", xs: "22px" },
              fontFamily: "NovemberPro",
            }}
          >
            Hire Industry's Best{" "}
            <span style={{ color: "#650909" }}> Software developers </span> in
            India
          </Typography>
          <Typography
            className={styles.industrySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            Achieve the best access to professional and skilled software
            developers in Bangalore, Delhi, and Mumbai India that empowers you
            to create systematic and streamlined custom software solutions for
            your company, agency, or start-up. At InfoKoders Technologies, we
            understand how critical it is for you to hire a trustworthy software
            development team that keeps the capabilities to fulfill your
            business objectives.
          </Typography>
          <Typography
            className={styles.industrySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
            }}
          >
            As a result, we carefully hire proficient in India that holds a
            thorough expertise in working with the latest software development
            technologies and ensure to add value to your team. For over 10+
            years, we have been offering software and app development solutions
            to organizations of any size and industry.
          </Typography>
          <Typography
            className={styles.industrySubtitle}
            sx={{
              fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
              fontFamily: "NovemberPro-Reg",
              marginBottom: "1rem",
            }}
          >
            If you’re looking for a reliable and cost-effective way to hire an
            experienced and best software engineering team in India on an
            hourly, part-time, or Monthly basis, then relying on us can turn out
            to be business changing decision ever.
          </Typography>
          {Industry?.map((item, index) => (
            <Typography
              className={styles.obstaclesRightTitle}
              key={index}
              sx={{
                fontSize: { lg: "18px", md: "16px", sm: "18px", xs: "16px" },
                fontFamily: "NovemberPro-Reg",
                // marginBottom: "0.5rem",
              }}
            >
              <TripOriginIcon className={styles.obstaclesRightIcon} />
              {item?.title}
            </Typography>
          ))}
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
          sx={{ padding: "0 4%", display: "flex", alignItems: "center" }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              border: "1px solid #ebebeb",
              borderRadius: "10px",
              maxWidth: 800,
              marginTop: "20px",
              padding: "15% 4% 12% 4%",
              // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
              Hire Software Developers
            </Typography>

            <Grid className="mt-10" container spacing={6}>
              {/* First Name & Last Name */}
              <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
                <TextField
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  type="text"
                  required
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
              <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
                <TextField
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  type="text"
                  required
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
              <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  type="email"
                  required
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
              <Grid size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
                <TextField
                  fullWidth
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact"
                  type="tel"
                  required
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
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
              <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default HireRorDevelopers;

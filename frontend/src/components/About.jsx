import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Send } from "@mui/icons-material";
import { styled } from "@mui/system";
import React, { useState, useEffect } from "react";
import Bimal from '../images/BIMAL.jpg';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import Axios from 'axios'
const styles = {
  form: {
    margin: "40px 0px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "40px",
  },
  input: {
    gridColumn: "1/ -1",
  },
  button: {
    display: "block",
    margin: "auto",
    marginTop: "20px",
  },
};

const StyledForm = styled("form")({
  padding: "20px",
  border: "1px solid var(--primary)",
  borderRadius: "10px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
});

const StyledContactInfo = styled(Container)({
  marginLeft: "150px",
  marginTop: "20px",
});

const clientFeedback = [
  "Working with DIGITECH has been a game-changer for our business. Their expertise in email marketing has transformed our online presence and boosted our sales. Their team's dedication and strategic approach are truly commendable. - Client A",
  // ... (other client feedback entries)
  "Working with DIGITECH has been a game-changer for our business. Their expertise in email marketting has transformed our online presence and boosted our sales. Their team's dedication and strategic approach are truly commendable. - Client A",
    
  "I can't thank DIGITECH enough for their exceptional digital marketting services. They not only delivered results beyond our expectations but also took the time to understand our unique needs. Their personalized approach sets them apart. - Client B",
    
  "Collaborating with DIGITECH was a breath of fresh air. Their creativity, attention to detail, and commitment to deadlines impressed us. Our [specific project] wouldn't have been a success without their expertise. - Client C",
    
  "From day one, it was evident that DIGITECH is passionate about their clients' success. Their transparent communication and willingness to go the extra mile have made them our go-to partner for [specific service]. - Client D",
    
  "I've worked with several IT companies, but none have matched the level of professionalism and results that DIGITECH consistently delivers. Their team's insights and dedication have made a significant impact on our business growth. - Client E",
    
  "Choosing DIGITECH was one of the best decisions we made for our brand. Their digital marketting services not only increased our brand visibility but also enhanced customer engagement. Their results-driven approach speaks volumes. - Client F",
    
   
];

const Slideshow = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <img
      src={images[currentImageIndex]}
      alt={`Image ${currentImageIndex + 1}`}
      style={{
        borderRadius: "10px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: "490px",
        objectFit: "cover",
      }}
    />
  );
};


const About = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [suggetions , setSuggestions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulating a submission by setting a success message
    const url = "http://localhost:8081/getsuggetions";
    const res = await Axios.post(url , {suggetions})
    if(res){
      setSuccess(true);
      setMessage("Your message has been sent successfully!");
    }
    
    // You can add your actual submission logic here
  };

  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f0f0f0", fontFamily: 'Open Sans, sans-serif' }}>
      
      <Typography variant="h4" textAlign="center" marginBottom="20px" color="black" fontWeight={700}>
         About Us
        </Typography>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <StyledContactInfo sx={{ marginLeft: "10px", marginTop: "50px", marginBottom: "40px" }}>
            <h2>About Our Digital Marketing Agency</h2>
 Welcome to DigiTech, your strategic partner in the digital landscape. We are a passionate team of creative thinkers, tech enthusiasts, and marketing experts who thrive on transforming ideas into impactful digital experiences.

<h2>Our Story</h2>
 Founded in 2023, DigiTech was born out of a shared vision to empower businesses of all sizes with the digital tools they need to succeed in today's competitive market. With a blend of innovation and expertise, we embarked on a journey to help brands navigate the dynamic world of digital marketing.

 <h2>Our Mission</h2>
 At DigiTech, our mission is to craft digital strategies that deliver tangible results. We believe in driving real business growth by leveraging the power of data-driven insights, cutting-edge technology, and creative storytelling. Our aim is to become an extension of your team, working collaboratively to achieve your business objectives.
            </StyledContactInfo>
          </Grid>
          <Grid item xs={6}>
            <StyledContactInfo sx={{ marginLeft: "10px", marginTop: "50px", marginBottom: "40px" }}>
              <Slideshow /> {/* Use the Slideshow component here */}
            </StyledContactInfo>
          </Grid>
        </Grid>
      </Container>
      <Button
          variant="contained"
          sx={{
            margin: "20px auto",
            display: "block",
            backgroundColor: "white", // Blue background color
            color: "red", // White text color
            border: "2px solid red", // Orange border
            "&:hover": {
              backgroundColor: "grey", // Darker blue background color on hover
            },
          }}
        >
          Explore More
        </Button>
      <Container maxWidth="lg">
      <Typography variant="h4" textAlign="center" marginTop="50px" marginBottom="20px" color="black" fontWeight={700}>
          What Clients Say About Us
        </Typography>
        
        <Grid container spacing={3}>
          {clientFeedback.map((feedback, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px" }}>
                <Typography variant="body1" gutterBottom>
                  {feedback}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        <Typography variant="h4" textAlign="center" marginTop="50px" marginBottom="20px" color="black" fontWeight={700}>
          Contact Us
        </Typography>
        
        {success ? (
          <Typography variant="body1" sx={{ color: "green" }}>
            {message}
          </Typography>   
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
            onChange={(e)=>{setSuggestions(e.target.value)}}
             value = {suggetions}
              variant="outlined"
              placeholder="Please let us know your doubts or problems"
              fullWidth
              margin="dense"
              sx={{ marginBottom: "20px" }}
            />
            <Button
          type="submit"
          variant="contained"
          endIcon={<Send />}
          sx={{
            display: "flex",
            alignItems: "center", // Align items vertically
            justifyContent: "center", // Align items horizontally
            margin: "20px auto",
            backgroundColor: "#007bff",
            color: "#ffffff",
            borderRadius: "8px",
            padding: "12px 24px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          <Typography variant="body1" sx={{ marginRight: "0px" }}>Send</Typography>
         
        </Button>
          </form>
        )}
      </Container>
    </Box>
  );
};

export default About;
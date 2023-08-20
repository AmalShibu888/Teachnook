
import { Box, Button, Typography } from "@mui/material";
import Bimal from "../images/background.jpg";
import Navbar from "./Navbar";
import Footer from './Footer'; 
const styles = {
  name: {
    fontWeight: "bold",
   
    color: "#00bfff",
  },
  heading: {
    color: "#ffffff", 
  },
  mainContainer: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${Bimal}) center/cover no-repeat`, // Use image as background
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent black overlay
    backdropFilter: "blur(5px)", // Add a blur effect to the overlay
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  contentBox: {
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#00bfff", // Change button color to tech-like blue
    color: "#fff", // Change button text color to white
  },
};

const Home = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.overlay}>
        <Typography variant="h6">
          Welcome to <span style={styles.name}>DIGITECH</span>
        </Typography>
        <Typography style={styles.heading} variant="h3">
          Helping businesses reach new heights
        </Typography>
      <Typography variant="body1" sx={{color:"white"}}>
          Your Ultimate Destination for Unleashing Online Success! Are you
          ready to skyrocket your brand's online presence? Look no further! At
          DIGITECH, we specialize in crafting tailored strategies that transform
          your digital dreams into reality.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "30px",color:"white" }}>
          {/* 36,000+ satisfied customers
        </Typography>
         <Typography variant="body1" sx={{ maxWidth: "1000px", margin: "0 auto" }}> */}
          Ready to take your brand to the next level? Contact us today for a free consultation and let's discuss how we can help your business grow online.
        </Typography>
        <Button variant="contained" sx={styles.button}>
          Get started
        </Button>
      </Box>
    </Box>
  );
};

export default Home;



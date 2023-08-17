import { Box, Button, Container, Typography } from "@mui/material";


const clientFeedback = [
    "Working with DIGITECH has been a game-changer for our business. Their expertise in email marketting has transformed our online presence and boosted our sales. Their team's dedication and strategic approach are truly commendable. - Client A",
    
    "I can't thank DIGITECH enough for their exceptional digital marketting services. They not only delivered results beyond our expectations but also took the time to understand our unique needs. Their personalized approach sets them apart. - Client B",
    
    "Collaborating with DIGITECH was a breath of fresh air. Their creativity, attention to detail, and commitment to deadlines impressed us. Our [specific project] wouldn't have been a success without their expertise. - Client C",
    
    "From day one, it was evident that DIGITECH is passionate about their clients' success. Their transparent communication and willingness to go the extra mile have made them our go-to partner for [specific service]. - Client D",
    
    "I've worked with several IT companies, but none have matched the level of professionalism and results that DIGITECH consistently delivers. Their team's insights and dedication have made a significant impact on our business growth. - Client E",
    
    "Choosing DIGITECH was one of the best decisions we made for our brand. Their digital marketting services not only increased our brand visibility but also enhanced customer engagement. Their results-driven approach speaks volumes. - Client F",
    
    "It's rare to find a company that genuinely cares about its clients' success. DIGITECH not only met our expectations but exceeded them. Their expertise, integrity, and dedication are truly remarkable. - Client G"
  ];
  
  const styles = {
    input :{
        width : "100%",
        padding : 5,
        margin : " 20px 0px",
        border : "2px  solid  black",
        borderRadius : "10px"
    },
    button : {
        margin : "auto",
        display : "block"
    }
  }
const About = () => {
  return (
    <Box style = {{padding : "10px"}}>
        <Container>
            <Typography variant="h3" textAlign="center" margin="10px 0px">What Clients tell about us</Typography>
            {clientFeedback.map((feedback , index)=>(
                <Typography variant="body1" margin="20px 0px" key={index}>{feedback}</Typography>
            ))}
            <Typography variant="h3" textAlign="center" margin="10px 0px">We take quieries here</Typography>
            <input type="text" style={styles.input} placeholder=" please let us know your doubts or problems"  />
            <Button style= {styles.button} variant="contained">Send</Button>
        </Container>

    </Box>
  )
}

export default About
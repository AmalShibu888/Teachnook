
import {Box, Button, Container, Typography} from "@mui/material"
import Bimal from "../images/BIMAL.jpg"
import Navbar from "./Navbar"

const styles = {
  name : {
      fontWeight :"bold", 
  },
    heading :{
    }, 
    Bimal :{
      height : "60%",

    }
}

const Home = () => {
  return (
      
      <Box sx={{height : "90vh" , display : "flex"   }} >
        
        <Box sx={{width : {xs : "80vw" ,md:"40vw"} , display : "flex" ,flexDirection : "column" , justifyContent : "center" ,alignItems : "start"  , padding : 5}}>
              <Typography  variant="h6">Welcome to <span style={styles.name}>DIGITECH</span> </Typography>
              <Typography style={styles.heading} sx={{ width:{xs: "60vw" , md: "30vw"}, margin : "30px  0px"}} variant="h3">Helping buisness reach new heights</Typography>
              <Typography variant="body1">"Your Ultimate Destination for Unleashing Online Success!

              Are you ready to skyrocket your brand's online presence? Look no further! At DIGITECH, we specialize in crafting tailored strategies that transform your digital dreams into reality.</Typography>
              <Typography sx={{margin : "10px  0px"}} variant="body2">36,000+ satidfied customers</Typography>
              <Button variant="contained" color="secondary">Get started</Button>
          </Box>
          <Box sx={{ display : {xs : "none" , md : "flex"} , alignItems:"center" , justifyContent : "center" ,flexGrow : 1}}>
            <img src={Bimal} style={styles.Bimal} alt="pic" />
          </Box>
      </Box>
  )
}

export default Home
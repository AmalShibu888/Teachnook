import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"

const styles = {
    form :{
        margin : "40px 0px",
        display : "grid",
        gridTemplateColumns : "1fr 1fr",
        gridGap : "40px"
    },
    input :{
        gridColumn : "1/ -1"
    },
    button :{
        display :"block",
         margin : "auto"
    }
}

const ContactUs = () => {
  return (
    <Box>
        <Typography variant="h3" textAlign="center" margin="10px 0px">Connect with us</Typography>   
        <Container>
            <Grid container sx={{backGround : "primary"}}>
                <Grid item xs={6}>
                    <Typography  variant="h4"  textAlign="center">Send your Request</Typography>
                    <form >
                        <Box style={styles.form}>
                            <TextField id="name" label = "Name" required />
                            <TextField id="phone" label = "Phone" required />
                            <TextField id="email" label = "Email" required />
                            <TextField id="subject" label = "Subject" required />
                            <TextField style={styles.input}  id="message" label = "Message" multiline minRows={4} required />
                        </Box>
                        <Button style = {styles.button} variant = "contained" >Send</Button>
                    </form>
                </Grid>
                <Grid item xs={6} >
                    <Typography sx={{marginBottom : "40px"}} variant="h4" textAlign="center">Reach Us</Typography>
                    <Container sx={{ marginLeft : "150px"}}>
                        <Typography variant="body1" >Email  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;     contactus@gmail.com</Typography>
                        <Typography variant="body1" >Phone  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;     +19 48349389</Typography>
                        <Typography variant="body1" >Address  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;     My address</Typography>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default ContactUs
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaHome } from 'react-icons/fa';
import { IoMdCall} from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from "react";

import Axios  from 'axios'


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

const ContactUs = () => {

    const [name , setName] = useState("");
    const [phone , setPhone] = useState(null);
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");
    const [subject , setSubject] = useState("");
const postinfo = async (e)=>{
    // console.log(name)
    if(!name || !phone || !email || !subject || !message){
        return;
    }
    // console.log("y");
    const url = "http://localhost:8081/getqueries";
    const res = await Axios.post(url , {
        name , phone , email , message , subject
    });
    // console.log(res);
    setName("");
    setPhone(null);
    setEmail("");
    setSubject("");
    setMessage("");
    // set
}

  return (
    <Box>
      <Typography variant="h3" textAlign="center" margin="10px 0px">
        Connect with Us
      </Typography>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14395.123086142241!2d91.9204431!3d25.578959450000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750793fe66e5451%3A0xbfc2a03aa1074b28!2sWindermere%20Inn%2C%20Shillong!5e0!3m2!1sen!2sin!4v1692457093169!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Container>
        <Grid container>
        <Grid item xs={6}>
  <StyledContactInfo sx={{ marginLeft: "10px", marginTop: "100px",marginBottom:"300px"}}>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px', color: 'black' }}>
      <FaHome color="red" size='2rem' style={{ marginRight: '20px' }} />
      <div>
        <Typography variant="body1">
          <p style={{marginBottom:'0px'}}>XYZ Road, ABC Building</p>
          <temp style={{marginTop:'0px',  fontSize: '12px', color: '#888888'}}>Shillong,Meghalaya,IN</temp>
        </Typography>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px', color: 'black' }}>
      <IoMdCall color="red" size='2rem' style={{ marginRight: '20px' }} />
      <div>
        <Typography variant="body1">
          <p style={{marginBottom:'0px'}}>+91 7862508715</p>
          <temp style={{marginTop:'0px',  fontSize: '12px', color: '#888888'}}>mondat to Saturday,10AM to 6PM</temp>
        </Typography>
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px', color: 'black' }}>
      <AiOutlineMail color="red" size='2rem' style={{ marginRight: '20px' }} />
      <div>
        <Typography variant="body1">
          <p style={{marginBottom:'0px'}}>digitech@gmail.com </p>
          <temp style={{marginTop:'0px',  fontSize: '12px', color: '#888888'}}>Email us your query</temp>
        </Typography>
      </div>
    </div>
  </StyledContactInfo>
</Grid>


          <Grid item xs={6}>
            <StyledForm sx={{ marginTop: "10px"}}>
              <Box style={styles.form}>
                <TextField value = {name} id="name" onChange={(e)=>{setName(e.target.value)}} label="Name" required />
                <TextField value = {phone} id="phone" onChange={(e)=>{setPhone(e.target.value)}} label="Phone" required />
                <TextField value = {email} id="email" onChange={(e)=>{setEmail(e.target.value)}} label="Email" required />
                <TextField value = {subject} id="subject" onChange={(e)=>{setSubject(e.target.value)}} label="Subject" required />
                <TextField
                  style={styles.input}
                  value = {message}
                  id="message"
                  label="Message"
                  multiline
                  minRows={4}
                  onChange={(e)=>{setMessage(e.target.value)}}
                  required
                />
              </Box>
              <Button 
              onClick={postinfo}
               style={styles.button} variant="contained">
                Send
              </Button>
            </StyledForm>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
import { Box } from "@mui/material";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <Box className="App" height="100vh">

      <Router>
      <Navbar />  
        <Routes>
        
          <Route path="/" element= {<Home/>}/>
          <Route path="/services" element= {<Services/>}/>
          <Route path="/aboutUs" element= {<About/>}/>
          <Route path="/portfolio" element= {<Portfolio/>}/>
          <Route path="/contact" element= {<ContactUs/>}/>
        </Routes>
      </Router>
      


    </Box>
  );
}

export default App;

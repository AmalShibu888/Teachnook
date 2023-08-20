import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Bimal from '../images/BIMAL.jpg'
const ServiceCard = ({title , desc}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={Bimal}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default ServiceCard
// import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
// import React from 'react';
// import Bimal from '../images/BIMAL.jpg';

// const ServiceCard = ({ title, desc }) => {
//   return (
//     <Card sx={{ maxWidth: 345, borderRadius: '10px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}>
//       <CardActionArea>
//         <CardMedia component="img" height="200" image={Bimal} alt="Service Image" />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {desc}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default ServiceCard;
// import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
// import React from "react";
// import Bimal from "../images/BIMAL.jpg";

// const ServiceCard = ({ title, desc, approach, results }) => {
//   return (
//     <Card sx={{ borderRadius: "10px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
//       <CardActionArea>
//         <CardMedia component="img" height="200" image={Bimal} alt="Service Image" />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {desc}
//           </Typography>
//           <Typography variant="subtitle1" color="text.primary" mt={2}>
//             Approach:
//           </Typography>
//           <ul>
//             {approach.map((step, index) => (
//               <li key={index}>{step}</li>
//             ))}
//           </ul>
//           <Typography variant="subtitle1" color="text.primary" mt={2}>
//             Results:
//           </Typography>
//           <ul>
//             {results.map((result, index) => (
//               <li key={index}>{result}</li>
//             ))}
//           </ul>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default ServiceCard;
// import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
// import React from "react";
// import Bimal from "../images/BIMAL.jpg";

// const ServiceCard = ({ title, desc, approach, results }) => {
//   return (
//     <Card
//       sx={{
//         borderRadius: "10px",
//         boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
//         transition: "transform 0.3s, box-shadow 0.3s",
//         "&:hover": {
//           transform: "translateY(-5px)",
//           boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
//         },
//       }}
//     >
//       <CardActionArea>
//         <CardMedia component="img" height="200" image={Bimal} alt="Service Image" />
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h5"
//             component="div"
//             sx={{ color: "#333", marginBottom: "10px" }}
//           >
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "20px" }}>
//             {desc}
//           </Typography>
//           <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: "bold" }}>
//             Approach:
//           </Typography>
//           <ul sx={{ marginLeft: "20px", marginBottom: "10px" }}>
//             {approach.map((step, index) => (
//               <li key={index} sx={{ marginBottom: "5px" }}>
//                 {step}
//               </li>
//             ))}
//           </ul>
//           <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: "bold" }}>
//             Results:
//           </Typography>
//           <ul sx={{ marginLeft: "20px" }}>
//             {results.map((result, index) => (
//               <li key={index} sx={{ marginBottom: "5px" }}>
//                 {result}
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// export default ServiceCard;

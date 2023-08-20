// import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
// import React from "react";
// import Bimal from "../images/BIMAL.jpg";

// const portfoliocard = ({ title, desc, approach, results }) => {
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

// export default portfoliocard;
// import React from 'react';
// import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

// const portfoliocard = ({ title, desc, approach, results, image }) => {
//   return (
//     <Card sx={{ display: 'flex', alignItems: 'center', padding: '20px', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)' }}>
//       <CardMedia component="img" height="200" image={image} alt={title} sx={{ flex: '2/3' }} />
//       <CardContent sx={{ flex: '1/3' }}>
//         <Typography variant="h6" color="text.primary" gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" marginBottom="20px">
//           {desc}
//         </Typography>
//         <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
//           Approach:
//         </Typography>
//         <ul sx={{ marginLeft: '20px', marginBottom: '10px' }}>
//           {approach.map((step, index) => (
//             <li key={index} sx={{ marginBottom: '5px' }}>
//               {step}
//             </li>
//           ))}
//         </ul>
//         <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
//           Results:
//         </Typography>
//         <ul sx={{ marginLeft: '20px' }}>
//           {results.map((result, index) => (
//             <li key={index} sx={{ marginBottom: '5px' }}>
//               {result}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// };


// import React, { useState } from 'react';
// import { Box, Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

// const Portfoliocard = ({ title, desc, approach, results, image }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Card
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         padding: '20px',
//         boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
//         transition: 'transform 0.3s, box-shadow 0.3s',
//         '&:hover': {
//           transform: 'translateY(-5px)',
//           boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
//         },
//       }}
//     >
//       <CardActionArea sx={{ flex: '2/3' }}>
//         <CardMedia component="img" height="200" image={image} alt={title} sx={{ width: '100%', height: '100%' }} />
//         {isHovered && (
//           <Typography
//             variant="subtitle1"
//             color="text.primary"
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               backgroundColor: 'rgba(0, 0, 0, 0.8)',
//               color: 'white',
//               padding: '8px 12px',
//               borderRadius: '5px',
//             }}
//           >
//             {title}
//           </Typography>
//         )}
//       </CardActionArea>
//       <CardContent sx={{ flex: '1/3' }}>
//         <Typography variant="h6" color="text.primary" gutterBottom>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" marginBottom="20px">
//           {desc}
//         </Typography>
//         <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
//           Approach:
//         </Typography>
//         <ul sx={{ marginLeft: '20px', marginBottom: '10px' }}>
//           {approach.map((step, index) => (
//             <li key={index} sx={{ marginBottom: '5px' }}>
//               {step}
//             </li>
//           ))}
//         </ul>
//         <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
//           Results:
//         </Typography>
//         <ul sx={{ marginLeft: '20px' }}>
//           {results.map((result, index) => (
//             <li key={index} sx={{ marginBottom: '5px' }}>
//               {result}
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// };
// export default portfoliocard;
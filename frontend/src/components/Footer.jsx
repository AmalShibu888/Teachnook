// import React from "react";
// import { Box, Container, Divider, Link, TextField, Typography } from "@mui/material";

// const pages = [
//   { name: 'Home', url: "/" },
//   { name: 'Services', url: "/services" },
//   { name: 'About Us', url: "/aboutUs" },
//   { name: 'Portfolio', url: "/portfolio" },
//   { name: 'Contact Us', url: "/ContactUs" }
// ];

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "black",
//         color: "white",
//         paddingTop: 4,
//         paddingBottom: 2,
//         marginTop: 0,
//       }}
//     >
//       <Container maxWidth="xl">
//         <Typography variant="h6" sx={{ fontWeight: 700, marginBottom: 2 }}>
//           Stay Connected
//         </Typography>
//         <Typography variant="body2" sx={{ marginBottom: 0 }}>
//           Join our newsletter to receive updates and special offers.
//         </Typography>
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           size="small"
//           sx={{ marginBottom: 0 }}
//         />
//         <Divider sx={{ marginBottom: 2 }} />
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <Typography variant="body2" sx={{ marginBottom: 1 }}>
//             © {new Date().getFullYear()} DIGITECH. All rights reserved.
//           </Typography>
//           <Box sx={{ display: "flex", gap: 2 }}>
//             <Link href="#" color="inherit">
//               Terms of Service
//             </Link>
//             <Link href="#" color="inherit">
//               Privacy Policy
//             </Link>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
import React from "react";
import { Box, Container, Divider, Link, TextField, Typography } from "@mui/material";

const pages = [
  { name: 'Home', url: "/" },
  { name: 'Services', url: "/services" },
  { name: 'About Us', url: "/aboutUs" },
  { name: 'Portfolio', url: "/portfolio" },
  { name: 'Contact Us', url: "/contact" }
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "white",
        paddingTop: 4,
        paddingBottom: 2,
        marginTop: 2,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Stay Connected
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Join our newsletter to receive updates and special offers.
          </Typography>
         
        </Box>
        <Divider sx={{ marginBottom: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            © {new Date().getFullYear()} DIGITECH. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit">
              Terms of Service
            </Link>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

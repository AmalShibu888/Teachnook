// // import { Box, Grid, Typography  } from '@mui/material'
// // import React from 'react'
// // import ServiceCard from './ServiceCard'

// // const services = [ {title : 'Email Marketting' , desc :`Unlock the Power of Personalized Communication with Our Email Marketing Service!

// // Are you ready to take your marketing efforts to the next level? Our cutting-edge email marketing service empowers businesses to connect with their audience like never before. With our expertise, you can deliver tailored messages directly to your customers' inboxes, building strong relationships and driving conversions.`},
// // {title : 'SEO Management' , desc : `Elevate Your Online Presence with Our Premier SEO Management Service!

// // Are you ready to dominate the digital landscape and reach the top of search engine results? Our unparalleled SEO management service empowers businesses to skyrocket their online visibility, drive organic traffic, and outshine the competition.`},

// // { title : "Content Writter" , desc : `Unlock the Power of Words with Our Exceptional Content Writer Service!

// // Is your brand's voice struggling to be heard? Our premium content writer service is your solution to crafting compelling narratives that captivate, inform, and engage your audience like never before.`},
// // {title : "Buisness Strategy" , desc : `Shape Your Future with Our Premier Business Strategy Services!

// // Is your business sailing in uncertain waters? Our dynamic business strategy services are designed to guide you through challenges and chart a course toward sustainable growth and success.`}, 
// // {title : "Social Media Management" , desc : `Ignite Your Brand's Presence with Our Cutting-Edge Social Media Marketing Services!

// // Is your brand ready to shine on the world's most dynamic platforms? Our exceptional social media marketing services are your gateway to building a thriving online community, driving engagement, and making a lasting impact.`}
// // ]

// // const Services = () => {
// //   return (
// //     <Box sx={{margin : "20px 20px"}}>
// //         <Typography  variant='h4' textAlign="center">We provide the best services for you</Typography>

// //         <Grid container spacing={2}>{
// //             services.map((service , index) =>(
// //                 <Grid item xs={4} key={index}><ServiceCard {...service}/> </Grid>
// //             ))
// //         }
            
// //         </Grid>
// //     </Box>
// //   )
// // }

// // export default Services
// import { Box, Grid, Typography } from '@mui/material';
// import React from 'react';
// import ServiceCard from './ServiceCard';

// const services = [
//   {
//     title: 'Email Marketing',
//     desc: `Unlock the Power of Personalized Communication with Our Email Marketing Service!

//     Ready to take your marketing efforts to the next level? Our cutting-edge email marketing service empowers businesses to connect with their audience like never before. With our expertise, you can deliver tailored messages directly to your customers' inboxes, building strong relationships and driving conversions.`,
//   },
//   {
//     title: 'SEO Management',
//     desc: `Elevate Your Online Presence with Our Premier SEO Management Service!

//     Ready to dominate the digital landscape and reach the top of search engine results? Our unparalleled SEO management service empowers businesses to skyrocket their online visibility, drive organic traffic, and outshine the competition.`,
//   },
//   {
//     title: "Content Writer",
//     desc: `Unlock the Power of Words with Our Exceptional Content Writer Service!

//     Is your brand's voice struggling to be heard? Our premium content writer service is your solution to crafting compelling narratives that captivate, inform, and engage your audience like never before.`,
//   },
//   {
//     title: "Business Strategy",
//     desc: `Shape Your Future with Our Premier Business Strategy Services!

//     Is your business sailing in uncertain waters? Our dynamic business strategy services are designed to guide you through challenges and chart a course toward sustainable growth and success.`,
//   },
//   {
//     title: "Social Media Management",
//     desc: `Ignite Your Brand's Presence with Our Cutting-Edge Social Media Marketing Services!

//     Is your brand ready to shine on the world's most dynamic platforms? Our exceptional social media marketing services are your gateway to building a thriving online community, driving engagement, and making a lasting impact.`,
//   }
// ];
// const Services = () => {
//   return (
//     <Box
//       sx={{
//         margin: "20px",
//         padding: "40px",
//         backgroundColor: "var(--base-3)",
//         color: "var(--contrast)",
//         borderRadius: "20px", // Adjusted borderRadius
//         boxShadow: "6px 6px 9px rgba(0, 0, 0, 0.2)", // Adjusted boxShadow
//       }}
//     >
//       <Typography
//         variant='h4'
//         textAlign="center"
//         sx={{
//           color: 'var(--accent)', // Change color
//           marginBottom: '30px',
//           fontWeight: 700,
//           letterSpacing: '.1rem',
//         }}
//       >
//         Empower Your Business with Our Futuristic Services
//       </Typography>

//       <Grid container spacing={3}>
//         {services.map((service, index) => (
//           <Grid item xs={12} md={6} key={index}>
//             <ServiceCard {...service} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }

// export default Services;







// // const Services = () => {
// //   return (
// //     <Box
// //       sx={{
// //         margin: "20px",
// //         padding: "40px",
// //         backgroundColor: "#fff",
// //         borderRadius: "20px", // Add border radius for curved edges
// //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
// //       }}
// //     >
// //       <Typography
// //         variant='h4'
// //         textAlign="center"
// //         sx={{
// //           color: '#00bfff',
// //           marginBottom: '30px',
// //           fontWeight: 700,
// //         }}
// //       >
// //         Empower are your strategic digital partners
// //       </Typography>

// //       <Grid container spacing={3}>
// //         {services.map((service, index) => (
// //           <Grid item xs={12} md={6} key={index}>
// //             <ServiceCard {...service} />
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // }

// // export default Services;
import React from "react";
import './Service.css';

function Serives ()  {
    return (
        <div className="service component__space" id="Services"  style={{ backgroundColor: '#1a1a1a',marginBottom:"0px"}}>
            <div className="heading"style={{ backgroundColor: '#1a1a1a'}} >
                <h1 className="heading" style = {{marginTop : "0px", paddingTop:"10px", color:"white"}}>Our Awesome Service</h1>
                <p className="heading p__color" style = {{ color:"white"}}>
                Empower Your Business with Our Futuristic Services
                </p>
               
            </div>

            <div className="container" style = {{margin : "10px", paddingTop:"10px",marginBottom:"0px"}}>
                <div className="row">

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Social Media Management</h1>
                               
                                <p className="p service__text p__color">
                                  Ignite Your Brand's Presence with Our Cutting-Edge Social Media Marketing Services!
                                </p>
                                <p className="p service__text p__color">
                                    Is your brand ready to shine on the world's most dynamic platforms? Our exceptional social media marketing services are your gateway to building a thriving online community, driving engagement, and making a lasting impact.`,

                                </p>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Email Marketing</h1>
 
                                <p className="p service__text p__color">
                                Unlock the Power of Personalized Communication with Our Email Marketing Service
                                </p>
                                <p className="p service__text p__color">
                                Ready to take your marketing efforts to the next level? Our cutting-edge email marketing service empowers businesses to connect with their audience like never before. With our expertise, you can deliver tailored messages directly to your customers' inboxes, building strong relationships and driving conversions.`,

                                </p>
                               
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Business Strategy</h1>
                              
                                <p className="p service__text p__color">
                                Shape Your Future with Our Premier Business Strategy Services
                                </p>
                                <p className="p service__text p__color">
                                Is your business sailing in uncertain waters? Our dynamic business strategy services are designed to guide you through challenges and chart a course toward sustainable growth and success.`,

                                </p>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">SEO Management</h1>
                              
                                <p className="p service__text p__color">
                                Elevate Your Online Presence with Our Premier SEO Management Service 
                                </p>
                                <p className="p service__text p__color">
                                Ready to dominate the digital landscape and reach the top of search engine results? Our unparalleled SEO management service empowers businesses to skyrocket their online visibility, drive organic traffic, and outshine the competition.`,

                                </p>
                               
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Video Production</h1>
                                <p className="p service__text p__color">
                                Elevate Your Online Presence with Our Professional Video Production
                                </p>
                                <p className="p service__text p__color">
                                Capture attention with captivating videos! Our professional video production team crafts visually compelling content that tells your story. Engage, inform, and leave a lasting impact
                                </p>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3" style={{marginBottom:"0px"}}>
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Content Writer</h1>
                                
                                <p className="p service__text p__color">
                                Unlock the Power of Words with Our Exceptional Content Writer Service
                                </p>
                                <p className="p service__text p__color">
                                Is your brand's voice struggling to be heard? Our premium content writer service is your solution to crafting compelling narratives that captivate, inform, and engage your audience like never before.`,

                                </p>
                                
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Serives;
 
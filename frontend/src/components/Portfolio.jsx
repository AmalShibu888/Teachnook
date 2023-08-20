// import { Box, Grid, Typography } from "@mui/material"
// import ServiceCard from "./portfoliocard"
// const projects = [
//     {
//       "title": "Email Marketing Automation for EFG E-commerce",
//       "desc": "Streamlined email marketing efforts for an online electronics retailer to boost customer engagement and drive repeat purchases through personalized email campaigns.",
//       "approach": [
//         "Segmented customers based on purchasing behavior and demographics.",
//         "Implemented an email marketing automation platform for targeted campaigns.",
//         "Developed personalized product recommendations, onboarding emails, and re-engagement campaigns.",
//         "Monitored email performance metrics for ongoing optimization."
//       ],
//       "results": [
//         "25% increase in email open rates through personalization.",
//         "30% higher click-through rates for targeted product recommendations.",
//         "20% increase in repeat purchases among engaged customers.",
//         "15% improvement in customer retention due to re-engagement efforts."
//       ]
//     },
//     {
//       "title": "Influencer Marketing Collaboration for HIJ Beauty Brands",
//       "desc": "Utilized influencer marketing to enhance brand awareness and credibility for a natural skincare products collection through collaborations with beauty influencers.",
//       "approach": [
//         "Researched and selected relevant beauty influencers aligned with the brand's values.",
//         "Initiated partnerships for sponsored posts, reviews, and giveaways.",
//         "Provided influencers with exclusive products and creative content ideas.",
//         "Tracked influencer-generated content, engagement, and website traffic."
//       ],
//       "results": [
//         "50% expanded brand reach via influencer-generated content.",
//         "Over 10,000 new social media followers due to influencer collaborations.",
//         "15% increase in website traffic attributed to influencer partnerships.",
//         "Enhanced brand credibility through influencer endorsements."
//       ]
//     },
//     {
//       "title": "Video Content Strategy for KLM Culinary School",
//       "desc": "Developed a comprehensive video content strategy for a prestigious cooking institute to showcase its expertise, curriculum, and unique culinary education approach.",
//       "approach": [
//         "Analyzed key aspects of the culinary school for impactful content creation.",
//         "Produced high-quality videos: virtual tours, cooking tutorials, student testimonials, and more.",
//         "Distributed content across platforms like YouTube, Instagram, and the school's website.",
//         "Utilized targeted advertising to attract aspiring chefs and culinary enthusiasts."
//       ],
//       "results": [
//         "Over 100,000 combined views across video content platforms.",
//         "30% increase in website inquiries and course applications through video engagement.",
//         "Enhanced brand awareness and reputation within the culinary education space.",
//         "Established a dedicated audience of culinary enthusiasts and potential students."
//       ]
//     },{
//         "title": "Website Redesign for LMN Fitness Studio",
//         "desc": "Revamped the website of a local fitness studio to enhance user experience, increase online class bookings, and showcase fitness services effectively.",
//         "approach": [
//           "Conducted a thorough analysis of the existing website's usability and design.",
//           "Collaborated with UI/UX designers to create a modern and user-friendly website layout.",
//           "Optimized the booking process for online class reservations.",
//           "Implemented responsive design for seamless viewing on various devices.",
//           "Integrated customer testimonials and before-after images to highlight success stories."
//         ],
//         "results": [
//           "40% increase in online class bookings due to improved booking process.",
//           "25% longer average session duration on the website.",
//           "Enhanced brand perception through visually appealing design.",
//           "Improved mobile responsiveness leading to a 15% increase in mobile traffic."
//         ]
//       },
//       {
//         "title": "Content Localization for OPQ Global",
//         "desc": "Localized content for a multinational company, OPQ Global, to connect with diverse audiences across different regions and cultures, ensuring consistency and cultural sensitivity.",
//         "approach": [
//           "Identified target markets and conducted cultural research for each region.",
//           "Translated website content, marketing materials, and product information accurately.",
//           "Adapted marketing campaigns to resonate with local customs, languages, and preferences.",
//           "Conducted A/B tests to determine the most effective localization strategies."
//         ],
//         "results": [
//           "Increased engagement by 35% in target regions through culturally relevant content.",
//           "Expanded customer base in international markets by 20%.",
//           "Improved brand perception by demonstrating respect for local languages and customs.",
//           "Consistent and accurate communication across diverse markets."
//         ]
//       },
//       {
//         "title": "Search Engine Optimization (SEO) for RST Law Firm",
//         "desc": "Implemented a comprehensive SEO strategy for a law firm, RST Law, to improve organic search visibility, increase website traffic, and attract potential clients seeking legal services.",
//         "approach": [
//           "Conducted an in-depth SEO audit to identify technical and content-related issues.",
//           "Researched relevant legal keywords and optimized website content accordingly.",
//           "Optimized meta tags, headers, and internal linking structure for search engines.",
//           "Built high-quality backlinks from legal directories and authoritative websites.",
//           "Monitored search rankings, organic traffic, and conversion rates for ongoing adjustments."
//         ],
//         "results": [
//           "Achieved a 50% increase in organic search traffic within six months.",
//           "Top search rankings for targeted legal keywords resulted in a 40% rise in website inquiries.",
//           "Enhanced online visibility led to a 25% increase in new client acquisitions.",
//           "Established RST Law Firm as a reputable authority in legal services within the digital landscape."
//         ]
//       }
//   ]
  
  
//   const Portfolio = () => {
//     return (
//       <Box sx={{ padding: "20px" }}>
//         <Typography variant="h3" textAlign="center" margin="10px 0px">
//           Projects Done by Us
//         </Typography>
//         <Grid container spacing={2}>
//           {projects.map((project, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <ServiceCard {...project} />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   };
//   export default Portfolio;



// import React from 'react';
// import { Box, Grid, Typography } from '@mui/material';
// import ServiceCard from './portfoliocard'; // Import your ServiceCard component

// const projects = [
//     {
//       "title": "Email Marketing Automation for EFG E-commerce",
//       "desc": "Streamlined email marketing efforts for an online electronics retailer to boost customer engagement and drive repeat purchases through personalized email campaigns.",
//       "approach": [
//         "Segmented customers based on purchasing behavior and demographics.",
//         "Implemented an email marketing automation platform for targeted campaigns.",
//         "Developed personalized product recommendations, onboarding emails, and re-engagement campaigns.",
//         "Monitored email performance metrics for ongoing optimization."
//       ],
//       "results": [
//         "25% increase in email open rates through personalization.",
//         "30% higher click-through rates for targeted product recommendations.",
//         "20% increase in repeat purchases among engaged customers.",
//         "15% improvement in customer retention due to re-engagement efforts."
//       ]
//     },
//     {
//       "title": "Influencer Marketing Collaboration for HIJ Beauty Brands",
//       "desc": "Utilized influencer marketing to enhance brand awareness and credibility for a natural skincare products collection through collaborations with beauty influencers.",
//       "approach": [
//         "Researched and selected relevant beauty influencers aligned with the brand's values.",
//         "Initiated partnerships for sponsored posts, reviews, and giveaways.",
//         "Provided influencers with exclusive products and creative content ideas.",
//         "Tracked influencer-generated content, engagement, and website traffic."
//       ],
//       "results": [
//         "50% expanded brand reach via influencer-generated content.",
//         "Over 10,000 new social media followers due to influencer collaborations.",
//         "15% increase in website traffic attributed to influencer partnerships.",
//         "Enhanced brand credibility through influencer endorsements."
//       ]
//     },
//     {
//       "title": "Video Content Strategy for KLM Culinary School",
//       "desc": "Developed a comprehensive video content strategy for a prestigious cooking institute to showcase its expertise, curriculum, and unique culinary education approach.",
//       "approach": [
//         "Analyzed key aspects of the culinary school for impactful content creation.",
//         "Produced high-quality videos: virtual tours, cooking tutorials, student testimonials, and more.",
//         "Distributed content across platforms like YouTube, Instagram, and the school's website.",
//         "Utilized targeted advertising to attract aspiring chefs and culinary enthusiasts."
//       ],
//       "results": [
//         "Over 100,000 combined views across video content platforms.",
//         "30% increase in website inquiries and course applications through video engagement.",
//         "Enhanced brand awareness and reputation within the culinary education space.",
//         "Established a dedicated audience of culinary enthusiasts and potential students."
//       ]
//     },{
//         "title": "Website Redesign for LMN Fitness Studio",
//         "desc": "Revamped the website of a local fitness studio to enhance user experience, increase online class bookings, and showcase fitness services effectively.",
//         "approach": [
//           "Conducted a thorough analysis of the existing website's usability and design.",
//           "Collaborated with UI/UX designers to create a modern and user-friendly website layout.",
//           "Optimized the booking process for online class reservations.",
//           "Implemented responsive design for seamless viewing on various devices.",
//           "Integrated customer testimonials and before-after images to highlight success stories."
//         ],
//         "results": [
//           "40% increase in online class bookings due to improved booking process.",
//           "25% longer average session duration on the website.",
//           "Enhanced brand perception through visually appealing design.",
//           "Improved mobile responsiveness leading to a 15% increase in mobile traffic."
//         ]
//       },
//       {
//         "title": "Content Localization for OPQ Global",
//         "desc": "Localized content for a multinational company, OPQ Global, to connect with diverse audiences across different regions and cultures, ensuring consistency and cultural sensitivity.",
//         "approach": [
//           "Identified target markets and conducted cultural research for each region.",
//           "Translated website content, marketing materials, and product information accurately.",
//           "Adapted marketing campaigns to resonate with local customs, languages, and preferences.",
//           "Conducted A/B tests to determine the most effective localization strategies."
//         ],
//         "results": [
//           "Increased engagement by 35% in target regions through culturally relevant content.",
//           "Expanded customer base in international markets by 20%.",
//           "Improved brand perception by demonstrating respect for local languages and customs.",
//           "Consistent and accurate communication across diverse markets."
//         ]
//       },
//       {
//         "title": "Search Engine Optimization (SEO) for RST Law Firm",
//         "desc": "Implemented a comprehensive SEO strategy for a law firm, RST Law, to improve organic search visibility, increase website traffic, and attract potential clients seeking legal services.",
//         "approach": [
//           "Conducted an in-depth SEO audit to identify technical and content-related issues.",
//           "Researched relevant legal keywords and optimized website content accordingly.",
//           "Optimized meta tags, headers, and internal linking structure for search engines.",
//           "Built high-quality backlinks from legal directories and authoritative websites.",
//           "Monitored search rankings, organic traffic, and conversion rates for ongoing adjustments."
//         ],
//         "results": [
//           "Achieved a 50% increase in organic search traffic within six months.",
//           "Top search rankings for targeted legal keywords resulted in a 40% rise in website inquiries.",
//           "Enhanced online visibility led to a 25% increase in new client acquisitions.",
//           "Established RST Law Firm as a reputable authority in legal services within the digital landscape."
//         ]
//       }
//   ]
//   const Portfolio = () => {
//     return (
//       <Box sx={{ padding: '40px', backgroundColor: 'white', marginLeft: '200px', marginRight: '200px' }}>
//         <Typography variant="h4" textAlign="center" marginBottom="20px" color="black" fontWeight={700}>
//           Projects Done by Us
//         </Typography>
//         <Grid container spacing={2}>
//           {projects.map((project, index) => (
//             <Grid item xs={12} key={index}>
//               <Portfoliocard {...project} />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     );
//   };
  
//   export default Portfolio;
// import React, { useState } from 'react';
// import { Box, Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
// import image1 from '../images/image1.jpg';
// import image2 from '../images/image2.jpg';
// import image3 from '../images/image3.jpg';
// import image4 from '../images/image4.jpg';
// import image5 from '../images/image5.jpg';
// const images = [
//   { src: image1, title: 'Image 1', description:
//   'Search Engine Optimization (SEO) for RST Law Firm\n' +
//   'Implemented a comprehensive SEO strategy for a law firm, RST Law, to improve organic search visibility, increase website traffic, and attract potential clients seeking legal services.\n\n' +
//   'Approach:\n' +
//   '- Conducted an in-depth SEO audit to identify technical and content-related issues.\n' +
//   '- Researched relevant legal keywords and optimized website content accordingly.\n' +
//   '- Optimized meta tags, headers, and internal linking structure for search engines.\n' +
//   '- Built high-quality backlinks from legal directories and authoritative websites.\n' +
//   '- Monitored search rankings, organic traffic, and conversion rates for ongoing adjustments.\n\n' +
//   'Results:\n' +
//   '- Achieved a 50% increase in organic search traffic within six months.\n' +
//   '- Top search rankings for targeted legal keywords resulted in a 40% rise in website inquiries.\n' +
//   '- Enhanced online visibility led to a 25% increase in new client acquisitions.\n' +
//   '- Established RST Law Firm as a reputable authority in legal services within the digital landscape.',},
//   { src: image2, title: 'Image 2', description: 'Description for Image 2' },
//   { src: image3, title: 'Image 3', description: 'Description for Image 3' },
//   {src: image3, title: 'Image 3', description: 'Description for Image 3' },
//  { src: image3, title: 'Image 3', description: 'Description for Image 3' },
//   // ... Add more images here
// ];

// const Portfolio = () => {
//   const [hoveredImage, setHoveredImage] = useState(null);

//   const handleImageHover = (index) => {
//     setHoveredImage(index);
//   };

//   const handleImageLeave = () => {
//     setHoveredImage(null);
//   };

//   return (
//     <Box sx={{ padding: '40px', backgroundColor: 'white', marginLeft: '200px', marginRight: '200px' }}>
//       <Typography variant="h4" textAlign="center" marginBottom="20px" color="black" fontWeight={700}>
//         Portfolio
//       </Typography>
//       <Grid container spacing={2}>
//         {images.map((image, index) => (
//           <Grid item xs={12} key={index}>
//             <Card
//               sx={{
//                 position: 'relative',
//                 '&:hover': {
//                   cursor: 'pointer',
//                 },
//               }}
//               onMouseEnter={() => handleImageHover(index)}
//               onMouseLeave={handleImageLeave}
//             >
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="400px"
//                   image={image.src}
//                   alt={image.title}
//                   sx={{  height: '400px' }}
//                 />
//                 {hoveredImage === index && (
//                   <CardContent
//                     sx={{
//                       position: 'absolute',
//                       bottom: 0,
//                       backgroundColor: 'rgba(0, 0, 0, 0.8)',
//                       color: 'white',
//                       width: '100%',
//                       padding: '8px',
//                       textAlign: 'center',
//                       borderRadius: '0 0 5px 5px',
//                     }}
//                   >
//                     <Typography variant="subtitle1">{image.title}</Typography>
//                     <Typography variant="body2" sx={{ textAlign: 'center' }}>
//                     {image.description}
//                   </Typography>
//                   </CardContent>
//                 )}
//               </CardActionArea>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Portfolio;
// import { styled } from "@mui/system";
import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardActionArea, CardContent,Button, CardMedia } from '@mui/material';
import image1 from '../images/image6.jpg';
import image2 from '../images/image7.jpg';
import image3 from '../images/image8.jpg';
import image4 from '../images/image9.jpg';
import image5 from '../images/image10.jpg';
import { MdOutlineOpenInNew } from 'react-icons/md';

const images = [
  {
    src: image1,
    title: 'Search Engine Optimization (SEO) for RST Law Firm',
    description: (
      <div>
        <span>
          
          Implemented a comprehensive SEO strategy for a law firm, RST Law, to improve organic search visibility, increase website traffic, and attract potential clients seeking legal services.
        </span>
        <br />
        <br />
        <span>
          Approach:
          <br />
          - Conducted an in-depth SEO audit to identify technical and content-related issues.
          <br />
          - Researched relevant legal keywords and optimized website content accordingly.
          <br />
          - Optimized meta tags, headers, and internal linking structure for search engines.
          <br />
          - Built high-quality backlinks from legal directories and authoritative websites.
          <br />
          - Monitored search rankings, organic traffic, and conversion rates for ongoing adjustments.
        </span>
        <br />
        <br />
        <span>
          Results:
          <br />
          - Achieved a 50% increase in organic search traffic within six months.
          <br />
          - Top search rankings for targeted legal keywords resulted in a 40% rise in website inquiries.
          <br />
          - Enhanced online visibility led to a 25% increase in new client acquisitions.
          <br />
          - Established RST Law Firm as a reputable authority in legal services within the digital landscape.
        </span>
        <Button
          variant="contained"
          sx={{
            margin: "20px auto",
            display: "block",
            backgroundColor: "transparent", // Blue background color
            color: "white", // White text color
            border: "2px solid white", // Orange border
            "&:hover": {
              backgroundColor: "grey", // Darker blue background color on hover
            },
          }}
        >
          Explore More
        </Button>
      </div>
    ),
  },
  {
    src: image2,
    title: 'Influencer Marketing Collaboration for HIJ Beauty Brands',
    description: (
      <div>
        <span>
          Utilized influencer marketing to enhance brand awareness and credibility for a natural skincare products collection through collaborations with beauty influencers.
        </span>
        <br />
        <br />
        <span>
          Approach:
          <br />
          - Researched and selected relevant beauty influencers aligned with the brand's values.
          <br />
          - Initiated partnerships for sponsored posts, reviews, and giveaways.
          <br />
          - Provided influencers with exclusive products and creative content ideas.
          <br />
          - Tracked influencer-generated content, engagement, and website traffic.
        </span>
        <br />
        <br />
        <span>
          Results:
          <br />
          - 50% expanded brand reach via influencer-generated content.
          <br />
          - Over 10,000 new social media followers due to influencer collaborations.
          <br />
          - 15% increase in website traffic attributed to influencer partnerships.
          <br />
          - Enhanced brand credibility through influencer endorsements.
        </span>
        <Button
          variant="contained"
          sx={{
            margin: "20px auto",
            display: "block",
            backgroundColor: "transparent", // Blue background color
            color: "white", // White text color
            border: "2px solid white", // Orange border
            "&:hover": {
              backgroundColor: "grey", // Darker blue background color on hover
            },
          }}
        >
          Explore More
        </Button>
      </div>
    ),
  },
  {
    src: image3,
    title: 'Video Content Strategy for KLM Culinary School',
    description: (
      <div>
        <span>
          Developed a comprehensive video content strategy for a prestigious cooking institute to showcase its expertise, curriculum, and unique culinary education approach.
        </span>
        <br />
        <br />
        <span>
          Approach:
          <br />
          - Analyzed key aspects of the culinary school for impactful content creation.
          <br />
          - Produced high-quality videos: virtual tours, cooking tutorials, student testimonials, and more.
          <br />
          - Distributed content across platforms like YouTube, Instagram, and the school's website.
          <br />
          - Utilized targeted advertising to attract aspiring chefs and culinary enthusiasts.
        </span>
        <br />
        <br />
        <span>
          Results:
          <br />
          - Over 100,000 combined views across video content platforms.
          <br />
          - 30% increase in website inquiries and course applications through video engagement.
          <br />
          - Enhanced brand awareness and reputation within the culinary education space.
          <br />
          - Established a dedicated audience of culinary enthusiasts and potential students.
        </span>
        <Button
          variant="contained"
          sx={{
            margin: "20px auto",
            display: "block",
            backgroundColor: "transparent", // Blue background color
            color: "white", // White text color
            border: "2px solid white", // Orange border
            "&:hover": {
              backgroundColor: "grey", // Darker blue background color on hover
            },
          }}
        >
          Explore More
        </Button>
      </div>
    ),
  },
  {
    src: image4,
    title: 'Website Redesign for LMN Fitness Studio',
    description: (
      <div>
        <span>
          Revamped the website of a local fitness studio to enhance user experience, increase online class bookings, and showcase fitness services effectively.
        </span>
        <br />
        <br />
        <span>
          Approach:
          <br />
          - Conducted a thorough analysis of the existing website's usability and design.
          <br />
          - Collaborated with UI/UX designers to create a modern and user-friendly website layout.
          <br />
          - Optimized the booking process for online class reservations.
          <br />
          - Implemented responsive design for seamless viewing on various devices.
          <br />
          - Integrated customer testimonials and before-after images to highlight success stories.
        </span>
        <br />
        <br />
        <span>
          Results:
          <br />
          - 40% increase in online class bookings due to improved booking process.
          <br />
          - 25% longer average session duration on the website.
          <br />
          - Enhanced brand perception through visually appealing design.
          <br />
          - Improved mobile responsiveness leading to a 15% increase in mobile traffic.
        </span>
        <Button
          variant="contained"
          sx={{
            margin: "20px auto",
            display: "block",
            backgroundColor: "transparent", // Blue background color
            color: "white", // White text color
            border: "2px solid white", // Orange border
            "&:hover": {
              backgroundColor: "grey", // Darker blue background color on hover
            },
          }}
        >
          Explore More
        </Button>
      </div>
    ),
  },
  {
    src: image5,
    title: 'Content Localization for OPQ Global',
    description: (
      <div>
        <span>
          Localized content for a multinational company, OPQ Global, to connect with diverse audiences across different regions and cultures, ensuring consistency and cultural sensitivity.
        </span>
        <br />
        <br />
        <span>
          Approach:
          <br />
          - Identified target markets and conducted cultural research for each region.
          <br />
          - Translated website content, marketing materials, and product information accurately.
          <br />
          - Adapted marketing campaigns to resonate with local customs, languages, and preferences.
          <br />
          - Conducted A/B tests to determine the most effective localization strategies.
        </span>
        <br />
        <br />
        <span>
          Results:
          <br />
          - Increased engagement by 35% in target regions through culturally relevant content.
          <br />
          - Expanded customer base in international markets by 20%.
          <br />
          - Improved brand perception by demonstrating respect for local languages and customs.
          <br />
          - Consistent and accurate communication across diverse markets.
        </span>
        <Button
          variant="contained"
          sx={{
            margin: "20px auto",
            display: "block",
            backgroundColor: "transparent", // Blue background color
            color: "white", // White text color
            border: "2px solid white", // Orange border
            "&:hover": {
              backgroundColor: "grey", // Darker blue background color on hover
            },
          }}
        >
          Explore More
        </Button>
      </div>
    ),
  },
 
];

const Portfolio = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleImageHover = (index) => {
    setHoveredImage(index);
  };

  const handleImageLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a' ,minHeight: '100vh' }}>
    <Box
      style={{
        padding: '40px',
        // backgroundColor: 'white',
        backgroundColor: '#1a1a1a', // Dark background color for a futuristic feel
        marginLeft: '200px',
        marginRight: '200px',
      }}
    >
      <Typography
        variant="h6"
        style={{
          textAlign: 'left',
          marginBottom: '3px',
          color: 'lightblue',
          fontWeight: 600,
        }}
      >
        Portfolio
      </Typography>
      <Typography
        variant="h5"
        style={{
          textAlign: 'left',
          marginBottom: '20px',
          color: 'black',
          fontWeight: 700,
        }}
      >
        <spam style={{color:"white"}}>Each project is a unique piece of development</spam>    <MdOutlineOpenInNew color="blue" size='1rem'/>
      </Typography>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} key={index}>
            <Card
              style={{
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: hoveredImage === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredImage === index
                  ? '0px 4px 8px rgba(0, 0, 0, 0.2)'
                  : '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  marginBottom: '100px', // Added margin between images
              }}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                 width="100%"
                  image={image.src}
                  alt={image.title}
                  style={{
                    width: '100%',
                   // Updated to cover the image fully
                    objectFit: 'cover', // Maintain aspect ratio while covering fully
                    // opacity: hoveredImage === index ? 0.8 : 1, // Adjust opacity on hover
                    // backgroundColor: 'rgba(0, 0, 0, 0.8)', // Set background color
                  }}
                />
                {hoveredImage === index && (
                  <CardContent
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      top:0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '16px',
                      textAlign: 'center',
                      borderRadius: '0 0 5px 5px',
                    }}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        fontSize: '1.2rem',
                        marginBottom: '8px',
                      }}
                    >
                      {image.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: '0.9rem',
                        textAlign: 'center',
                      }}
                    >
                      {image.description}
                    </Typography>
                  </CardContent>
                )}
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
};

export default Portfolio;

import { Box, Grid, Typography } from "@mui/material"
import ServiceCard from "./ServiceCard"
const projects = [
    {
      "title": "Email Marketing Automation for EFG E-commerce",
      "desc": "Streamlined email marketing efforts for an online electronics retailer to boost customer engagement and drive repeat purchases through personalized email campaigns.",
      "approach": [
        "Segmented customers based on purchasing behavior and demographics.",
        "Implemented an email marketing automation platform for targeted campaigns.",
        "Developed personalized product recommendations, onboarding emails, and re-engagement campaigns.",
        "Monitored email performance metrics for ongoing optimization."
      ],
      "results": [
        "25% increase in email open rates through personalization.",
        "30% higher click-through rates for targeted product recommendations.",
        "20% increase in repeat purchases among engaged customers.",
        "15% improvement in customer retention due to re-engagement efforts."
      ]
    },
    {
      "title": "Influencer Marketing Collaboration for HIJ Beauty Brands",
      "desc": "Utilized influencer marketing to enhance brand awareness and credibility for a natural skincare products collection through collaborations with beauty influencers.",
      "approach": [
        "Researched and selected relevant beauty influencers aligned with the brand's values.",
        "Initiated partnerships for sponsored posts, reviews, and giveaways.",
        "Provided influencers with exclusive products and creative content ideas.",
        "Tracked influencer-generated content, engagement, and website traffic."
      ],
      "results": [
        "50% expanded brand reach via influencer-generated content.",
        "Over 10,000 new social media followers due to influencer collaborations.",
        "15% increase in website traffic attributed to influencer partnerships.",
        "Enhanced brand credibility through influencer endorsements."
      ]
    },
    {
      "title": "Video Content Strategy for KLM Culinary School",
      "desc": "Developed a comprehensive video content strategy for a prestigious cooking institute to showcase its expertise, curriculum, and unique culinary education approach.",
      "approach": [
        "Analyzed key aspects of the culinary school for impactful content creation.",
        "Produced high-quality videos: virtual tours, cooking tutorials, student testimonials, and more.",
        "Distributed content across platforms like YouTube, Instagram, and the school's website.",
        "Utilized targeted advertising to attract aspiring chefs and culinary enthusiasts."
      ],
      "results": [
        "Over 100,000 combined views across video content platforms.",
        "30% increase in website inquiries and course applications through video engagement.",
        "Enhanced brand awareness and reputation within the culinary education space.",
        "Established a dedicated audience of culinary enthusiasts and potential students."
      ]
    },{
        "title": "Website Redesign for LMN Fitness Studio",
        "desc": "Revamped the website of a local fitness studio to enhance user experience, increase online class bookings, and showcase fitness services effectively.",
        "approach": [
          "Conducted a thorough analysis of the existing website's usability and design.",
          "Collaborated with UI/UX designers to create a modern and user-friendly website layout.",
          "Optimized the booking process for online class reservations.",
          "Implemented responsive design for seamless viewing on various devices.",
          "Integrated customer testimonials and before-after images to highlight success stories."
        ],
        "results": [
          "40% increase in online class bookings due to improved booking process.",
          "25% longer average session duration on the website.",
          "Enhanced brand perception through visually appealing design.",
          "Improved mobile responsiveness leading to a 15% increase in mobile traffic."
        ]
      },
      {
        "title": "Content Localization for OPQ Global",
        "desc": "Localized content for a multinational company, OPQ Global, to connect with diverse audiences across different regions and cultures, ensuring consistency and cultural sensitivity.",
        "approach": [
          "Identified target markets and conducted cultural research for each region.",
          "Translated website content, marketing materials, and product information accurately.",
          "Adapted marketing campaigns to resonate with local customs, languages, and preferences.",
          "Conducted A/B tests to determine the most effective localization strategies."
        ],
        "results": [
          "Increased engagement by 35% in target regions through culturally relevant content.",
          "Expanded customer base in international markets by 20%.",
          "Improved brand perception by demonstrating respect for local languages and customs.",
          "Consistent and accurate communication across diverse markets."
        ]
      },
      {
        "title": "Search Engine Optimization (SEO) for RST Law Firm",
        "desc": "Implemented a comprehensive SEO strategy for a law firm, RST Law, to improve organic search visibility, increase website traffic, and attract potential clients seeking legal services.",
        "approach": [
          "Conducted an in-depth SEO audit to identify technical and content-related issues.",
          "Researched relevant legal keywords and optimized website content accordingly.",
          "Optimized meta tags, headers, and internal linking structure for search engines.",
          "Built high-quality backlinks from legal directories and authoritative websites.",
          "Monitored search rankings, organic traffic, and conversion rates for ongoing adjustments."
        ],
        "results": [
          "Achieved a 50% increase in organic search traffic within six months.",
          "Top search rankings for targeted legal keywords resulted in a 40% rise in website inquiries.",
          "Enhanced online visibility led to a 25% increase in new client acquisitions.",
          "Established RST Law Firm as a reputable authority in legal services within the digital landscape."
        ]
      }
  ]
  
  
const Portfolio = () => {
  return (
    <Box>
       <Typography variant="h3" textAlign="center" margin="10px 0px">Projects Done by Us</Typography>
       <Grid container spacing={2}>{
            projects.map((project , index) =>(
                <Grid item xs={4} key={index}><ServiceCard {...project}/> </Grid>
            ))
        }
        </Grid>
    </Box>
  )
}

export default Portfolio
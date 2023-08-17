import { Box, Grid, Typography  } from '@mui/material'
import React from 'react'
import ServiceCard from './ServiceCard'

const services = [ {title : 'Email Marketting' , desc :`Unlock the Power of Personalized Communication with Our Email Marketing Service!

Are you ready to take your marketing efforts to the next level? Our cutting-edge email marketing service empowers businesses to connect with their audience like never before. With our expertise, you can deliver tailored messages directly to your customers' inboxes, building strong relationships and driving conversions.`},
{title : 'SEO Management' , desc : `Elevate Your Online Presence with Our Premier SEO Management Service!

Are you ready to dominate the digital landscape and reach the top of search engine results? Our unparalleled SEO management service empowers businesses to skyrocket their online visibility, drive organic traffic, and outshine the competition.`},

{ title : "Content Writter" , desc : `Unlock the Power of Words with Our Exceptional Content Writer Service!

Is your brand's voice struggling to be heard? Our premium content writer service is your solution to crafting compelling narratives that captivate, inform, and engage your audience like never before.`},
{title : "Buisness Strategy" , desc : `Shape Your Future with Our Premier Business Strategy Services!

Is your business sailing in uncertain waters? Our dynamic business strategy services are designed to guide you through challenges and chart a course toward sustainable growth and success.`}, 
{title : "Social Media Management" , desc : `Ignite Your Brand's Presence with Our Cutting-Edge Social Media Marketing Services!

Is your brand ready to shine on the world's most dynamic platforms? Our exceptional social media marketing services are your gateway to building a thriving online community, driving engagement, and making a lasting impact.`}
]

const Services = () => {
  return (
    <Box sx={{margin : "20px 20px"}}>
        <Typography  variant='h4' textAlign="center">We provide the best services for you</Typography>

        <Grid container spacing={2}>{
            services.map((service , index) =>(
                <Grid item xs={4} key={index}><ServiceCard {...service}/> </Grid>
            ))
        }
            
        </Grid>
    </Box>
  )
}

export default Services

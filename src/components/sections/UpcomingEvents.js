
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Grid, Box, CircularProgress } from '@mui/material';
import { contractAddress } from '../../config/constants'

import EventImage from '../../assets/images/img-1.jpeg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

// const EventImage = EventImage
const events = [
  { id: 1, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "Agricon Conference and Expo", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 2, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "ABUJA BUSINESS NETWORK", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 3, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "SINGLES & MARRIED HANGOUT", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 4, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "The Politics Roundtable", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 5, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "INT'L CONF. FOR WOMEN", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 6, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "Jazz for Peace Concert Nigeria", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 7, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "Adorn Family Fair", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 8, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "ICT FOR EARLY SCHOOL", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  { id: 9, image: EventImage, date: "10th Aug 2022", time: "09:00am", tags: "Education Travel Abuja Seminars Recommendations Visa", title: "MOMENT OF WORSHIP", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
]

const UpcomingEvents = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  require('dotenv').config()
  const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
  const web3 = createAlchemyWeb3(alchemyKey)

  const contractABI = require('../../config/abi')

  const [eventsData, setEventsData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const timer = setTimeout(() => {
        getEvents()
      }, 5000);
      return () => clearTimeout(timer);
  }, [])

  
  
  const getEvents = async () => {
    setEventsData(events)
    setLoading(false)
    // return tokenMetadata
  }

  const getUrl = title => {
    return title.replace(/\s+/g, '-').toLowerCase();
  }

  
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Upcoming Events',
  };




  return (
      <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          {/* <Link to="/mint" className="button button-primary button-wide-mobile button-sm">Mint NFT</Link> */}
          <Box sx={{mt: 3}}>
            {loading && <CircularProgress />}
          </Box>
          <Grid container spacing={3} sx={{mt: 4}}>
            { eventsData.map((event) => (
              <Grid item xs={12} md={4} sm={3} key={event.title} style={{}}>
                <Link to={`/event/${getUrl(event.title)}`} state={
                  {
                    "id": event.id,
                    "title": event.title,
                    "image": event.image,
                    "description": event.description,
                    "date": event.date,
                    "time": event.time,
                    "tags": event.tags,
                  }
                }>
                <Box className="nft__item" style={{padding: '20px', height: '200px'}}>
                  <Box>
                    <Image
                      src={event.image}
                      alt="Image" 
                      style={{borderRadius: 15}}
                    />
                  </Box>
                  <h6>{event.title}</h6>
                  <p style={{fontSize: "14px", marginTop: "-10px", color: "#8364e2"}}><CalendarMonthIcon fontSize="small"/><span style={{position: "absolute"}}>{event.date}, {event.time}</span></p>
                  <p>{event.description.length > 57 ? event.description.slice(0,57).concat("...") : event.description}</p>
                  {/* <Link to="/" className="button button-primary button-sm">Register</Link> */}
                </Box>
                </Link>
              </Grid>
            ))

            }
          </Grid>
        </div>
      </div>
    </section>
    
  );
}

UpcomingEvents.propTypes = propTypes;
UpcomingEvents.defaultProps = defaultProps;

export default UpcomingEvents;
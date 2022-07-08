import React from 'react';
import { Divider } from '@mui/material';
// import sections
import Hero from '../components/sections/Hero';
import UpcomingEvents from '../components/sections/UpcomingEvents';

import LayoutDefault from '../layouts/LayoutDefault'

const Home = () => {

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <Divider variant="middle"/>
      <UpcomingEvents />
    </LayoutDefault>
  );
}

export default Home;
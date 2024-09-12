import React from 'react'
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllButton from "../components/ViewAllButton";

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />  
        <JobListings isHome={true}/>    
        <ViewAllButton />
    </>
  )
}

export default HomePage
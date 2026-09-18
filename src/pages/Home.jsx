import React from 'react'
import Hero from '../components/homePage/Hero'
import StatsSection from '../components/homePage/StatsSection'
import SolutionsSection from '../components/homePage/SolutionsSection'
// import ProjectsSection from '../components/homePage/ProjectSection'
import ExistingBuildings from '../components/homePage/ExistingBuildings'

const Home = ({ isLoading }) => {
  return (
    <div>
      <Hero isLoading={isLoading} />
      <StatsSection/>
      <SolutionsSection/>
      {/* <ProjectsSection/> */}
      <ExistingBuildings/>
    </div>
  )
}

export default Home
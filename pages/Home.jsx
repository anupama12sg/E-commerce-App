import React from 'react'
import { Route, Router } from 'react-router-dom'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
    </div>
  )
}

export default Home

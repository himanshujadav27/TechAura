import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import PromoBanner from '../components/PromoBanner'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts showAll={false} />
      <PromoBanner />
      <About />
      <Contact />
    </>
  )
}

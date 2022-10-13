import './App.css'
import React from 'react'
import { Header } from './components/Header'
import { TopFold } from './components/TopFold'
import { BrandsIntegration } from './components/BrandsIntegration'
import { TrendingNfts } from './components/TrendingNfts'
import { InfoSection } from './components/InfoSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div>
      <Header />
      <TopFold />
      <BrandsIntegration />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </div>
  )
}



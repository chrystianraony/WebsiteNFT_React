import './App.css'
import React from 'react'
import { Header } from './components/Header'
import { TopFold } from './components/TopFold'
import { TrendingNfts } from './components/TrendingNfts'
import { InfoSection } from './components/InfoSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className='max-width'>
      <Header />
      <TopFold />
      <TrendingNfts />
      <InfoSection />
      <Footer />
    </div>
  )
}



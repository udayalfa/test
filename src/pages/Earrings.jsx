import React from 'react'
import JewelryCard from '../components/JewellaryCard'

function Earrings() {
  return (
    <div>
      <h1 className='text-center pt-4 text-4xl'>
        Whispers of Sparkle — Earrings That Frame Every Beautiful Moment 💫
      </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <JewelryCard />
        <JewelryCard />
        <JewelryCard />
        <JewelryCard />
        <JewelryCard />
        <JewelryCard />
        <JewelryCard />
      </div>
    </div>
  )
}

export default Earrings

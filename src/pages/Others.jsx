import React from 'react'
import JewelryCard from '../components/JewellaryCard'
import useJewelleryByCategory from '../hooks/useJewelleryByCategory';

function Others() {
   const { jewellaries, error } = useJewelleryByCategory("Other");
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1 className='text-center pt-4 text-4xl'>
        Little Details, Endless Charm — Discover the Artistry Beyond Ordinary ✨
      </h1>
       <div className="grid opacity-0 animate-slide-up delay-200 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {jewellaries.length > 0 &&
          jewellaries.map((jewellary) => {
            return <JewelryCard jewellary={jewellary} />;
          })}
      </div>
    </div>
  )
}

export default Others

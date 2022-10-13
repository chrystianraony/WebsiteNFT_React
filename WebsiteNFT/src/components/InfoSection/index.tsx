import React from 'react'
import INFO_ITEMS from '../../data/infoItems'
import InfoItem from './infoItem'
import "./infoSection.css"

 export const InfoSection = () => {
  return (
    <div className='info-section'>
      <div className='is-heading absolute-center'>
        <span className='heading-gradient'>Create and sell your NFTs</span>
      </div>
      <div className='is-items-container'>
        {INFO_ITEMS.map((_infoItem) => (
        <InfoItem item={_infoItem} />
        ))}
         
      </div>
    </div>
  )
}
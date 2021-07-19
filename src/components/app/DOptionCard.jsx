import React from 'react'
import { DIcon } from './DIcon'

const DOptionCard = ({ isCardActive, cardOption, onClick }) => {
  return (
    <div className={`border rounded-md bg-white sm:py-7 py-5 px-4 sm:px-10 text-center w-full cursor-pointer ${isCardActive ? 'shadow border-app-zeus-purple' : ''}`} style={{ maxWidth: '200px' }} onClick={onClick}>
      <DIcon name={cardOption.icon} className={`text-4xl ${isCardActive ? 'text-app-zeus-purple' : 'text-gray-500'}`} />
      <p className={`mt-2 font-medium text-sm ${isCardActive ? 'text-app-zeus-purple' : 'text-gray-400'}`}>
        {cardOption.name}
      </p>
    </div>
  )
}

export default DOptionCard

import React from 'react'

export const DButton = ({ className, children }) => {
  return (
    <button className={`text-sm py-2 px-8 rounded bg-gradient-to-bl block text-white border-none ${className}`} >
      { children }
    </button>
  )
}
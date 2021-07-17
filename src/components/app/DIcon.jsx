import React from 'react'

export const DIcon = ({ name, className, onClick }) => {
  return (
    <span className={`mdi mdi-${name} ${className}`} onClick={onClick} />
  )
}
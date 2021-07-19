import React from 'react'

const AuthFormHeader = ({ title, caption }) => {
  return (
    <div className="py-3 px-8 hidden lg:block">
      <h1 className="text-3xl font-semibold text-app-zeus-purple">
        { title }
      </h1>
      <p className="text-gray-600 text-sm mt-1.5 max-w-lg leading-5">
        { caption }
      </p>
    </div>
  )
}

export default AuthFormHeader

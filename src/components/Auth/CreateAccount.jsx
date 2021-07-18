import React, { useState } from 'react'
import { DField } from '../app/DField'
import { fieldSchemas } from './Auth'

export const CreateAccount = () => {
  const [ formData, setFormData ] = useState({
    userId: '',
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [ triggerErrorCheck, setTriggerErrorCheck ] = useState(false)

  function handleNewFieldValue (newFormData) {
    setFormData({...formData, ...newFormData})
  }

  function handleSubmit () {
    setTriggerErrorCheck(true)
  }

  return (
    <main className="py-16 xl:px-16 lg:px-6 mx-auto lg:mx-0 max-w-max lg:max-w-full">
      <div className="py-3 px-8 hidden lg:block">
        <h1 className="text-3xl font-semibold text-app-zeus-purple">
          Create Account
        </h1>
        <p className="text-gray-600 text-sm mt-1.5">
          Fill the form below to continue. All fields are required
        </p>
      </div>

      <form className="mt-6 px-5 sm:px-8 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
        <DField
          label="User ID"
          icon="card-account-details"
          name="username"
          type="text"
          value={formData.userId}
          placeholder="e.g username43"
          hint="ID can contain between 5 and 20 characters"
          validation={fieldSchemas.userId}
          errorMessage="Enter a valid user ID"
          checkError={triggerErrorCheck}
          setFieldValue={handleNewFieldValue}
        />

        <DField
          label="Full name"
          icon="account-details"
          name="fullname"
          type="fullname"
          value={formData.fullname}
          placeholder="e.g John Doe"
          validation={fieldSchemas.fullname}
          errorMessage="Please, enter a valid name"
          checkError={triggerErrorCheck}
          setFieldValue={handleNewFieldValue}
        />

        <DField
          label="Email Address"
          icon="at"
          name="email"
          type="email"
          value={formData.email}
          placeholder="e.g name@domain.com"
          validation={fieldSchemas.email}
          errorMessage="Please, enter a valid email address"
          checkError={triggerErrorCheck}
          setFieldValue={handleNewFieldValue}
        />

        <DField
          label="Password"
          icon="lock"
          name="password"
          type="password"
          value={formData.password}
          placeholder="*************"
          hint="Minimum of 8 characters including at least a number and special character"
          validation={fieldSchemas.password}
          errorMessage="Minimum of 8 characters including at least a number and special character"
          checkError={triggerErrorCheck}
          setFieldValue={handleNewFieldValue}
        />

        <DField
          label="Confirm Password"
          icon="lock"
          name="confirm-password"
          type="password"
          value={formData.confirmPassword}
          placeholder="************"
          hint="Minimum of 8 characters including at least a number and special character"
          validation={fieldSchemas.confirmPassword}
          errorMessage="Minimum of 8 characters including at least a number and special character"
          checkError={triggerErrorCheck}
          setFieldValue={handleNewFieldValue}
        />

        <button className="py-2 px-8 w-full text-white bg-app-zeus-purple rounded block max-w-full mt-6" onClick={handleSubmit}>
          Create Account
        </button>
      </form>
    </main>
  )
}

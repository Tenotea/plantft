import React, { useState } from 'react'
import { DField } from '../app/DField'
import { fieldSchemas } from './Auth'
import AuthFormHeader from './AuthFormHeader'

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
    // Object wide yup validation
  }

  return (
    <main className="lg:py-16 py-3 xl:px-16 lg:px-6 mx-auto lg:mx-0 max-w-max lg:max-w-full">
      <AuthFormHeader 
        title="Create Account"
        caption="Fill the form below to continue. All fields are required"
      />
      
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

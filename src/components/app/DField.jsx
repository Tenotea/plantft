import React, { useEffect, useState } from 'react'
import { DIcon } from './DIcon'

export const DField = ({
  label,
  value,
  name,
  type,
  placeholder,
  icon,
  hint,
  validation,
  errorMessage,
  checkError,
  setFieldValue
}) => {
  const fieldId = 'd-' + (Math.random() * 100000).toFixed(0)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [ inputHasError, setInputHasError ] = useState(false)
  const [ isInputValid, setIsInputValid ] = useState(false)

  function validateInput (userInput) {
    try {
      validation.validateSync(userInput)
      setFieldValue({ [name]: userInput})
      setInputHasError(false)
      setIsInputValid(true)
    } catch {
      setFieldValue({ [name]: '' })
      setInputHasError(true)
      setIsInputValid(false)
    }
  }

  useEffect(() => {
    if (checkError === true) {
      validateInput(value)
    }
  }, [checkError])

  return (
    <div className="mb-6">
      <label htmlFor={fieldId} className={`text-sm font-medium mb-1 block transition-colors ${inputHasError ? 'text-app-error-red' : isInputFocused || isInputValid ? 'text-app-zeus-purple' : 'text-gray-600'}`}>
        {label}
      </label>
      
      <div className="relative">
        <input 
          id={fieldId}
          value={value[name]}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`text-sm py-3 pl-14 pr-7 w-full outline-none rounded-md border ${inputHasError ? 'border-app-error-red text-app-error-red' : isInputFocused || isInputValid ? 'border-app-zeus-purple text-app-zeus-purple' : 'border-gray-200 text-gray-600'}`}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onChange={(e) => validateInput(e.target.value)}
        />

        <DIcon name={icon} className={`${inputHasError ? 'text-app-error-red' : isInputFocused || isInputValid ? 'text-app-zeus-purple' : 'text-gray-400'} text-xl absolute top-2.5 left-5`} />

        {(hint || inputHasError ) && (<div className={`flex items-center gap-2 text-sm mt-1 ${inputHasError ? 'text-app-error-red' : 'text-gray-400'}`}>
          <DIcon name="information-outline" />
          <p> { inputHasError ? errorMessage : hint } </p>
        </div>)}
      </div>
    </div>
  )
}

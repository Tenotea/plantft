import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as yup from 'yup'
import authBackgroundArt from '../../assets/auth-bg.png'
import DLogo from '../../assets/logo.svg'
import { CreateAccount } from './CreateAccount'

export const fieldSchemas = {
  userId: yup.string().required(),
  fullname: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required()
}

const Auth = () => {
  return (
    <main className="w-full h-screen bg-gray-50 flex items-start justify-start overflow-hidden">
      <div className="h-full w-full max-w-2xl hidden lg:block" style={{ backgroundColor: '#291F29'}}>
        <div className="h-30 grid items-center gap-8 px-16 py-10 bg-app-zero-gravity" >
          <img src={DLogo} alt="site logo" className="h-8" />
          <div>
            <h1 className="font-semibold text-white text-4xl">
              Create Account
            </h1>
            <p className="text-white font-light text-sm mt-1">
              Already a user? <span className="text-blue-600">
                Log in
              </span>
            </p>
          </div>
        </div>

        <div className="pr-10">
          <img src={authBackgroundArt} alt="" />
        </div>
      </div>
      <section className="w-full h-screen overflow-auto">

        <div className="h-30 grid items-center gap-8 px-16 py-10 bg-app-zero-gravity lg:hidden" >
          <img src={DLogo} alt="site logo" className="h-8" />
          <div>
            <h1 className="font-semibold text-white text-3xl sm:text-4xl">
              Create Account
            </h1>
            <p className="text-white font-light text-sm mt-1">
              Already a user? <span className="text-blue-600">
                Log in
              </span>
            </p>
          </div>
        </div>

        <Switch>
          <Route path="/auth/create-account">
            <CreateAccount />
          </Route>
        </Switch>
      </section>
    </main>
  )
}

export default Auth

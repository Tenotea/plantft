import React, { useState } from 'react'
import { DIcon } from '../app/DIcon'
import DOptionCard from '../app/DOptionCard'
import AuthFormHeader from './AuthFormHeader'

const cardOptions = [
  {
    id: 1,
    name: 'New Wallet',
    icon: 'wallet-plus'
  },
  {
    id: 2,
    name: 'Import wallet',
    icon: 'wallet'
  }
]

const SelectWallet = () => {
  const [ selectedWalletProvider, setSelectedWalletProvider ] = useState('Click to select a wallet provider')
  return (
    <div className="max-w-lg">
      <p className="text-sm text-gray-600 mb-2">
        Select Wallet Provider
      </p>
      <div className="border rounded flex items-center py-2 px-3 bg-white">
        <DIcon name="wallet" className="text-2xl text-gray-400 mr-2" />
        <p className={`text-gray-500`}> {selectedWalletProvider} </p>
      </div>

      <div>
      </div>
    </div>
  )
}

const CreatNewWallet = () => {
  return (
    <section>
      <button className="flex items-center justify-center bg-app-zeus-purple rounded-full py-2 px-8 text-white text-sm font-medium gap-3">
        <DIcon name="qrcode" className="text-xl" />
        <span>
          Generate New Address
        </span>
      </button>
    </section>
  )
}

const ImportWallet = () => {
  return (
    <section>
      You have chosen to import a wallet
    </section>
  )
} 

export const ConnectWallet = () => {
  const [currentCardOptionId, setCurrentCardOptionId] = useState(1)

  // All states live here

  return (
    <main className="lg:py-16 py-3 xl:px-16 lg:px-6 mx-auto lg:mx-0 max-w-max lg:max-w-full">
      <AuthFormHeader
        title="Connect your wallet"
        caption="To claim, please provide the preferred cryptocurrency 
        wallet address by connecting your wallet"  
      />

      <section className="mt-10 px-5 sm:px-8 flex items-start gap-5 sm:gap-10">
        { cardOptions.map(el => <DOptionCard key={el.id} cardOption={el} isCardActive={el.id === currentCardOptionId} onClick={() => setCurrentCardOptionId(el.id)} />) }
      </section>

      <section className="mt-10 md:mt-16 px-5">
        <SelectWallet />
      </section>

      <section className="mt-5 px-5">
        { currentCardOptionId === 1 ? <CreatNewWallet />  : <ImportWallet /> }
      </section>
    </main>

  )
}

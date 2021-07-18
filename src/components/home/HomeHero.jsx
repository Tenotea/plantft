import React  from "react";
import { Link } from "react-router-dom";
import homeHeroCover from '../../assets/hero-cover.png'
import { DButton } from "../app/DButton";
import { DIcon } from "../app/DIcon";

export const HomeHeroSection = () => {
  return (
    <section className="w-full bg-cover bg-no-repeat bg-right-top flex items-center justify-center" style={{backgroundImage: `url(${homeHeroCover})`}}>
      <div className="max-w-lg sm:max-w-7xl mx-auto px-5 md:sm-8  py-32" >
        <h1 className="text-white text-4xl sm:text-6xl font-bold max-w-lg text-center leading-normal sm:leading-relaxed mx-auto">
          Welcome to Dvision Network
        </h1>
        <p className="text-white text-center max-w-2xl text-2xl font-medium leading-10 text-opacity-80 mt-6">
          Create, Trade and Play in the blockchain based NFT metaverse owned by players.
        </p>
        <Link to="/auth">
          <DButton className="mx-auto mt-10 sm:text-lg flex items-center">
            Start Now
            <DIcon name="rocket" className="block ml-2 transform rotate-12 origin-bottom-right" />
          </DButton>
        </Link>
      </div>
    </section>
  )
}

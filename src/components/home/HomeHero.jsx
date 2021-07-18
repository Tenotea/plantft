import React  from "react";
import homeHeroCover from '../../assets/hero-cover.png'
import { DButton } from "../app/DButton";
import { DIcon } from "../app/DIcon";

export const HomeHeroSection = () => {
  return (
    <section className="w-full bg-cover bg-no-repeat bg-right-top flex items-center justify-center" style={{backgroundImage: `url(${homeHeroCover})`}}>
      <div className="max-w-lg sm:max-w-7xl mx-auto px-5 md:sm-8  py-32" >
        <h1 className="text-white text-4xl sm:text-6xl font-bold max-w-lg text-center leading-normal sm:leading-relaxed">
          Welcome to Dvision Network
        </h1>
        <DButton className="from-pink-600 to-purple-600 mx-auto mt-10 sm:text-lg">
          Start Now
          <DIcon name="rocket" className="ml-2 transform rotate-12" />
        </DButton>
      </div>
    </section>
  )
}
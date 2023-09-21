import {React, useContext }  from "react"
import Hero from "./Hero/Hero"
import Cards from "./Cards/Cards"
import Pricing from "./Pricing/Pricing"
import Testimonials from "./Testimonials/Testimonials"
import img from "../../images/img7.jpg"
import NumberCounter from 'number-counter'
import { motion } from "framer-motion"
import { AuthContext } from "../../context/AuthContext"
import tick from "../../images/tick.png"

const metrics = [
  { id: 1, stat: 25, emphasis: 'Expert', rest: 'coaches at your service.' },
  { id: 2, stat: 300, emphasis: 'Members', rest: 'have joined the program.' },
  { id: 3, stat: 98, emphasis: 'Customer', rest: 'satisfaction and positive feedback.' },
  { id: 4, stat: 15, emphasis: 'Fitness', rest: 'programs and continuing.' },
]

export default function Example() {

  const { user, loggedIn } = useContext(AuthContext)

  return (
    <>
    <div className="relative pb-20 overflow-hidden bg-gradient-to-b from-green to-yellow scroll-smooth" >
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
            className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-18 xl:absolute xl:inset-0"
              src={img}
              alt="Woman doing yoga"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </motion.div>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
        <div className="relative pt-6 pb-64 sm:pt-6 sm:pb-64 xl:col-start-1 xl:pb-24">
          {/* <h1 className="text-5xl font-bold tracking-tight text-white"> Welcome Back</h1> */}
          {loggedIn && (
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
                Welcome back,{" "}
                <span className="text-gray">{user.username}:
                </span>
              </h1>
            )}
          <h2 className="text-base font-bold text-gray">TIME TO GET PROFILE FITNESS</h2>
          <p className="mt-3 text-3xl font-bold tracking-tight text-white">
            Shape your ideal body.
          </p>
          <p className="mt-5 text-2xl text-gray">
            FitTrack is designed to help you maintain a healthy lifestyle by suggesting recommended
            food and exercises to achieve a specified target. Here, we will help you shape and build your ideal body and live up your life to the fullest.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              item.id===3?
              <p key={item.id}>
                <span className="block text-3xl font-bold text-white">
                  <NumberCounter end={item.stat} start={30} delay='4' postFix="%"/>
                </span>
                <span className="mt-1 block text-lg text-gray">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
              :
              <p key={item.id}>
                <span className="block text-3xl font-bold text-white">
                  <NumberCounter end={item.stat} start={5} delay='4' postFix="+"/>
                </span>
                <span className="mt-1 block text-lg text-gray">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Cards/>
    <Hero/>
    <Pricing/>
    <Testimonials/>
    </>
  )
}
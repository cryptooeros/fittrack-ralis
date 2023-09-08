/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import img from "../../../images/img.jpg"
import img1 from "../../../images/img1.jpg"
import img2 from "../../../images/img2.jpg"
import img3 from "../../../images/img3.jpg"
import img4 from "../../../images/img4.jpg"
import img5 from "../../../images/img5.jpg"
import img6 from "../../../images/img6.jpg"
import { HashLink as Link } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"

export default function Example() {
  const navigate = useNavigate()

  return (
    <div className="bg-white" id="hero">
      <section className="relative mb-20">

        {/* Hero section */}
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Train faster and smater than before.
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                  Improve your health, fitness, and overall well-being with simple activities such as walking, to more intense workouts like weightlifting and high-intensity
                  interval training.<br/>
                  <br/>
                  Food and nurtition play an important role in exercise and physical activity. Proper nutrition helps you improve
                  your atletic perfomances, reduce fatigue , and speed up recovery time after worksouts.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div 
                      className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div 
                        className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={img}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img1}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img4}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img5}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div 
                        className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={img6}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                >
                  <Link
                  to="/aboutus/#aboutus"
                  className="inline-block rounded-md border border-transparent bg-orange py-3 px-8 text-center font-medium text-white hover:bg-yellow"
                >
                  Learn More
                  </Link>
                </motion.div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'blue-gray': colors.blueGray,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, LifebuoyIcon, NewspaperIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Contact from '../Contact/Contact'



export default function Example() {
  return (
    <>
    <div className="bg-white" id="aboutus">
        {/* CTA Section */}
        <section className="relative bg-white" aria-labelledby="join-heading">
          <div className="absolute inset-x-0 hidden h-1/2 bg-blue-gray-50 lg:block" aria-hidden="true" />
          <div className="mx-auto max-w-7xl bg-blue-600 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                <div className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true" />
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                  <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                    <img
                      className="rounded-3xl object-cover object-center shadow-2xl"
                      // src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                      src = "https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828__340.jpg"
                      alt=""
                      style={{ width: "150%", height: "150%" }}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="relative mt-2 py-10 px-10 bg-green lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl"> */}
              <div className="relative overflow-hidden bg-gradient-to-b from-green to-yellow mt-2 py-10 px-10 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                  <svg
                    className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                  <svg
                    className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                  </svg>
                </div>
                <div className="relative mx-auto max-w-md space-y-6 py-12 px-6 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                  <h2 className="text-3xl font-bold tracking-tight text-gray" id="join-heading">
                    Join our team
                  </h2>
                  <p className="text-lg text-white">
                  Fittrack, is a fitness website designed to help users maintain a healthy lifestyle by suggesting recommended food and exercises to achieve a specified target.
                  </p>
                  <p className="text-lg text-white">
                    Our targets are divided into three categories: lose weight, maintain weight, and gain weight. According to each target, a user can get the recommended foods and exercises.
                     After a target is achieved, a user can delete the target and set a new one. Say YES to maintaining a healthy lifestyle.</p>
                  <a
                    className="block w-full rounded-md border border-transparent bg-amber py-3 px-5 text-center text-base font-medium text-gray shadow-md hover:bg-blue-gray-50 sm:inline-block sm:w-auto"
                    href="#"
                  >
                    Explore your options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    <Contact/>
    </>
  )
}
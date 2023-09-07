// import React from 'react'
// import Trainer from "../../images/trainer.png"
// // import Exer from "../images/gym-02.png"

// function Home() {
//   return (
//   <>
//     <div className='maincontainer'>   
//       <div className= "container1">
//         <div className='text-container'>
//         <h2>TIME TO GET <b className='pro'>PROLIFE FITNESS</b></h2>
//         <p className='planding'> Fit<b className='track'>Track</b>, is a fitness website designed to help users maintain a healthy lifestyle by suggesting recommended
//            food and exercises to achieve a specified target</p>
//         </div>
//         <div className='image-container'>
//           <img className= "img" src={Trainer}alt='trainerimage'></img>      
//         </div>      
//       </div> 
//       <h3>
//         <u>Enjoy our services</u>
//       </h3>
//       <div className='container-two'>   
//       <div className='card'> 
//       <h5> EXERCISES AND WORKOUT</h5>      
//           <div className='cardimage'>
//           <img className='exercise'
//           alt="gym"
//           src="https://media.4rgos.it/i/Argos/5021-m0014-m007-m050-asym-m008-m022-smallgymideas-steppers-9190306?maxW=1200&qlt=75&fmt.jpeg.interlaced=true"
//         />
//          </div>
//           <div className='cardtext'>
            
//             <p>Exercise and workouts are physical activities that are perfomed to improve health, fitness, and overall well-being
//             . They can range from simple activities such as walking, to more intense workouts like weightlifting and high-intensity
//             interval training.
//               </p>
//           </div>
//         </div>
//         <div className='card'>
//         <h5>FOOD AND NUTRITION</h5>        
//           <div className='cardimage'>
//                    <img className="exercise"
//           alt="gym"
//           src="https://images.squarespace-cdn.com/content/v1/5d59f351fddabe00013cf3e6/9d48584f-c1a5-414e-addf-403aa6a2d21f/PRE-WORKOUT+NUTRITION.png"
//         />
//           </div>
//           <div className='cardtext'>          
//           <p>Food and nurtition play an important role in exercise and physical activity. Proper nutrition helps you improve
//       your atletic perfomances, reduce fatigue , and speed up recovery time after worksouts
//           </p>
//           </div>
//         </div>
//         <div className='card'> 
//         <h5>TRACK YOUR PLAN</h5>         
//           <div className='cardimage'>
//           <img className="exercise"
//           alt="gym"
//           src="https://www.health.com/thmb/0ZP6oyiCMMOhoqm7ykYTqIKCKKA=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/fitness-journals-gettyimages-914593896-2000-02a5845d9d4a44e6ba56db2cc4c9566e.jpg"
//         />
//           </div>
//           <div className='cardtext'>          
//           <p>Setting up your daily targets for exercises will help yo stay motivated and on track towars your fitness goal</p>
//          </div>
//         </div>
//       </div>
//     </div>
// </>   
//   )
// }

// export default Home


import {React, useContext }  from "react"
import Hero from "./Hero/Hero"
import Cards from "./Cards/Cards"
import Pricing from "./Pricing/Pricing"
import Testimonials from "./Testimonials/Testimonials"
import img from "../../images/img7.jpg"
import NumberCounter from 'number-counter'
import { motion } from "framer-motion"
import { AuthContext } from "../../context/AuthContext"

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
    <div className="relative py-10 overflow-hidden bg-gradient-to-b from-green to-yellow scroll-smooth" >
      <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <motion.div 
              whileHover={{ scale: 1.2 }}
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
                <span className="text-gray">{user.username}:</span>
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
import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome To Prescripto, Your Trusted Partner In Managing Your Hecithcare Needs Conveniently And Efficiently.
At Prescripte, We Understand The Chollenges Individuals Foce When It Comes To Scheduling Docter
Appointments And Monoging Their Heolth Records</p>
          <p>Prescripte Is Commitled To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our
Piotform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service.
Whether You're Booking Your First Appointment Or Monoging Ongoing Care, Prescrigtg Is Here To Support You
Every Step Of The Way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our Vision At Presszigtg Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The
Gop Between Pofients And Healthcore Providers, Moking It Easier For You To Access The Core You Need, When
Wou Need It.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      {/* ----column---- */}
      <div className='flex flex-col md:flex-row mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Efficiency:</b>
        <p>Streamlined appointment schedulrg that fits into your busy lifestyle.</p>
       </div>

       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
       <b>Convenience:</b>
       <p>Acress tn n netwo-k of triister henlthrare prnfessinnnls in yaur aren</p>
       </div>

       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
       <b>Personalization:</b>
       <p>Tallored recommendations and reminders to help you stcy on top of your health.</p>
       </div>
      </div>
    </div>
  )
}

export default About

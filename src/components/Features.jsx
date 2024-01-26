import React from 'react'
import FeaturesImg from '../assets/FeaturesImg.png'

export default function Features() {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-10 '>
            <div className="lg:w-1/4 ">
                <h3 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Why we are better than others</h3>
                <p className='text-base text-tartiary'>A simple paragraph is comprised of three major components. 
                    The first sentence, which is called the "topic sentence."
                </p>
            </div>
            {/* features card start */}
            <div className='w-full lg:w-3/4'>
                <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 sm:grid-cols-2'>
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl
                        p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={FeaturesImg} alt="" />
                            <h5 className='text-2xl font-semibold px-5 mt-5 text-center'> Convenient study schedule</h5>
                        </div>
                    </div>
                        
                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl
                        p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                        <div>
                            <img src={FeaturesImg} alt="" />
                            <h5 className='text-2xl font-semibold px-5 mt-5 text-center'> Convenient study schedule</h5>
                        </div>
                    </div>

                    <div className='bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl
                        p-8 flex items-center justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                        <div>
                            <img src={FeaturesImg} alt="" />
                            <h5 className='text-2xl font-semibold px-5 mt-5 text-center'> Convenient study schedule</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

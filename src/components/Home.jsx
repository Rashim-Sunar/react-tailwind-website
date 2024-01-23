import React from 'react'
import banner from '../assets/banner.png'

export default function Home() {
  return (
    <>
        <div className='md:px-14 p-4 max-w-screen-2xl mx-auto mt-28'>
            <div className='gradientBg rounded-xl rounded-br-[80px]'>  
                <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                    {/* banner contents */}
                    <div className="md:w-3/6">
                        <h1>Develop your skills without diligence</h1>
                        <p>A good example of a paragraph contains a topic sentence, details and a conclusion.
                             There are many different kinds of animals that live in China.
                        </p>
                        <div>
                            <button>Get Started</button>
                            <button>Discount</button>
                        </div>
                    </div>
                    {/* banner image */}
                    <div>
                        <img src={banner} alt="" className='lg:h-[386px]' />
                    </div>

                </div>
            </div>
    
        </div>
    </>
    )  
    
}

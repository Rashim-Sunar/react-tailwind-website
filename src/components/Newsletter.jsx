import React from 'react'
import Banner from './shared/Banner'
import NewsletterImg from '../assets/Newletter.png'

export default function Newsletter() {
  return (
    <div className='max-w-screen-2xl mx-auto my-12 md:px-14 p-4'>
        <Banner banner={NewsletterImg} heading="Each student an share their discount code for friends" 
          subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"  
          btn1='I have a code' btn2=' '  
            />
    </div>
  )
}

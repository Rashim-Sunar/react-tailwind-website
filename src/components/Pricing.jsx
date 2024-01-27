import React, { useState } from "react";

export default function Pricing() {
  const[isYearly,setIsYearly]=useState(false);

  const packages = [
    {name : 'Start', monthlyPrice : '19$', yearlyPrice : '199$', description : 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',green:'/src/assets/Rectangle18.png'},
    {name : 'Advance', monthlyPrice : '39$', yearlyPrice : '399$', description : 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',green:'/src/assets/Rectangle18.png'},
    {name : 'Premium', monthlyPrice : '59$', yearlyPrice : '599$', description : 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',green:'/src/assets/Rectangle18.png'}
  ]
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 ">
      <div className="text-center">
        <h2 className="font-extrabold md:text-5xl text-primary mb-2" text-3xl>
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4 ">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>

        {/* toggle pricing */}
        <div className="mt-16">
          <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
            <span className="font-semibold ml-8 text-2xl text-primary">Monthly </span>
            <div className="w-14 h-6 mx-6 bg-gray-300 rounded-full">
                <div className={`w-6 h-6 rounded-full ${isYearly?'bg-primary ml-8':'bg-gray-500'}`}></div>
            </div>
            <span className="font-semibold text-2xl mr-8 text-primary">Yearly</span>
          </label>
          <input type="checkbox" id="toggle" className="hidden" checked={isYearly} onClick={()=>{
            setIsYearly(!isYearly)}} />
        </div>
      </div>

      {/* pricing cards */}
      <div className="grid sm-grid-cols-2 lg:grid-cols-3 mt-20 mx-auto gap-10 md:w-11/12">
          {
            packages.map((pkg,index)=> <div key={index} className="border py-10 px-4 md:px-6 rounded-lg shadow-3xl">
              <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                <p className="text-primary my-5 text-center">{pkg.description}</p>
                <p className="text-center text-secondary text-5xl font-bold my-10 ">{isYearly?`${pkg.yearlyPrice}`:`${pkg.monthlyPrice}`} <span className="text-base font-medium text-primary">/{isYearly?'year':'month'}</span></p>
                <ul className="mt-4 space-y-2 px-4">
                  <li className="flex gap-4 items-center"> <img src={pkg.green} alt="" className="w-4 h-4"/>Videos of Lessons</li>
                  <li className="flex gap-4 items-center"> <img src={pkg.green} alt="" className="w-4 h-4"/>Homework check</li>
                  <li className="flex gap-4 items-center"> <img src={pkg.green} alt="" className="w-4 h-4"/>Additional practical task</li>
                  <li className="flex gap-4 items-center"> <img src={pkg.green} alt="" className="w-4 h-4"/>Monthly conferences</li>
                  <li className="flex gap-4 items-center"> <img src={pkg.green} alt="" className="w-4 h-4"/>Personal advice from teachers</li>
                </ul>
                <div className="w-full mx-auto flex items-center justify-center mt-12">
                    <button className="btnPrimary">Get Started</button>
                </div>
              </div>

            )
          }
      </div>
    </div>
  );
}

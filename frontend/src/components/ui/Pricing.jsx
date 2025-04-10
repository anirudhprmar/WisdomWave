import React from 'react'
import Button from './Button'

function Pricing({pricingTitle,mainColor,price,duration,point1,point2,point3,children = null,yourPlan}) {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300">
    <div className={`bg-white p-8 rounded-2xl shadow-xl border-2 border-${mainColor}-100 hover:border-${mainColor}-300 transition-colors`}>
        {children}
      <div className="text-center mb-8">
        <h5 className="text-2xl font-bold text-gray-900 mb-4">{pricingTitle}</h5>
        <p className={`text-4xl font-bold text-${mainColor}-700`}>
          ${price}
          <span className="text-base text-gray-600">/{duration}</span>
        </p>
      </div>
      <ul className="space-y-4 mb-8">
        <li className="flex items-center gap-3">
          <svg className={`w-5 h-5 text-${mainColor}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700">{point1}</span>
        </li>
        <li className="flex items-center gap-3">
          <svg className={`w-5 h-5 text-${mainColor}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700">{point2}</span>
        </li>
        <li className="flex items-center gap-3">
          <svg className={`w-5 h-5 text-${mainColor}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700">{point3}</span>
        </li>
      </ul>
      <Button variant='info' size='lg' className={`w-full bg-${mainColor}-700 text-white py-3 px-8 rounded-xl font-semibold hover:bg-${mainColor}-800 transition-colors shadow-lg`}>
        Start {yourPlan} Plan
      </Button>
    </div>
  </div>
  )
}

export default Pricing

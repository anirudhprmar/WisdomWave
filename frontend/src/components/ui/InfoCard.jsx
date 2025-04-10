import React from 'react'

function InfoCard({title,tagLine,point1,point2,point3,logoColor,svgPath,pointColor,boxColor}) {
  return (
    <div className="transform hover:scale-105 transition-transform duration-300">
<div className={`h-full p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-${boxColor}-100`}>
  <div className="flex items-center mb-4">
    <div className="p-3 bg-blue-100 rounded-lg">
      <svg className={`w-6 h-6 ${logoColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={`${svgPath}`} />
      </svg>
    </div>
    <h3 className="text-2xl font-semibold ml-4 text-gray-900">{title}</h3>
  </div>
  <p className="text-gray-700 leading-relaxed mb-4">
    {tagLine}
  </p>
  <ul className="space-y-2 text-gray-600">
    <li className="flex items-center">
      <span className={`${pointColor} mr-2`}>•</span>
      {point1}
    </li>
    <li className="flex items-center">
      <span className={`${pointColor} mr-2`}>•</span>
      {point2}
    </li>
    <li className="flex items-center">
      <span className={`${pointColor} mr-2`}>•</span>
     {point3}
    </li>
  </ul>
</div>
</div>
  )
}

export default InfoCard


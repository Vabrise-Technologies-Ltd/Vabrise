import React from 'react'
import Marquee from 'react-fast-marquee'
import { partners } from '../data'

function OurPartners() {
  return (
    <div className='container gap-8'>
      <h3 className='section-title md:mb-8 mb-4'>
        Our Clients
      </h3>
      <div>
      <Marquee
          play={true}
          speed={50} 
          delay={0}
          gradient={true}
          gradientWidth={100}
          gradientColor='white '
          pauseOnHover={true}
          autoFill={false}
        >
          {partners.map((item, index) => ( 
            <div key={index} className='flex-shrink-0'> 
              <img className='w-20 h-20' src={item.image} alt={item.name} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default OurPartners

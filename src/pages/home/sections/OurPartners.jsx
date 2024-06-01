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
          gradientWidth={200}
          gradientColor='white '
          pauseOnHover={true}
          autoFill={false}
          direction='right'
        >
          {partners.map((item, index) => ( // Duplicate the array to create the loop effect
            <div key={index} className='flex-shrink-0 mx-16'> {/* mx-4 for consistent gap */}
              <img className='w-24 h-24' src={item.image} alt={item.name} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default OurPartners

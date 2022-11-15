import Image from 'next/image'
import React from 'react'
import { HiStar } from 'react-icons/hi'

const ReviewCard = () => {

  return (
    <div className='flex flex-col w-[500px]  bg-white text-black p-6 '>
      <div className="flex p-2 w-56">
        <Image loading='lazy' src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_fashionstyle_h2-author-2.png?v=1656686412" width={90} height={70}  alt="customer" objectFit='contain'/>
        <div className="flex flex-col gap-1 pl-4">
          <p className='text-gray-900 text-sm font-semibold'>Maria Lesther</p>
          <p className='text-gray-700 text-xs font-semibold'>Fashion Designer</p>
          <div className="flex">{Array(5).fill(<HiStar className='text-yellow-400 text-lg' />)}</div>
          
        </div>
      </div>
      
      <p className='text-sm text-gray-700 pt-2'>Just right for fall and winter. Quality is there. Order usual size unless you want over sized. Absolutely beautiful and looks amazingly flattering. </p>
      
      </div>
  )
}

export default ReviewCard
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Banner = () => {
  return (
      <div className='relative'>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} showArrows interval={5000}>
          <div className='relative flex'>
            <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_fashionstyle_h1_slide_bg.jpg?v=1655728519" alt="slide1" loading="lazy" />
          <div className="absolute left-12 top-36 w-[50%] text-start text-white">
            <p className='uppercase tracking-wider'>only for you</p>
            <p className='text-7xl font-normal leading-snug' >America&apos;s Most Trusted Apparel</p>
            <p className='text-md pb-5'>Always The Real Thing, Always Design</p>
            <button className='uppercase p-3 px-6 bg-white text-black font-bold'>Shop now</button>
            </div>
        </div>
        <div className='relative flex'>
            <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/at_fashionstyle_h1_slide_bg-3.jpg?v=1655728519" alt="slide2" loading="lazy" />
          <div className="absolute left-12 top-36 w-[50%] text-start text-white">
            <p className='uppercase tracking-wider'>hot collection 2022</p>
            <p className='text-7xl font-normal leading-snug' >Fashion With Attitude</p>
            <p className='text-md pb-5'>Discover the Best For Your Styles</p>
            <button className='uppercase p-3 px-6 bg-white text-black font-bold'>Shop now</button>
            </div>
          </div>
        </Carousel>
    </div>
  )
}

export default Banner
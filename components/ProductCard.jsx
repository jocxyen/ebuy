import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion' 
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineHeart, HiOutlineEye, HiStar } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const ProductCard = ({product}) => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const addItemToCart = () => {
        dispatch(addToCart({product}))
    }
  return (
      <motion.div whileHover={{translateY:-4.75}} className='flex flex-col mt-4'>
          <div className="relative cursor-pointer" onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
              <Image loading='lazy' src={product.image} height={300} width={250} alt="product" className='rounded-md z-0'/>
              <motion.div className='opacity-0 hover:opacity-100 absolute flex gap-4 bottom-4 right-16 z-50 text-black text-[40px] transition-all ease-linear py-6 pt-36 '>
                  <BsCart3 onClick={addItemToCart} className='rounded-full px-2 py-1 bg-white shadow-lg hover:scale-105'/>
                  <HiOutlineEye className='rounded-full px-2 py-1 bg-white shadow-lg hover:scale-105'/>
                  <HiOutlineHeart className=' rounded-full px-2 py-1 bg-white shadow-lg hover:scale-105'/>
              </motion.div>
          </div>
          <p className="text-base w-64   cursor-pointer hover:text-gray-800 transition-all ease-linear">{product.title}</p>
          <p className=" text-gray-600">${product.price}</p>
    </motion.div>
  )
}

export default ProductCard
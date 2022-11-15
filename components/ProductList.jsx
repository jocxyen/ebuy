import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion';

const ProductList = ({ products }) => {
  const [selected, setSelected] = useState("women's clothing")
    useEffect(() => {
        console.log(products)
    },[])
  return (
    <>
      <div className='flex gap-8 justify-start items-center text-black py-4 pl-10 mt-4'>
          <p className="text-3xl">Shop By Categories</p>
          <div  className="flex flex-col items-center justify-center cursor-pointer pl-8 font-bold">
              <motion.p onClick={()=>setSelected("women's clothing")} whileHover={{translateY:-4.75}} className={`hover:text-gray-800 transition-all ease-linear duration-200 text-gray-500 ${selected=="women's clothing"?'text-slate-800':'' }`}>Women</motion.p>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer pl-8 font-bold"  >
            <motion.p onClick={()=>setSelected("men's clothing")} whileHover={{translateY:-4.75}} className={` hover:text-gray-800 transition-all ease-linear duration-200 text-gray-500 ${selected=="men's clothing"?'text-slate-800':'' }`}>Men</motion.p>
          </div>
    </div>
    <section className='w-full flex flex-wrap p-4 gap-12 items-center justify-center'>
          {products.filter(product=>product.category==selected).map((product) => (<ProductCard key={product.id} product={product} />))}
      </section>
    </>
  )
}




export default ProductList
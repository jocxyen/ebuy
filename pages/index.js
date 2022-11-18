import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Banner, Header, ProductList, ReviewContainer } from '../components'
import { fetchCart } from '../store/cartSlice'

export async function getStaticProps() {
  const men = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
  const women = await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    console.log("fetching")
    const products2 = await men.json()
    const products1 = await women.json()
  
  const products = products1.concat(products2)
  console.log(products)
    return {
        props: {
        products:products
        },
        revalidate: 30, // In seconds
    }
}
export default function Home({ products }) {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(state  => state.cart);
  useEffect(() => {
    dispatch(fetchCart(JSON.parse(localStorage?.getItem('cart') || [])))
    console.log("run")
  },[dispatch])
  return (
    <div className="flex flex-col w-full h-full">
      <Head>
        <title>Homely</title>
      </Head>
      
      <main>
        <Banner />
        <ProductList products={products} />
        <ReviewContainer />
   
      </main>
    </div>
  )
}


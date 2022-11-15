import Head from 'next/head'
import { useRef } from 'react'
import { Banner, Header, ProductList, ReviewContainer } from '../components'

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
export default function Home({products}) {
  return (
    <div className="flex flex-col w-full h-full">
      <Head>
        <title>Homely</title>
      </Head>
      <Header />
      <main>
        <Banner />
        <ProductList products={products} />
        <ReviewContainer />
   
      </main>
    </div>
  )
}


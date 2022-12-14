import React, { useState } from 'react'
import { BiSearchAlt2, BiUser } from 'react-icons/bi'
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineHeart } from 'react-icons/hi'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import { useSelector } from 'react-redux'
import { selectItems } from '../store/cartSlice'

const Header = () => {
    const [user, setUser] = useState(false)
    const router = useRouter()
    const { data: session } = useSession()
    const cartItems = useSelector(selectItems)
  return (
    
      <header className='w-full'>
          <div className="flex  w-full p-4 px-8 items-center flex-grow gap-3">
              <p className="font-bold  text-2xl cursor-pointer" onClick={()=>router.push('/')}>Ebuy</p>
              <div className="flex items-center flex-grow">
                <form className='flex-1'>   
                    <label for="default-search" className="mb-2 text-sm font-medium text-slate-400 sr-only dark:text-gray-300">Search</label>
                    <div className="relative w-[70%] mx-auto">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute right-2 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
              <div className="flex relative text-2xl gap-4 text-black">
                  <BiSearchAlt2 className='cursor-pointer' />
                  <BiUser className='cursor-pointer' onClick={()=>setUser(!user)} />
                  {user&&<div className="absolute w-36 z-50 text-xs text-gray-500 top-11 bg-white">
                      <p className="p-2">{ session? `Hello, ${session.user.name}`: 'Please login to continue'}</p>
                      {!session?.user?.name && <><p className="p-4 hover:text-black transition-all cursor-pointer" onClick={signIn}>Login</p>
                      <p className="p-4 hover:text-black transition-all cursor-pointer">Register</p></>}
                      <p className="p-4 hover:text-black transition-all cursor-pointer" onClick={signOut}>Logout</p>
                  </div>}
                  <HiOutlineHeart className='cursor-pointer' />
                  <div className="relative" >
                      <BsCart3 className='cursor-pointer' onClick={()=>router.push('/cart')}/>
                      <p className="text-white bg-red-600 px-1.5 rounded-full text-xs font-bold text-center absolute -top-1 -right-3" >{cartItems.length}</p>
                  </div>
            </div>
          </div>
          <div className="flex"></div>
          
    </header>
  )
}

export default Header
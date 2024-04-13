import React from 'react'
import logo from '@/asset/logo.png'
import logotext from '@/asset/logotext.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 w-full left-0 right-0 bg-emerald-700 min-h-30">
    <div className='flex p-4'>
      <Image src={logo} alt="text" height={45} className=" h-12 w-20" width={35} />
      <Image src={logotext} alt="text" height={45} className=" h-12 w-24" width={200} />

    </div>
    </nav>
  )
}

export default Navbar
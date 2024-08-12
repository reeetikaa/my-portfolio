import React from 'react'
import { LiaAddressBook } from 'react-icons/lia';

const Navbar = () => {
  const navList = ["Home", "Skills", "Projects", "About me", "Contact"];
    
  return (
    <header>
    <nav className='flex justify-center'>
      <ul className='flex gap-8 justify-center rounded-full border-2 border-slate-50 border-solid px-10 my-8'>
        {navList.map((item, index) => (
          <li className="text-white hover:text-red-600 hover:scale-110 transition-all duration-150" key={index}>{item}</li>))}
      </ul>
    </nav>
  </header>
 )
 
}

export default Navbar;

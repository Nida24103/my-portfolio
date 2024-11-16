"use client";
import React from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const[isMenuOpen, SetIsMenuOpen] = useState(false)

  const toggleMenu=() => {
    SetIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
        <div className='flex justify-between item-center'>
            <div className='text-xl font-medium'>Nida</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'>
                  <Link href='#hero'>Home</Link>
                  </li>
                <li className='menuLink'>
                  <Link href='#about'>About</Link>
                  </li>
                <li className='menuLink'>
                  <Link href='#project'>Project</Link>
                  </li>
                <li className='menuLink'>
                  <Link href='#skills'>Skills</Link>
                  </li>
                <li className='menuLink'>
                  <Link href='#contact'>Contact</Link>
                  </li>
            </ul>
<div className="md:hidden" onClick={toggleMenu}>
  {isMenuOpen ? <AiOutlineClose size={30} /> :
  <AiOutlineMenu size={30} />
  }
</div>
        </div>
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="menuLink">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className="menuLink">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className="menuLink">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar

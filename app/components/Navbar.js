"use client"
import React, { useState } from 'react';
import "./Navbar.css"
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='navbar'>
      <div className='brand'>
        <h1>Lights & Life</h1>
      </div>
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} id="appDrawer">
        <li>
          <Link onClick={toggleDrawer} href="/">Home</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/about">About</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/services">Services</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/team">Team</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/contact">Contact</Link>
        </li>
        <div className='search'>
          <input placeholder='Type text here' type="text" />
          <div><SearchIcon/></div>
        </div>
      </div>
      <ul className='mobile-support'>
        <div onClick={toggleDrawer}>
          {drawerOpen?<CloseIcon fontSize='large' color='black'/>:<MenuIcon fontSize='large' color='black'/>}

        </div>
      </ul>
    </div>
  )
}

export default Navbar
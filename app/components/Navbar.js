"use client"
import React, { useState } from 'react';
import "./Navbar.css"
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className='navbar'>
      <div className='brand'>
        <h1>Sumit Jambharkar</h1>
      </div>
      <div className={`drawer ${drawerOpen ? 'open' : ''}`} id="appDrawer">
        <li>
          <Link onClick={toggleDrawer} href="/">Home</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/sale-report">About</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/add-products">Services</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/add-products">Team</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/add-products">Gallery</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/add-products">Contact</Link>
        </li>
        <div className='search'>
          <input placeholder='Type text here' type="text" />
          <div><SearchIcon/></div>
        </div>
      </div>
      <ul className='mobile-support'>
        <div onClick={toggleDrawer}>
          {drawerOpen?<div class="hamburger-menu">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
          </div>:<div class="hamburger-menu">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
          </div>}

        </div>
      </ul>
    </div>
  )
}

export default Navbar
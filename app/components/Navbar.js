"use client"
import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import config from '../../config';

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [user, setUser] = useState(null)


  useEffect(() => {
    getUserDetails()
  }, [])
  

  const getUserDetails = async () => {
    try {
      const result = await axios.get(`${config}/api/user`);
      const userData = result.data.data;
      console.log(userData);
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error gracefully, e.g., redirect to login page or display an error message
    }
  };
  

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const logout = async() => {
    try {
      await axios.get("/api/logout")
      window.location.reload()
    } catch (error) {
      log
    }
  }

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
          <Link onClick={toggleDrawer} href="/service">Services</Link>
        </li>
        {user?<li>
          <Link onClick={toggleDrawer} href="/add-service">Add Service</Link>
        </li>:null}
        <li>
          <Link onClick={toggleDrawer} href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link onClick={toggleDrawer} href="/contact">Contact</Link>
        </li>
        {user? <li>
          <Link onClick={logout} href="/login">SignOut</Link>
        </li>:null}
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
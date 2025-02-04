import React from 'react'
import './navbar.css';


const Navbar = () => {
  return (
    <div className='navBar'>
      <nav>
  <ul>
    <li>
      <a href="home">Home</a>
    </li>
    <li>
      <a href="leaderboard">LeaderBoard</a>
    </li>
    <li>
      <a href="Tutorials">Tutorials</a>
    </li>
    <li>
      <a href="dashboard">Profile</a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Navbar;

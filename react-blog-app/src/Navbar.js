import React from 'react'

export const Navbar = () => {
  return (
   <nav className="navbar">
     <h1>My Blog</h1>
     <div className="links">
       <a href="/">Home</a>
       <a href="/create" >New blog</a>
     </div>
   </nav>
  )
}

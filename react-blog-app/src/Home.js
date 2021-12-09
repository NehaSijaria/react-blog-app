import React from 'react'

export const Home = () => {
  const handleClick = () => {
    console.log('you clicked me')
  }
  return (
    <div className="home">
      <h1>Home page</h1>
      {/* function(by ref) handling dynamically */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

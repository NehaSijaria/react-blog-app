import React from 'react'

export const Home = () => {
  const handleClick = () => {
    console.log('you clicked me')
  }
  const handleClickAgain = (name) => {
    console.log(`you clicked me ${name}`)
  }
  return (
    <div className="home">
      <h1>Home page</h1>
      {/* function(by ref) handling dynamically */}
      <button onClick={handleClick}>Click Me</button>
      {/* Cant pass args like this: its invoking which is not acceptable, so use anonymouse fn */}
      {/* <button onClick={handleClickAgain(2)}>Click Again</button> */}
      <button onClick={() => handleClickAgain('sam')}>Click Again</button>
    </div>
  )
}

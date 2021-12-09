import React from 'react'

export const Home = () => {
  //e is accessible as argument
  const handleClick = (e) => {
    console.log(e, 'you clicked me')
  }
  const handleClickAgain = (name,event) => {
    console.log(`you clicked me ${name}`, event.target)
  }
  return (
    <div className="home">
      <h1>Home page</h1>
      {/* function(by ref) handling dynamically */}
      <button onClick={handleClick}>Click Me</button>
      {/* Cant pass args like this: its invoking which is not acceptable, so use anonymouse fn */}
      {/* <button onClick={handleClickAgain(2)}>Click Again</button> */}
      <button onClick={(event) => handleClickAgain('sam', event)}>Click Again</button>
    </div>
  )
}

import { useState } from "react";

export const Home = () => {
  const [name, setName] = useState('Maria');
  const [age, setAge] = useState(15);
  //let name = 'John';
  //e is accessible as argument
  const handleClick = () => {
    //name='sam';
    //console.log(name)
    setName('John');
    setAge(25);
  }
  return (
    <div className="home">
      <h1>Home page</h1>
      <p>{ name } is {age} years old</p>
      {/* it wont render updated name bacause its not reactive until use state mgmt */}
      <button onClick={handleClick}>Click Me here</button>
    </div>
  )
}

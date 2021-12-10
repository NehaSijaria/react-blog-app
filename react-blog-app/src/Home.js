import { useState } from "react";

export const Home = () => {
  let blogDesc = [
    { title: 'Diet Chart', body: 'lorem ipsum...', author: 'sam', id: 1 },
    { title: 'Healthy Food!', body: 'lorem ipsum...', author: 'John', id: 2 },
    { title: 'Weekend-Cheat-Foods', body: 'lorem ipsum...', author: 'sam', id: 3 }
  ]
  //initial value will be array of blogs
 
  return (
    <div className="home">
      <BlogList />
    </div>
  )
}


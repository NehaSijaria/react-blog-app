import { useState } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  let blogDesc = [
    { title: 'Diet Chart', body: 'lorem ipsum...', author: 'sam', id: 1 },
    { title: 'Healthy Food!', body: 'lorem ipsum...', author: 'John', id: 2 },
    { title: 'Weekend-Cheat-Foods', body: 'lorem ipsum...', author: 'sam', id: 3 }
  ]
  //initial value will be array of blogs
  const [blogs, setBlogs] = useState(blogDesc)

  return (
    <div className="home">
      <BlogList blogDesc={blogDesc} title="My Blog List" />
      <BlogList blogDesc={blogDesc.filter((blog) => blog.author === 'sam')} title="Sam's Blog List" />
    </div>
  )
}


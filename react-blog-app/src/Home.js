import { useState } from "react";

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
      {blogs.map((blog) => (
        //return jsx template must be inside ()
        // react will keep track each item thru keyproperty(unique).each root el in map must hv key.
        <div className="blog-preview" key={blog.id}>
          <h2>Title: {blog.title}</h2>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  )
}


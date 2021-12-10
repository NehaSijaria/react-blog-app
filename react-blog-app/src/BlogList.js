import React from 'react'

export const blogList = () => {
  const [blogs, setBlogs] = useState(blogDesc)
  return (
    <div className="blog-list">
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

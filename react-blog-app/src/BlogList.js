import React from 'react'

export const BlogList = ({ blogDesc, title }) => {
  // const blogs = props.blogDesc;
  // const title = props.title;
   //props = { blogDesc, title }
  //console.log(props,blogs);

  return (
    <div className="blog-list">
      <h2> { title } </h2>
    {blogDesc.map((blog) => (
      //return jsx template must be inside ()
      // react will keep track each item thru keyproperty(unique).each root el in map must hv key.      
      <div className="blog-preview" key={blog.id}>
        <h2>Title: { blog.title }</h2>
        <p>Author: { blog.author }</p>
      </div>
    ))}
    </div>
  );
}

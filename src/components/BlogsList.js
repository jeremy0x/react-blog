import { Link } from 'react-router-dom';

const BlogsList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className='blog' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className='blog__title'>{blog.title.substring(0, 20)}...</h2>
            <p className='blog__description'>{blog.body.substring(0, 72)}...</p>
            <p className='blog__author'>Author: {blog.author}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogsList;

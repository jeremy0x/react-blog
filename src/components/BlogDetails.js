import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      console.log('Blog deleted');
      history.push('/');
    });
  };

  return (
    <div className='blog-details'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {blog && (
        <article className='blog'>
          <h2 className='title'>{blog.title}</h2>
          <p className='author'>Written by: {blog.author}</p>
          <p className='body'>{blog.body}</p>

          <button className='button-89 red-button' onClick={handleDelete}>
            Delete blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

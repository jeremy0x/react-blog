import BlogsList from './BlogsList';
import useFetch from '../hooks/useFetch';
import UseStatePractice from './UseStatePractice';

const Body = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

  return (
    <main className='home'>
      <h1 className='home__title'>Blogs by the Blue Justice Team</h1>

      <div className='blogs-container'>
        {error && <div>{error}</div>}
        {isPending && <div>Fetching...</div>}
        {blogs && <BlogsList blogs={blogs} />}
      </div>

      <UseStatePractice />
    </main>
  );
};

export default Body;

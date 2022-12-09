import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Sorry, that page cannot be found.</p>
      <Link to='/'>
        <button className='button-89'>Back to the homepage...</button>
      </Link>
    </div>
  );
};

export default NotFound;

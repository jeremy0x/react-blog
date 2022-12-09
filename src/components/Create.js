import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Sonic');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('New blog added');
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <main className='create'>
      <h2 className='create__title'>Create a new blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Blog title'
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='Blog body'
        ></textarea>

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='sonic'>Sonic</option>
          <option value='tails'>Tails</option>
          <option value='knuckles'>Knuckles</option>
        </select>

        {!isPending && <button className='button-89' type="submit">Add Blog</button>}
        {isPending && <button className='button-89' type="submit" disabled>Adding blog...</button>}
      </form>
    </main>
  );
};

export default Create;

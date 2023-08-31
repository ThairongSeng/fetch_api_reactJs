import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <div>
      <div >
        <button className='btn' onClick={() => setResourceType('posts')}>Posts</button>
        <button className='btn' onClick={() => setResourceType('users')}>Users</button>
        <button className='btn' onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}

export default App;

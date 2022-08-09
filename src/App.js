import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const client = axios.create({
  baseURL : 'https://jsonplaceholder.typicode.com'
})



const App = () => {
  const [posts, setPosts] = useState({})
  const [isLoading, setIsLoading] = useState(false)


  const getPostById = async () => {
    try {
      const response = await client.get('/posts/1')
      console.log(response);
      setPosts(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const createPost = async () => {
    setIsLoading(true)
    try {
      const response = await client.post('/posts',{
        title: 'HELLO WORLD AJG',
        body: 'INI BARU DI POST'
      });
      setPosts(response.data)
    } catch (error) {
      console.log(error);
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPostById()
  }, [])

  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <button disabled={isLoading} onClick={createPost}>CREATE POST</button>
    </div>
  );
}

export default App;

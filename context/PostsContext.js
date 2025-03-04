import React, { createContext, useContext, useState, useEffect } from 'react';


const PostsContext = createContext();

export const usePosts = () => useContext(PostsContext);

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={posts}>
      {children}
    </PostsContext.Provider>
  );
}




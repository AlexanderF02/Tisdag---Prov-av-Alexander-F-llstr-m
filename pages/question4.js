// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.

// 4. Hämta posts från API (3p)
// Hämta posts från: https://jsonplaceholder.typicode.com/posts
// Spara posts i context.
// Skapa en länk till sidan /posts och visa listan med posts där.
// för varje post ska `title`och `body` visas.

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PostsList from './PostsList';

export default function Question4() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Question 4</h1>
      <Link href="/posts">Go to Posts</Link>
      {router.pathname === '/posts' && <PostsList posts={posts} />}
    </div>
  );
}





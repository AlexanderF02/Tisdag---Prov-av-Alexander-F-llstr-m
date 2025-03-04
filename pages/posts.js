import React from 'react';
import PostsList from './PostsList';
import { PostsProvider } from '../context/PostsContext';

export default function PostsPage() {
  return (
    <PostsProvider>
      <PostsList />
    </PostsProvider>
  );
}
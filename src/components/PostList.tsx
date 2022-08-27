import React from 'react';
import { PostType } from '../data/PostsData';

type PostListProps = {
  posts: PostType[];
};

function PostList({ posts }: PostListProps) {
  console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          <span>{post.title}</span>
        </li>
      ))}
    </>
  );
}

export default PostList;

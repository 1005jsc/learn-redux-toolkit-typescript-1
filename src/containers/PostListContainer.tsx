import { useEffect } from 'react';
import PostList from '../components/PostList';
import { getInitialPosts, postsActions } from '../modules/posts';
import { useAppDispatch, useAppSelector } from '../store';

const PostListContainer = () => {
  const { data, loading, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return (
    <>
      <PostList posts={data} />;
    </>
  );
};

export default PostListContainer;

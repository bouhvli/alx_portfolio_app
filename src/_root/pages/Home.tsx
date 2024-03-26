import ErrorMessage from '@/components/shared/ErrorMessage';
import Loader from '@/components/shared/Loader';
import PostCard from '@/components/shared/PostCard';
import UserCard from '@/components/shared/UserCard';
import { useGetRecentPosts, useGetUsers } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';

const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isPostError,
  } = useGetRecentPosts();
  const {
    data: peers,
    isPending: isPeersLoading,
    isError: isPeersError,
  } = useGetUsers(10);

  if (isPostError || isPeersError) {
    <ErrorMessage />
  }
  return (
    <div className='flex flex-1'>
      <div className='home-container'>
        <div className='home-posts'>
          <h2 className='h3-bold md:h2-bold text-left w-full'>
            Home Feed
          </h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
              <ul className='flex flex-col flex-1 gap-9 w-full'>
                {posts?.documents.map((post: Models.Document) => (
                  <li key={post.$id} className='flex justify-center w-full'>
                    <PostCard post={post} key={post.caption} />
                  </li>
                ))}
              </ul>
          )}
        </div>
      </div>
      <div className='home-creators'>
        <h3 className='h2-bold text-light-1'>All students</h3>
      {isPeersLoading && !peers ? (
            <Loader />
          ) : (
              <ul className='user-grid'>
                {peers?.documents.map((peer: Models.Document) => (
                  <li key={peer.$id} className='flex justify-center w-full'>
                    <UserCard user={peer} />
                  </li>
                ))}
              </ul>
          )}
      </div>
    </div>
  )
}

export default Home
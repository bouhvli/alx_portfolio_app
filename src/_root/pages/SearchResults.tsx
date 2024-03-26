import Loader from '@/components/shared/Loader';
import { Models } from 'appwrite';
import GridPostList from './GridPostList';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchPosts?: Models.DocumentList<Models.Document>;
}

const SearchResults = ({ isSearchFetching, searchPosts }: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />
  if (searchPosts && searchPosts.documents.length > 0) {
    return <GridPostList posts={searchPosts.documents} />
  } 
  return (
    <p className='text-light-4 mt-10 text-center w-full'>
      Try something else we couldn't find what you are looking for
    </p>
  )
}

export default SearchResults
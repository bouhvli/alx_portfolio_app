import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations"
import { Models } from "appwrite";
import GridPostList from "./GridPostList";

const Saved = () => {
  const { data: user } = useGetCurrentUser();
  const savePosts = user?.save.map((savePost: Models.Document) => ({
    ...savePost.post,
    creator: {
      imageUrl: user.imageUrl,
    },
  })).reverse();
  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img src="/assets/icons/save.svg"
          alt="save"
          className="invert-white"
          width={36}
          height={36}
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Saved Posts</h2>
      </div>
      {!user ? (
        <Loader />
      ) : (
          <ul className="w-full flex justify-center max-w-5xl">
            {savePosts - length === 0 ? (
              <p className="text-light-4">Nothing saved</p>
            ) : (
                <GridPostList posts={savePosts} showStats={false} />
            )}
          </ul>
      )}
    </div>
  )
}

export default Saved
import Loader from "@/components/shared/Loader";
import UserCard from "@/components/shared/UserCard";
import { toast } from "@/components/ui/use-toast";
import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const AllUsers = () => {
  const {
    data: users,
    isPending: isUsersLoading,
    isError,
  } = useGetUsers();

  if (isError) {
    toast({ title: "Somthing went wrong try again please" });
    return;
  }

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Students</h2>
        {isUsersLoading && !users ? (
            <Loader />
          ) : (
              <ul className='user-grid'>
                {users?.documents.map((user: Models.Document) => (
                  <li key={user.$id} className='flex justify-center w-full'>
                    <UserCard user={user} />
                  </li>
                ))}
              </ul>
          )}
      </div>
    </div>
  )
}

export default AllUsers
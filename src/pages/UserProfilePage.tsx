import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import LoaderRounded from "@/components/LoaderRounded";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"

const UserProfilePage = () => {
  const { updateUser , isLoading:isUpdateLoading} = useUpdateMyUser();
  const {currentUser , isLoading : isGetLoading} = useGetMyUser();

  if(isGetLoading){
     return <LoaderRounded/>
  }

  if(!currentUser){
    return <span>Unable to load...Please refresh</span>
  }
  return (
    <div>
      <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    </div>
  )
}

export default UserProfilePage

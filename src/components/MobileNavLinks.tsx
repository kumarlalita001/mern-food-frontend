import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"

const MobileNavLinks = () => {
    const {logout} = useAuth0();
  return (
    <div className="flex  w-full flex-col gap-2 items-center justify-center ">
        <Link to={"user-profile"}>profile</Link>
        <Button className="w-full" onClick={() => logout()}>Logout</Button>
      
    </div>
  )
}

export default MobileNavLinks

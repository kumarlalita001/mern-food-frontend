import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";


const UserMenu = () => {
  const {user,logout} = useAuth0();
  console.log(user,"USERMenu");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center"> <FaUserAlt/>{user?.email}</DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white px-4 py-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to={"user-profile"}><DropdownMenuItem>Profile</DropdownMenuItem></Link>

        <Button className="flex flex-1" onClick={() => logout()}>LogOut</Button>
        

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

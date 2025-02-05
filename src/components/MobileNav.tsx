import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const {user , isAuthenticated, loginWithRedirect} = useAuth0();

  return (
    <Sheet>
      <SheetTrigger className="py-2">
        <BsFillMenuButtonWideFill size={25} />
      </SheetTrigger>
      
      <SheetContent className="space-y-4">
        <SheetHeader>

          <SheetTitle>
              {isAuthenticated ? <div>{user?.email}</div> : <div>Welcome to FoodTime</div>}</SheetTitle>
          <Separator/>
          <SheetDescription className="flex ">
            {
              isAuthenticated ? <MobileNavLinks/> : <Button onClick={() => loginWithRedirect()} className="flex-1">Get Started</Button>
            }
            
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

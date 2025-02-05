import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './ui/button'
import UserMenu from './UserMenu';


const MainNav = () => {
  const {loginWithRedirect , isAuthenticated} = useAuth0();

  return (
    <span>{isAuthenticated ? <UserMenu/> :   <Button onClick={ async () => {
      await loginWithRedirect();
    }} className=' '>Get Started</Button>}</span>
   
  )
}

export default MainNav

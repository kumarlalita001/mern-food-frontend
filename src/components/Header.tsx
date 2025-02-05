import MainNav from "./MainNav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="flex w-screen items-center justify-between bg-gray-100 shadow-lg  px-6 md:px-10 py-2">
       <h1>TheLastFood</h1>
      
       <div className="md:hidden">
        <MobileNav/>
       </div>
       <div className="hidden md:block">
        <MainNav/>
       </div>
    </header>
  )
}

export default Header

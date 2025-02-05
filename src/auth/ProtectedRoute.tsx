import LoaderRounded from '@/components/LoaderRounded';
import { useAuth0 } from '@auth0/auth0-react'
import { Loader, Loader2 } from 'lucide-react';

import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const {isAuthenticated , isLoading} = useAuth0();

    console.log("isAuthenticated",isAuthenticated);
    if(isLoading){
        return <LoaderRounded/>
    }

    console.log("isAuthenticated",isAuthenticated);

  return isAuthenticated ? <Outlet/> : <Navigate to={"/"} replace/>
    
}

export default ProtectedRoute

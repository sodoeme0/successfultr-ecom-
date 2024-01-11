import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    // Get the current location from the router
    const location = useLocation();
    
    // Get the roles information from the useAuth hook
    const { roles } = useAuth();
    
    // Define the content to be rendered based on user's roles
    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />  // If user has allowed role(s), render the child components
            : <Navigate to="/login" state={{ from: location }} replace /> // If not, navigate to login page
    );

    // Render the determined content
    return content;
};

export default RequireAuth; 

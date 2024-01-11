import { useSelector } from 'react-redux';
import { selectCurrentToken } from "../features/auth/authSlice";
import jwtDecode from 'jwt-decode';

const useAuth = () => {
    // Get the current token from the Redux store
    const token = useSelector(selectCurrentToken);
    
    let isUser = false;
    let status = "Guest";
    
    // Check if a valid token exists
    if (token && (token !== "undefined")) {
        // Decode the token to extract user information
        const decoded = jwtDecode(token);
        
        // Extract email and roles from the decoded user info
        const { email, roles } = decoded.UserInfo;

        // Check if the user has the 'user' role
        isUser = roles.includes('user');
      
        // If the user has the 'user' role, update the status
        if (isUser) status = "User";

        // Return the user's email, roles, status, and 'isUser' flag
        return { email, roles, status, isUser };
    }

    // Return default values if no valid token exists
    return { email: '', roles: [], isUser, status };
};

export default useAuth;

import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
const Login = () => {
  // Refs to hold DOM element for user 
  const userRef = useRef();

  // State to manage username, password, error message, and persistent login setting
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");


  // Hook to navigate between routes
  const navigate = useNavigate();
  
  // Redux dispatcher for dispatching actions
  const dispatch = useDispatch();

  // Mutation hook for login API request
  const [login, { isLoading }] = useLoginMutation();

  // If user is already authenticated, redirect to home page
  if (useAuth().roles.length > 0) {
    return <Navigate to="/" replace />;
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make login API request and get access token
      const accessToken = await login({ email: username, password });
      
      // Dispatch Redux action to set credentials in store
      dispatch(setCredentials({ accessToken: accessToken.data }));
      
      // Clear username and password fields
      setUsername("");
      setPassword("");
      
      // Navigate to the favorites page
      navigate("/favorites");
    } catch (err) {
      // Handle different error scenarios
      //(err handling not implemented!!)
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };

  // Functions to handle user input for username and password fields
  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  // Render the Login component
  return (
    <>
      <div class="signup-signin-form">
        <div class="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handlePwdInput}
              value={password}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

// Export the Login component as the default export
export default Login;
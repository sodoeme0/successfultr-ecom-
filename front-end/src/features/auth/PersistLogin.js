import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import usePersist from "../../hooks/usePersist";
import { selectCurrentToken } from "./authSlice"


const PersistLogin = () => {
const [persist] = usePersist("persist", false); // Set key to "persist" and initialValue to false
  const token = useSelector(selectCurrentToken);
  console.log(token);
  let content;
  if (!persist) {
    // persist: no
    console.log("no persist");
    content = <Outlet />;
  } else if (token) {
    // persist: yes, token: yes
    console.log("token");
    content = <Outlet />;
  } else {
    // persist: yes, token: no
    console.log("no token");
    content = (
      <p className="errmsg">
        {`You need to login - `}
        <Link to="/login">Please login</Link>.
      </p>
    );
  }

  return content;
};

export default PersistLogin;

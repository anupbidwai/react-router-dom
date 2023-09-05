import { useState } from "react";
import { useAuth } from "@/utility/auth";
import { useLocation, useNavigate } from "react-router-dom";
function Login() {
  const [userValue, setUserValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const auth = useAuth();

  const handleChange = (e) => {
    const { value } = e.target;
    setUserValue(value);
  };

  const handleLogin = () => {
    if (!!userValue.trim()) {
      auth.login(userValue);
      navigate(redirectPath);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="userName">Username</label>
      <div>
        <input
          type="text"
          placeholder="username"
          name="userName"
          id="userName"
          value={userValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
}
export default Login;

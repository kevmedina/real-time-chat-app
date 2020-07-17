import React from "react";

const Login = () => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;

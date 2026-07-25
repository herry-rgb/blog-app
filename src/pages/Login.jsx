import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("token", "loggedIn");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card>
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome Back!
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to access your dashboard
        </p>

        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button text="Sign In" 
          type="submit" />
        </form>
      </Card>
    </div>
  );
}

export default Login;
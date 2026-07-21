import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my Blog App</p>

      <button onClick={() => navigate("/posts")}>
        Go To Posts
      </button>
    </div>
  );
}

export default Home;
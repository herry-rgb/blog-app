import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/postService";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Posts Page</h1>

      {posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
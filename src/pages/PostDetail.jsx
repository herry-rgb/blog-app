import { useParams } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Post Detail Page</h1>
      <h2>Post ID: {id}</h2>
    </div>
  );
}

export default PostDetail;
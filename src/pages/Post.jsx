import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postRes.json();
        setPost(postData);

        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
        const userData = await userRes.json();
        setUser(userData);

        const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const commentsData = await commentsRes.json();
        setComments(commentsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPostData();
  }, [postId]);

  if (loading || !post || !user) return <Loader />;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
      <p className="text-sm text-gray-500">
        Author:{" "}
        <Link to={`/users/${user.id}`} className="text-blue-500 underline">
          {user.name}
        </Link>
      </p>

      <div>
        <h3 className="text-xl font-semibold mt-6 mb-2">Comments:</h3>
        <ul className="space-y-2">
          {comments.map((comment) => (
            <li key={comment.id} className="p-3 border rounded-lg">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-sm text-gray-600">{comment.email}</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Post;

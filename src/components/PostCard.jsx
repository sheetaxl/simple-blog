import { Link } from "react-router-dom";

function PostCard({ post, author }) {
  return (
    <div className="bg-white border hover:bg-gray-50 shadow-sm p-4 rounded-lg">
      <Link to={`/posts/${post.id}`} className="text-xl font-bold text-blue-600 hover:underline">
        {post.title}
      </Link>
      <p className="text-sm text-gray-500">by {author}</p>
    </div>
  );
}

export default PostCard;


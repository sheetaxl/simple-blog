import { Link } from "react-router-dom";

function PostComponent({ post, author }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md border hover:shadow-lg transition duration-300 w-full sm:w-[95%] md:w-[80%] mx-auto">
      <Link to={`/posts/${post.id}`}>
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 hover:underline mb-2 line-clamp-2">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-700 text-sm sm:text-base mb-3 line-clamp-3">
        {post.body}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 italic">By {author}</p>
    </div>
  );
}

export default PostComponent;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");
        const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");

        const postsData = await postsRes.json();
        const usersData = await usersRes.json();

        setPosts(postsData);
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getAuthorName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown Author";
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition">
          <Link to={`/posts/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
            {post.title}
          </Link>
          <p className="text-sm text-gray-500">by {getAuthorName(post.userId)}</p>
        </div>
      ))}
    </div>
  );
}

// ✅ This is required!
export default Home;



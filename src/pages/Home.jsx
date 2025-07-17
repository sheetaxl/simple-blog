import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import PostCard from "../components/PostCard";
import UserCard from "../components/UserCard";


function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

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
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Simple Blog Platform</h1>

      <div className="space-y-4">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} author={getAuthorName(post.userId)} />
        ))}
      </div>
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-purple-700">Users</h2>
<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
  {users.map((user) => (
    <UserCard key={user.id} user={user} />
  ))}
</div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
  disabled={currentPage === 1}
  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
>
  Previous
</button>

<button
  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
  disabled={currentPage === totalPages}
  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
>
  Next
</button>

      </div>
    </div>
  );
}

export default Home;



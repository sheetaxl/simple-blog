import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import PostComponent from "../components/PostComponent";

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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

  const renderPageNumbers = () => {
    return (
      <div className="flex flex-wrap justify-center mt-6 gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-black mb-6">
        Simple Blog Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <PostComponent key={post.id} post={post} author={getAuthorName(post.userId)} />
        ))}
      </div>

      {renderPageNumbers()}
    </div>
  );
}

export default Home;



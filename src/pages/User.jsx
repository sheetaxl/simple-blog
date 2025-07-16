import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function User() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await res.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading || !user) return <Loader />;

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-blue-700">User Profile</h2>
      <p><span className="font-semibold">Name:</span> {user.name}</p>
      <p><span className="font-semibold">Username:</span> {user.username}</p>
      <p><span className="font-semibold">Email:</span> {user.email}</p>
      <p>
        <span className="font-semibold">Website:</span>{" "}
        <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-500 underline">
          {user.website}
        </a>
      </p>
    </div>
  );
}

export default User;

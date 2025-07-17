import UserCard from "../components/UserCard";

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
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 border">

      <h2 className="text-2xl font-bold text-blue-700">User Profile</h2>
     <UserCard user={user} />

    </div>
  );
}

export default User;

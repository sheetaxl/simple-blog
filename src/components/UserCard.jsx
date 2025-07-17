function UserCard({ user }) {
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {user.website}
        </a>
      </p>
    </div>
  );
}

export default UserCard;

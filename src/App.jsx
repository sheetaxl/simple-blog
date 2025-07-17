import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User";

function App() {
  return (
    <div className="min-h-screen bg-purple-200 p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;

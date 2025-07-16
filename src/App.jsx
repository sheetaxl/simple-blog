import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Simple Blog Platform</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

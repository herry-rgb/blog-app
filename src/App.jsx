       import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Routes>
      {/* Login Page (Default) */}
      <Route path="/" element={<Login />} />

      {/* Pages with Navbar */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
          </>
        }
      />

      <Route
        path="/posts"
        element={
          <>
            <Navbar />
            <Posts />
          </>
        }
      />

      <Route
        path="/posts/:id"
        element={
          <>
            <Navbar />
            <PostDetail />
          </>
        }
      />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
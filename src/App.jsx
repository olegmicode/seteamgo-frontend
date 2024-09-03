import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BroadcasterPage from "./pages/BroadcasterPage";
import ListenerPage from "./pages/ListenerPage";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/broardcast">BROARD CAST</Link>
            </li>
            <li>
              <Link to="/listener">LISTENER</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<BroadcasterPage />} />
          <Route path="/broardcast" element={<BroadcasterPage />} />
          <Route path="/listener" element={<ListenerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

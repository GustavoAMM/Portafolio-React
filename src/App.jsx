import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Email from "./pages/Email";
import Skills from './pages/Skills';
import Sidebar from './pages/Sidebar';
import Body from './pages/Body';
import Projects from './pages/Projects'

function App() {
  return (
    <div className="flex my-20">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Body />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="email" element={<Email />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

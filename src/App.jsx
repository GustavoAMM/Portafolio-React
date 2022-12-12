import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Email from "./pages/Email";
import Skills from './pages/Skills';
import Projects from './pages/Projects'
import Home from './pages/Home'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="email" element={<Email />} />
        </Route>
      </Routes>
  );
}

export default App;

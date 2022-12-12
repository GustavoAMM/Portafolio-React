import Navbar from "./Navbar";
import Body from "./Body";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="flex">
      <div className="px-2">
        <Navbar></Navbar>
      </div>
      <div className="px-2 w-3/4">
        <Body></Body>
      </div>
      <div className="px-10 w-1/4">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

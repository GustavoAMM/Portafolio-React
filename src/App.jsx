import Navbar from "./Navbar";
import Body from "./Body";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="flex ">
      <div className="px-2 grid content-center">
        <Navbar></Navbar>
      </div>
      <div className="px-2 w-3/4  grid content-center">
        <Body></Body>
      </div>
      <div className="px-4 w-1/4 grid content-center">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

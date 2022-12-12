import Navbar from "./Navbar";
import Body from "./Body";
function App() {
  return (
    <div className="flex">
      <div className="px-2">
        <Navbar></Navbar>
      </div>
      <div className="px-2">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;

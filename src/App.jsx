import Navbar from "./Navbar";
import Body from "./Body";
function App() {
  return (
    <div className="flex px-5 py-5">
      <Navbar></Navbar>
      <div className="px-10">
        <Body></Body>
      </div>
    </div>
  );
}

export default App;

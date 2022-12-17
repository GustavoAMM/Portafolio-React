import Body from "../components/Body";
import Slidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="xl:flex sm:grid">
      <div className="xl:w-4/5 sm:w-full sm:px-4 ">
        <Body></Body>
      </div>
      <div className="mx-6 sm:my-4">
        <Slidebar></Slidebar>
      </div>
    </div>
  );
}

export default Home;

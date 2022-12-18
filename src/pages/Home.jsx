import Body from "../components/Body";
import Slidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="xl:flex sm:grid grid xl:items-center">
      <div className="xl:w-[900px] xl:h-96 md:w-full w-full xl:px-4 sm:px-4 px-3 xl:mt-0 sm:mt-12 mt-12">
        <Body></Body>
      </div>
      <div className="lx:mx-6 sm:my-12 lx:h-full h-full my-12">
        <Slidebar></Slidebar>
      </div>
    </div>
  );
}

export default Home;

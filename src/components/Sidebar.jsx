import { TiDownloadOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";
import "./style/Body.css"

function Sidebar() {
  return (
    <div className="xl:grid sm:flex content-around h-full sm:justify-evenly">
      {/* About me */}
      <div className="rounded-3xl p-4 xl:h-48 sm:h-48 xl:w-60 sm:w-96 text-white " style={{ background: "#191724" }}>
        <h1 className="text-white text-center font-mono font-bold text-2xl my-4">About <span style={{ color: "crimson" }}>me</span></h1>
        <div className="sm:text-xl xl:text-lg">
        <div className="flex">
          <TiArrowRightOutline className="my-1 scale-150" style={{ color: "crimson" }} />
          <p className="px-2 texto-body">Age: 20</p>
        </div>
        <div className="flex">
          <TiArrowRightOutline className="my-1 scale-150" style={{ color: "crimson" }} />
          <p className="px-2 texto-body">BIrthday: 31 March</p>
        </div>
        <div className="flex">
          <TiArrowRightOutline className="my-1 scale-150" style={{ color: "crimson" }} />
          <p className="px-2 texto-body">Country: México</p>
        </div>
        </div>
      </div>
      {/* CV */}
      <div className="rounded-3xl p-4 xl:h-36 sm:h-full" style={{ background: "#191724" }}>
        <h1 className="text-white text-center font-mono font-bold text-2xl mt-2 mb-6">Curri<span className="font-mono" style={{ color: "crimson" }}>culum</span></h1>
        <div className="grid content-center justify-items-center ">
          <a href="#" >
            <TiDownloadOutline className="w-12 h-12 hover:w-14 hover:h-14 animate-bounce" style={{ color: "crimson" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

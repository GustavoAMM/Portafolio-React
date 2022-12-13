import { TiDownloadOutline } from "react-icons/ti";
import {TiArrowRightOutline} from "react-icons/ti";

function Sidebar() {
  return (
    <div className="grid content-around h-full">
      {/* About me */}
      <div className="rounded-3xl p-4 h-48 text-white " style={{ background: "#191724" }}>
        <h1 className="text-center font-bold text-xl py-4">About me</h1>
        <div className="flex">
          <TiArrowRightOutline className="my-1 scale-150" style={{color:"crimson"}}/>
          <p className="px-2 font-thin">Age: 20</p>
        </div>
        <div className="flex">
          <TiArrowRightOutline className="my-1 scale-150" style={{color:"crimson"}}/>
          <p className="px-2 font-thin">BIrthday: 31 March</p>
        </div>
        <div className="flex">
          <TiArrowRightOutline className="my-1 scale-150" style={{color:"crimson"}}/>
          <p className="px-2 font-thin">Country: México</p>
        </div>
      </div>
      {/* CV */}
     { <div className="rounded-3xl p-4 h-36" style={{ background: "#191724" }}>
        <h1 className="text-white text-center font-bold py-4 text-xl">
          Curriculum
        </h1>
        <div className="flex justify-center ">
          <a href="#" >
            <TiDownloadOutline className="w-12 h-12 hover:w-14 hover:h-14" style={{color:"crimson"}} />
          </a>
        </div>
      </div>}
    </div>
  );
}

export default Sidebar;

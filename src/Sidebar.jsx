import { FcDownload } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
function Sidebar() {
  return (
    <div>
      <div className="rounded-3xl p-8 my-2" style={{ background: "#191724" }}>
        <h1 className="text-white text-center font-mono font-bold py-2 text-xl">About me</h1>
        <ul class="list-outside text-white">
          <div className="flex">
            <FcNext />
            <li className="px-2"> Age: 20</li>
          </div>
          <div className="flex">
            <FcNext />
            <li className="px-2"> BIrthday: 31 March</li>
          </div>
          <div className="flex">
            <FcNext />
            <li className="px-2"> Country: México</li>
          </div>
        </ul>
      </div>

      {/* Division */}

      <div className="rounded-3xl p-2" style={{ background: "#191724" }}>
        <h1 className="text-white text-center font-mono font-bold py-2 text-xl">
          Curriculum{" "}
        </h1>
       <div className="flex justify-center">
       <a href="" className="py-2">
          <FcDownload className="w-12 h-12" />
        </a>
       </div>
      </div>
    </div>
  );
}

export default Sidebar;

import { FcOpenedFolder } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

function Navbar() {
  return (
    <div>
      <nav className="rounded-3xl grid content-center gap-10 py-4 px-2" style={{background:"#191724"}}>
        <a href="">
          <FcHome className="w-8 h-8"/>
        </a>
        <a href="">
          <FcInfo className="w-8 h-8" />
        </a>
        <a href="">
          <FcOpenedFolder className="w-8 h-8"></FcOpenedFolder>
        </a>
        <a href="">
          <FcInvite className="w-8 h-8" />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;

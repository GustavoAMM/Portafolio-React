import { FcOpenedFolder } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex">
     <div>
     <nav
        className="rounded-3xl grid content-center gap-10 py-4 px-2 mx-4"
        style={{ background: "#191724" }}
      >
        <Link to="/">
          <FcHome className="w-8 h-8" />
        </Link>
        <Link to="/skills">
          <FcInfo className="w-8 h-8" />
        </Link>
        <Link to="/projects">
          <FcOpenedFolder className="w-8 h-8" />
        </Link>
        <Link to="/email">
          <FcInvite className="w-8 h-8" />
        </Link>
      </nav>
     </div>
     <div>
     <Outlet/>

     </div>
    </div>
  );
}

export default Navbar;

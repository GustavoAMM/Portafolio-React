import { FcOpenedFolder } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex">
      <div className="w-24">
        <nav
          className="rounded-3xl grid content-around justify-center w-12 h-64 absolute top-40 left-6"
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
      <div className="w-full h-screen grid justify-items-center content-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;

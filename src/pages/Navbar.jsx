import { FcOpenedFolder } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="xl:flex sm:grid sm:fixed xl:relative sm:w-full">
      <div className="xl:w-24 sm:w-full grid justify-items-center content-center">
        <nav
          className="xl:rounded-3xl sm:rounded-b-3xl xl:grid sm:flex xl:content-around xl:justify-center xl:w-12 sm:w-full xl:h-64 sm:h-20 bg-[#191724] sm:items-center sm:justify-around"
        >
          <Link to="/">
            <FcHome className="w-8 h-8 hover:scale-125" />
          </Link>
          <Link to="/skills">
            <FcInfo className="w-8 h-8 hover:scale-125" />
          </Link>
          <Link to="/projects">
            <FcOpenedFolder className="w-8 h-8 hover:scale-125" />
          </Link>
          <Link to="/social">
            <FcInvite className="w-8 h-8 hover:scale-125" />
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

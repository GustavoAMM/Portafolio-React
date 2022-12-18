import { FcOpenedFolder } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="xl:flex sm:grid grid xl:h-screen xl:w-full sm:h-full sm:w-full w-full h-full">
      <div className="xl:w-24 xl:h-full sm:w-full sm:h-20 w-full h-16 xl:grid sm:flex flex xl:justify-items-center xl:content-center   ">
        <nav
          className="xl:rounded-3xl sm:rounded-b-3xl rounded-b-3xl xl:grid sm:flex flex xl:w-12 xl:h-72 sm:w-full sm:h-20 w-full h-20 xl:justify-items-center xl:content-around sm:justify-around sm:items-center justify-around items-center bg-[#191724]"
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
      <div className="xl:w-full xl:h-full sm:w-full sm:h-screen w-full h-full  xl:grid xl:justify-items-center xl:content-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;

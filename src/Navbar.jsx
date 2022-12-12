import { FcOpenedFolder } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
function Navbar() {
  return (
    <div className="bg-slate-400">
      <nav className="bg-indigo-900 rounded-lg">
        <img src="src/assets/icono.png" className="rounded-full w-10 h-10" />
        <a href=""><FcOpenedFolder className="w-10 h-10"></FcOpenedFolder></a>
        <a href=""><FcInvite className="w-10 h-10"/></a>
      </nav>
    </div>
  );
}

export default Navbar;

import { SiJavascript } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiArchlinux } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiTrello } from "react-icons/si";

function IcoSkill() {
  return (
    <div className="rounded-3xl" style={{ background: "#191724" }}>
      <h1 className="text-white text-center font-mono font-bold text-3xl pt-12">Skills</h1>
      <div className=" grid grid-cols-2 p-12">
        <div className="flex">
          <p className="flex">
            <h1 className=" text-white">Programming: </h1>
            <SiJavascript className="w-12 h-12 m-3 fill-yellow-400"></SiJavascript>
            <SiPython className="w-12 h-12 m-3 fill-white"></SiPython>
          </p>
        </div>
        <div>
          <p className="flex">
            <h1 className="text-white">Frontend:</h1>
            <SiHtml5 className="w-12 h-12 m-3 fill-orange-500"></SiHtml5>
            <SiCss3 className="w-12 h-12 m-3 fill-blue-500"></SiCss3>
            <SiTailwindcss className="w-12 h-12 m-3 fill-cyan-500"></SiTailwindcss>
            <SiReact className="w-12 h-12 m-3 fill-cyan-600"></SiReact>
          </p>
        </div>
        <div className="flex">
          <p className="flex">
            <h1 className="text-white">Backend:</h1>
            <SiNodedotjs className="w-12 h-12 m-3 fill-lime-500"></SiNodedotjs>
            <SiNestjs className="w-12 h-12 m-3 fill-red-600"></SiNestjs>
            <SiLaravel className="w-12 h-12 m-3 fill-red-500"></SiLaravel>
          </p>
        </div>
        <div>
          <p className="flex">
            <h1 className="text-white">Database:</h1>
            <SiMongodb className="w-12 h-12 m-3 fill-green-500"></SiMongodb>
            <SiMariadb className="w-12 h-12 m-3 fill-orange-400"></SiMariadb>
            <SiMysql className="w-12 h-12 m-3 fill-sky-900"></SiMysql>
          </p>
        </div>
        <div className="flex">
          <p className="flex">
            <h1 className="text-white">Software:</h1>
            <SiAdobeillustrator className="w-12 h-12 m-3 fill-orange-500"></SiAdobeillustrator>
            <SiFigma className="w-12 h-12 m-3 fill-white"></SiFigma>
            <SiAdobephotoshop className="w-12 h-12 m-3 fill-blue-500"></SiAdobephotoshop>
          </p>
        </div>
        <div>
          <p className="flex">
            <h1 className="text-white">Other:</h1>
            <SiArchlinux className="w-12 h-12 m-3 fill-cyan-400"></SiArchlinux>
            <SiGit className="w-12 h-12 m-3 fill-red-500"></SiGit>
            <SiGithub className="w-12 h-12 m-3 fill-white"></SiGithub>
            <SiTrello className="w-12 h-12 m-3 fill-blue-900"></SiTrello>
          </p>
        </div>
      </div>
    </div>
  );
}
export default IcoSkill;

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
import {SiPhp} from "react-icons/si";
import "./styles.css"

function IcoSkill() {
  return (
    <div className="rounded-3xl" style={{ background: "#191724" }}>
      <h1 className="text-white text-center font-mono font-bold text-3xl pt-12">Ski<span style={{color:"crimson"}}>lls</span></h1>
      <div className=" grid grid-cols-2 p-12 text-white font-thin">
        <div className="flex">
          <p className="flex">
            <h1 className="grid content-center">Programming: </h1>
            <SiJavascript className="w-12 h-12 m-3 fill-yellow-400" title="JavaScript"></SiJavascript>
            <SiPython className="Icono w-12 h-12 m-3 fill-blue-900" title="Python"></SiPython>
          </p>
        </div>
        <div>
          <p className="flex">
            <h1 className="grid content-center">Frontend:</h1>
            <SiHtml5 className="w-12 h-12 m-3 fill-orange-500" title="Html"></SiHtml5>
            <SiCss3 className="w-12 h-12 m-3 fill-blue-500" title="Css"></SiCss3>
            <SiTailwindcss className="w-12 h-12 m-3 fill-cyan-500" title="Tailwind"></SiTailwindcss>
            <SiReact className="w-12 h-12 m-3 fill-cyan-600" title="ReactJs"></SiReact>
          </p>
        </div>
        <div>
          <p className="flex">
            <h1 className="grid content-center">Database:</h1>
            <SiMongodb className="w-12 h-12 m-3 fill-green-500" title="MongoDB"></SiMongodb>
            <SiMariadb className="w-12 h-12 m-3 fill-orange-400" title="MariaDB"></SiMariadb>
            <SiMysql className="w-12 h-12 m-3 fill-sky-900" title="MySQL"></SiMysql>
          </p>
        </div>
        <div className="flex">
          <p className="flex">
            <h1 className="grid content-center">Backend:</h1>
            <SiNodedotjs className="w-12 h-12 m-3 fill-lime-500" title="NodeJs"></SiNodedotjs>
            <SiNestjs className="w-12 h-12 m-3 fill-red-600" title="NestJs"></SiNestjs>
            <SiLaravel className="w-12 h-12 m-3 fill-red-500" title="Laravel"></SiLaravel>
            <SiPhp className="w-12 h-12 m-3 fill-purple-500" title="PHP"></SiPhp>
          </p>
        </div>
        <div className="flex">
          <p className="flex">
            <h1 className="grid content-center">Software:</h1>
            <SiAdobeillustrator className="w-12 h-12 m-3 fill-orange-500" title="Illustrator"></SiAdobeillustrator>
            <SiAdobephotoshop className="w-12 h-12 m-3 fill-blue-500" title="Photoshop"></SiAdobephotoshop>
            <SiFigma className="w-12 h-12 m-3 fill-rose-400" title="Figma"></SiFigma>
          </p>
        </div>
        <div>
          <p className="flex">
            <h1 className="grid content-center">Other:</h1>
            <SiArchlinux className="w-12 h-12 m-3 fill-cyan-400" title="ArchLinux"></SiArchlinux>
            <SiGit className="w-12 h-12 m-3 fill-red-500" title="Git"></SiGit>
            <SiGithub className="w-12 h-12 m-3 fill-white" title="Github"></SiGithub>
            <SiTrello className="w-12 h-12 m-3 fill-blue-900" title="Trello"></SiTrello>
          </p>
        </div>
      </div>
    </div>
  );
}
export default IcoSkill;

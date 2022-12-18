import { SiJavascript, SiLaravel, SiPython, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNodedotjs, SiNestjs, SiMongodb, SiMariadb, SiMysql, SiAdobeillustrator, SiFigma, SiAdobephotoshop, SiArchlinux, SiGit, SiGithub, SiTrello, SiPhp } from "react-icons/si";


function IcoSkill() {
  return (
    // Container main
    <div className="rounded-3xl sm:mx-6 xl:mx-0 bg-[#191724]">
      <h1 className="text-white text-center font-mono font-bold text-3xl pt-12">Ski<span className="text-[#dc143c]">lls</span></h1>
      <div className=" grid xl:grid-cols-2 sm:grid-cols-1 grid-cols-1 p-12 text-white font-thin sm:justify-items-center">
        <div className="xl:flex sm:flex grid">
          <h1 className="font-[roboto] grid content-center">Programming: </h1>
          <div className="flex">
            <SiJavascript className="w-12 h-12 m-3 fill-yellow-400 hover:scale-110" title="JavaScript" ></SiJavascript>
            <SiPython className="Icono w-12 h-12 m-3 fill-blue-900 hover:scale-110" title="Python"></SiPython>
          </div>
        </div>
        <div className="xl:flex sm:flex grid">
          <h1 className="font-[roboto] grid content-center">Frontend:</h1>
          <div className="flex">
            <SiHtml5 className="w-12 h-12 m-3 fill-orange-500 hover:scale-110" title="Html"></SiHtml5>
            <SiCss3 className="w-12 h-12 m-3 fill-blue-500 hover:scale-110" title="Css"></SiCss3>
            <SiTailwindcss className="w-12 h-12 m-3 fill-cyan-500 hover:scale-110" title="Tailwind"></SiTailwindcss>
            <SiReact className="w-12 h-12 m-3 fill-cyan-600 hover:scale-110" title="ReactJs"></SiReact>
          </div>
        </div>
        <div className="xl:flex sm:flex grid">
          <h1 className="font-[roboto] grid content-center">Database:</h1>
          <div className="flex">
            <SiMongodb className="w-12 h-12 m-3 fill-green-500 hover:scale-110" title="MongoDB"></SiMongodb>
            <SiMariadb className="w-12 h-12 m-3 fill-orange-400 hover:scale-110" title="MariaDB"></SiMariadb>
            <SiMysql className="w-12 h-12 m-3 fill-sky-900 hover:scale-110" title="MySQL"></SiMysql>
          </div>
        </div>
        <div className="xl:flex sm:flex grid">
          <h1 className="font-[roboto] grid content-center">Backend:</h1>
          <div className="flex">
            <SiNodedotjs className="w-12 h-12 m-3 fill-lime-500 hover:scale-110" title="NodeJs"></SiNodedotjs>
            <SiNestjs className="w-12 h-12 m-3 fill-red-600 hover:scale-110" title="NestJs"></SiNestjs>
            <SiLaravel className="w-12 h-12 m-3 fill-red-500 hover:scale-110" title="Laravel"></SiLaravel>
            <SiPhp className="w-12 h-12 m-3 fill-purple-500 hover:scale-110" title="PHP"></SiPhp>
          </div>
        </div>
        <div className="xl:flex sm:flex grid">
          <h1 className="font-[roboto] grid content-center">Software:</h1>
          <div className="flex">
            <SiAdobeillustrator className="w-12 h-12 m-3 fill-orange-500 hover:scale-110" title="Illustrator"></SiAdobeillustrator>
            <SiAdobephotoshop className="w-12 h-12 m-3 fill-blue-500 hover:scale-110" title="Photoshop"></SiAdobephotoshop>
            <SiFigma className="w-12 h-12 m-3 fill-rose-400 hover:scale-110" title="Figma"></SiFigma>
          </div>
        </div>
        <div className="xl:flex sm:flex grid">
          <h1 className="font-[roboto] grid content-center">Other:</h1>
          <div className="flex">
            <SiArchlinux className="w-12 h-12 m-3 fill-cyan-400 hover:scale-110" title="ArchLinux"></SiArchlinux>
            <SiGit className="w-12 h-12 m-3 fill-red-500 hover:scale-110" title="Git"></SiGit>
            <SiGithub className="w-12 h-12 m-3 fill-white hover:scale-110" title="Github"></SiGithub>
            <SiTrello className="w-12 h-12 m-3 fill-blue-900 hover:scale-110" title="Trello"></SiTrello>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IcoSkill;

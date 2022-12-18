import { SiGithub, SiTwitter, SiLinkedin, SiInstagram } from "react-icons/si";

function Social() {
  return (
    <div className="bg-[#191724] rounded-3xl w-full">
      <h1 className="text-white text-center font-mono font-bold text-3xl py-4">
        Social <span className="text-[#dc143c]">Networks</span>
      </h1>
      <div className="grid grid-rows-2">
        {/* Primera fila */}
        <div className="flex justify-around mb-4 mt-4">
          {/* Github */}
          <a
            href="https://github.com/GustavoAMM"
            target={"_blank"}
            className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-purple-700 hover:opacity-100"
          >
            <SiGithub className="w-24 h-24 hover:scale-110"></SiGithub>
            <h1 className="text-center font-mono font-bold text-lg mt-5 mb-2">
              @GustavoAMM
            </h1>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/soyangel_m245"
            target={"_blank"}
            className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-cyan-400 hover:opacity-100"
          >
            <SiTwitter className="w-24 h-24 hover:scale-110" />
            <h1 className="text-center font-mono font-bold text-lg mt-5 mb-2">
              @soyangel_m245
            </h1>
          </a>
        </div>
        {/* Segunda fila */}
        <div className="flex justify-around mb-4 mt-4">
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/angel-montoya-984738232/"
            target={"_blank"}
            className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-blue-700 hover:opacity-100"
          >
            <SiLinkedin className="w-24 h-24 hover:scale-110" />
            <h1 className="text-center font-mono font-bold text-lg mt-5 mb-2">
              @Angel Montoya
            </h1>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/soyangel_m/"
            target={"_blank"}
            className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-rose-700 hover:opacity-100"
          >
            <SiInstagram className="w-24 h-24 hover:scale-110" />
            <h1 className="text-center font-mono font-bold text-lg mt-5 mb-2">
              @Angel Montoya
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Social;

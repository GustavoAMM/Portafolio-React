import { SiGithub } from "react-icons/si";
import { SiTwitter } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SiInstagram } from "react-icons/si"

function Social() {
    return (
        <div className="grid grid-rows-2 rounded-3xl w-full" style={{ background: "#191724" }}>
            {/* Primer fila */}
           <div className="flex justify-around mb-4 mt-4">
             {/* Github */}
             <div className="grid justify-items-center rounded-3xl w-48">
                <SiGithub className="fill-white hover:fill-purple-300 w-24 h-24"></SiGithub>
                <h1 className="text-white text-center font-mono font-bold text-lg mt-5 mb-2">
                    @GustavoAMM
                </h1>
            </div>
            {/* Github */}
            <div className="grid justify-items-center rounded-3xl w-48">
                <SiTwitter className="fill-white hover:fill-cyan-300 w-24 h-24"></SiTwitter>
                <h1 className="text-white text-center font-mono font-bold text-lg mt-5 mb-2">
                    @soyangel_m245
                </h1>
            </div>
           </div>
           {/* Segunda fila */}
           <div className="flex justify-around mb-4 mt-4">
             {/* Github */}
             <div className="grid justify-items-center rounded-3xl w-48 ">
                <SiLinkedin className="fill-white w-24 h-24 hover:fill-blue-700"></SiLinkedin>
                <h1 className="text-white text-center font-mono font-bold text-lg mt-5 mb-2">
                    @Angel Montoya
                </h1>

            </div>
            {/* Github */}
            <div className="grid justify-items-center rounded-3xl w-48">
                <SiInstagram className="fill-white w-24 h-24 hover:fill-rose-300"></SiInstagram>
                <h1 className="text-white text-center font-mono font-bold text-lg mt-5 mb-2">
                    @soyangel_m
                </h1>
            </div>
           </div>

        </div>
    );
}
export default Social;

import { SiGithub } from "react-icons/si";
import { SiTwitter } from "react-icons/si"
import { SiLinkedin } from "react-icons/si"
import { SiInstagram } from "react-icons/si"

function Social() {
    return (
        <div style={{ background: "#191724" }} className="rounded-3xl w-full">
             <h1 className="text-white text-center font-mono font-bold text-3xl py-4">
          Social <span style={{ color: "crimson" }}>Networks</span>
        </h1>
            <div className="grid grid-rows-2" >
                {/* Primer fila */}
                <div className="flex justify-around mb-4 mt-4">
                    {/* Github */}
                    <a href="#" className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-purple-700 hover:opacity-100">
                        <SiGithub className="w-24 h-24"></SiGithub>
                        <h1 className="text-center font-mono font-bold text-lg mt-5 mb-2">
                            @GustavoAMM
                        </h1>
                    </a>

                    {/* Github */}
                    <a href="#" className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-cyan-400 hover:opacity-100">
                        <SiTwitter className="w-24 h-24" />
                        <h1 className="text-center font-mono font-bold text-lg mt-5 mb-2">
                            @soyangel_m245
                        </h1>
                    </a>
                </div>
                {/* Segunda fila */}
                <div className="flex justify-around mb-4 mt-4">
                    {/* Github */}
                    <a href="#" className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-blue-700 hover:opacity-100">
                        <SiLinkedin className="w-24 h-24" />
                        <h1 className="text-center font-mono font-bold text-lg mt-5 mb-2">
                            @Angel Montoya
                        </h1>
                    </a>
                    {/* Github */}
                    <a href="#" className="grid justify-items-center rounded-3xl text-white opacity-40 hover:text-rose-700 hover:opacity-100">
                        <SiInstagram className="w-24 h-24" />
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

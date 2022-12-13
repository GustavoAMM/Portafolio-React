import { SiGithub } from "react-icons/si";
import { FcDownRight } from "react-icons/fc";

function Github(){
    return <div className=" my-4 mx-4 grid justify-items-center rounded-3xl" style={{ background: "#191724" }}>
        <SiGithub className="fill-white w-50 h-50 mt-10"></SiGithub>   
        <h1 className="text-white text-center font-mono font-bold text-xl">@GustavoAMM</h1>     
        <a href="https://github.com/GustavoAMM" target="_blank" className="text-white"><FcDownRight className="w-11 h-11 mb-2"></FcDownRight></a>
    </div>
}
export default Github
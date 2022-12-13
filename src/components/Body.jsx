import { GrReactjs } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPinboard } from "react-icons/si";

function Body() {
  return (
    <div className="rounded-3xl p-4 flex items-center" style={{ background: "#191724" }}>
      {/* container img and description */}
      <div className=" grid justify-items-center w-1/3 ">
        <img
          src="src/assets/icono.png"
          className="rounded-full w-56 h-56"
        />
        <ul className="my-4">
          <li className="flex text-yellow-400">
            <SiJavascript></SiJavascript>
            <h1 className="px-2 font-sans">Javascript developer</h1>
          </li>
          <li className="flex text-cyan-400">
            <GrReactjs></GrReactjs>
            <h1 className="px-2 font-sans">React frontend</h1>
          </li>
          <li className="flex text-red-600">
            <SiNestjs></SiNestjs>
            <h1 className="px-2 font-sans">Nestjs backend</h1>
          </li>
          <li className="flex text-orange-200 italic">
            <SiPinboard></SiPinboard>
            <h1 className="px-2 font-sans">"I create stuff sometimes"</h1>
          </li>
        </ul>
      </div>
      {/* Container title and paragraph */}
      <div className="text-cente w-2/3 px-1 text-justify">
        <h1 className="text-white text-center font-mono font-bold text-3xl my-4">
          Angel <span style={{ color: "crimson" }}>Montoya</span>
        </h1>
        <div className="text-white font-thin mt-8 text-lg">
          <p className="mb-4">
            My name is Angel, I am a 20-year-old Mexican programmer who likes to develop many different things that come from my imagination.
          </p>
          <p>
            I am very passionate about programming and cybersecurity, I am fullstack but I prefer backend. I really like Python and JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Body;

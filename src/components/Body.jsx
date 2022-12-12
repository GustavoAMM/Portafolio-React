import { GrReactjs } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPinboard } from "react-icons/si";

function Body() {
  return (
    <div className="rounded-3xl p-2" style={{ background: "#191724" }}>
      <div className="flex items-center  ">
        <img
          src="src/assets/icono.png"
          className="rounded-full w-60 h-60 p-4"
        />
        <div className="text-cente px-2 ">
          <h1 className="text-white text-center font-mono font-bold text-3xl my-4">
            Angel Montoya
          </h1>
          <ul className="my-10">
            <li className="flex text-yellow-300">
              <SiJavascript></SiJavascript>
              <h1 className="px-2">Javascript developer</h1>
            </li>
            <li className="flex text-blue-400">
              <GrReactjs></GrReactjs>
              <h1 className="px-2">Fronteedn</h1>
            </li>
            <li className="flex text-red-600">
              <SiNestjs></SiNestjs>
              <h1 className="px-2">Backend</h1>
            </li>
            <li className="flex text-pink-300 italic">
              <SiPinboard></SiPinboard>
              <h1 className="px-2">"I create stuff sometimes"</h1>
            </li>
          </ul>
          <p className="text-white my-2">
            My name is Angel, I am a 20-year-old Mexican programmer who likes to
            develop many more varied things that come from my imagination.
          </p>
          <p className="text-white mb-20">
            I am very passionate about programming and cybersecurity, I am
            fullstack but I prefer backend. I really like python and JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Body;

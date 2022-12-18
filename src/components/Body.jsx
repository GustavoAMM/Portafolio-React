import { GrReactjs } from "react-icons/gr";
import { SiNestjs, SiJavascript, SiPinboard } from "react-icons/si";

function Body() {
  return (
    <div className="rounded-3xl xl:h-full sm:h-full h-full xl:flex sm:flex grid items-center bg-[#191724]">
      {/* container img and description */}
      <div className="xl:grid xl:justify-items-center xl:w-1/3 grid justify-items-center xl:mx-12 sm:m-12 mt-4">
        <img
          src="src/assets/icono.png"
          className="rounded-full xl:w-56 xl:h-56 sm:w-48 sm:h-48 w-48 h-48 "
        />
        {/* container img-footer */}
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
      <div className="text-cente xl:w-2/3 md:w-2/3 w-full px-1 xl:mr-12 text-justify mb-12">
        <h1 className="text-white text-center font-mono font-bold text-3xl my-4">
          Angel <span style={{ color: "crimson" }}>Montoya</span>
        </h1>
        <div className="text-white mt-8 mx-8 text-lg">
          <p className="font-[Roboto] mb-4">
            My name is Angel, I am a 20-year-old Mexican programmer who likes to develop many different things that come from my imagination.
          </p>
          <p className="font-[Roboto]">
            I am very passionate about programming and cybersecurity, I am fullstack but I prefer backend. I really like Python and JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Body;

import { TiDownloadOutline, TiArrowRightOutline } from "react-icons/ti";

function Sidebar() {
  return (
    // Container main
    <div className="xl:grid sm:flex grid xl:content-around sm:justify-around xl:h-full sm:h-[190px] h-[400px] items-center px-4">
      {/* About me */}
      <div className="rounded-3xl p-4 xl:h-48 sm:h-48 xl:w-60 sm:w-96 text-white bg-[#191724]">
        <h1 className="text-white text-center font-mono font-bold text-2xl my-4">About <span className="text-[#dc143c]">me</span></h1>
        <div className="sm:text-xl xl:text-lg grid sm:justify-items-center xl:justify-items-start">
          <div className="flex">
            <TiArrowRightOutline className="my-1 scale-150" style={{ color: "crimson" }} />
            <p className="px-2 font-[Roboto]">Age: 20</p>
          </div>
          <div className="flex">
            <TiArrowRightOutline className="my-1 scale-150" style={{ color: "crimson" }} />
            <p className="px-2 font-[Roboto]">BIrthday: 31 March</p>
          </div>
          <div className="flex">
            <TiArrowRightOutline className="my-1 scale-150" style={{ color: "crimson" }} />
            <p className="px-2 font-[Roboto]">Country: México</p>
          </div>
        </div>
      </div>
      {/* CV */}
      <div className="rounded-3xl xl:p-4 sm:py-6 p-4 xl:h-full sm:h-full h-[130px] bg-[#191724]">
        <h1 className="text-white text-center font-mono font-bold text-2xl mt-2 mb-6">Curri<span className="text-[#dc143c]">culum</span></h1>
        <div className="grid content-center justify-items-center ">
          <a href="/cv.pdf" download >
            <TiDownloadOutline className="w-12 h-12 animate-bounce sm:m-4 xl:m-0" style={{ color: "crimson" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

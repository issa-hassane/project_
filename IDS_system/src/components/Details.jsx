import { AlertOctagon } from "lucide-react";

import SideBar from "./SideBar";

function Details() {
  return (
    <>
      <SideBar />
      {/* right side  */}
      <div className="grid grid-cols-2 gap-3  ms-80 mt-3 me-3 px-5 pt-3 ">
        {/* first col left side */}
        <div className="grid grid-rows-9 h gap-3 ">
          {/* rows */}
          <div className="row-span-5 ">
            <div className="scrollbar p-8 rounded-lg shadow-lg backdrop-blur-md bg-white/25 text-black h-72 overflow-y-auto">
              <p>this is a test left</p>
              <p>this is a test left</p>
              <p>this is a test left</p>
              <p>this is a test left</p>

              <p>this is a test left</p>
            </div>
          </div>
          <div className="row-span-4">
            {/* card */}
            {/* <div className="grid  grid-cols-2 gap-5 ms-80 mt-8 w-full"> */}
            <div className="p-2 bg-slate-900 py-5 text-center space-y-3 rounded-md border-t-4 border-red-500 shadow-lg">
              <div className="w-24 h-24 flex justify-center items-center bg-slate-700 rounded-full mx-auto">
                <AlertOctagon className="w-1/2 h-1/2" />
              </div>

              <p className="text-3xl font-semibold">3</p>
              <p className="text-3xl">ALARME</p>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* second col right side*/}
        <div className="h-full">
          <div className="scrollbar p-8 rounded-lg shadow-lg backdrop-blur-md bg-white/25 text-black h-[34rem] overflow-y-auto">
            <p>this is a test right</p>
            <p>this is a test right</p>
            <p>this is a test right</p>
            <p>this is a test right</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

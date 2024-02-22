import { AlertOctagon } from "lucide-react";

import SideBar from "./SideBar";

function Details() {
  return (
    <>
      <SideBar />
      {/* right side  */}
      <div className="grid  grid-cols-2 gap-5 ms-80 mt-8 w-3/4">
        <div className="p-2 bg-slate-900 py-5 text-center space-y-3 rounded-md border-t-4 border-red-500">
          <div className="w-24 h-24 flex justify-center items-center bg-slate-700 rounded-full mx-auto">
            <AlertOctagon className="w-1/2 h-1/2" />
          </div>

          <p className="text-3xl font-semibold">3</p>
          <p className="text-3xl">ALARME</p>
        </div>
        <div className="p-2 bg-slate-900 py-5 text-center space-y-3 rounded-md border-t-4 border-red-500">
          <div className="w-24 h-24 flex justify-center items-center bg-slate-700 rounded-full mx-auto">
            <AlertOctagon className="w-1/2 h-1/2" />
          </div>

          <p className="text-3xl">3</p>
          <p className="text-3xl">ALARME</p>
        </div>
      </div>
    </>
  );
}

export default Details;

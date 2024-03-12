import { AlertOctagon } from "lucide-react";
import { useRef, useEffect, useState } from "react";

import SideBar from "./SideBar";

function Details({ events, setStatus }) {
  const listRef = useRef(null);
  const [attacks, setAttacks] = useState([]);
  useEffect(() => {
    const filteredResult = events?.filter((e) => e.predicted == 1);
    setAttacks(filteredResult);
    // if (attacks.length != 0) {
    //   setStatus("attack");
    // }
    console.log(attacks);
    // Scroll to the bottom of the list whenever new elements are added
    // listRef.current.scrollIntoView({ behavior: "smooth" });
    listRef.current?.lastElementChild?.scrollIntoView(false);
  }, [events]);

  return (
    <>
      <SideBar />
      {/* right side  */}
      <div className="grid grid-cols-2 gap-3  ms-80 mt-3 me-3 px-5 pt-3 ">
        {/* first col left side */}
        <div className="grid grid-rows-9 h gap-3 ">
          {/* rows */}
          <div className="row-span-5 ">
            <div className="scrollbar p-8 font-mono ring-1 ring-red-500 rounded-lg shadow-lg backdrop-blur-md bg-white/25 h-72 overflow-y-auto">
              {attacks.length == 0 ? (
                <p className="w-3/5 mx-auto font-semibold ">
                  everything seem fine as of now
                </p>
              ) : (
                <ul className="bg text-black z-50 divide-y-2 space-y-2">
                  {attacks.map((attack, index) => (
                    <li
                      className="bg-red-50 rounded text-black p-2 ring-red-500 ring-2"
                      key={index}
                    >
                      <p className="ms-3 font-semibold">
                        predicted: {attack.predicted}
                      </p>
                      <p className="font-semibold ms-3">
                        status: {attack.status}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="row-span-4">
            {/* card */}
            {/* <div className="grid  grid-cols-2 gap-5 ms-80 mt-8 w-full"> */}
            <div className="p-2 bg-slate-900 py-5 text-center space-y-3 rounded-md border-t-4 border-red-500 shadow-lg">
              <div className="w-24 h-24 flex justify-center items-center bg-slate-700 rounded-full mx-auto">
                <AlertOctagon className="w-1/2 h-1/2" />
              </div>

              <p className="text-3xl font-semibold">{attacks.length}</p>
              <p className="text-3xl">ALARME</p>
            </div>
            {/* </div> */}
          </div>
        </div>
        {/* second col right side*/}
        <div className="h-full">
          <div
            ref={listRef}
            className="scrollbar p-5 font-mono rounded-lg shadow-lg backdrop-blur-md bg-white/25 text-black h-[34rem] overflow-y-auto"
          >
            {events.length == 0 ? (
              <p className="w-16 mt-3  mx-auto font-semibold text-white">
                no data
              </p>
            ) : (
              <ul className="bg text-black z-50 divide-y-2 space-y-2">
                {events.map((event, index) => (
                  <li
                    className="bg-yellow-50 rounded text-black p-2 "
                    key={index}
                  >
                    <p className="ms-3">predicted: {event.predicted}</p>
                    <p className="ms-3">status: {event.status}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

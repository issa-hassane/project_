import { useState, useEffect } from "react";
import Status from "./Status";
import Details from "./Details";
import { socket } from "../socket";
import { ConnectionState } from "./ConnectionState";
import { Events } from "./Events";
import { MyForm } from "./MyForm";

function Dashboad() {
  const [status, setStatus] = useState("normal");
  const [isActive, setIsActive] = useState(1);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [DataFetchEvent, setDataFetchEvent] = useState([]);

  const toggleTab = (tab) => {
    setIsActive(tab);
  };

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onDataFetchEvent(value) {
      console.log(value);
      setDataFetchEvent((previous) => [...previous, value]);
    }
    console.log(DataFetchEvent);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("dataFetch", onDataFetchEvent);
    // socket.on("data-steam", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("dataFetch", onDataFetchEvent);
      // socket.off("data-steam", onFooEvent);
    };
  }, [DataFetchEvent]);

  let bgColor = "";
  if (status == "normal") {
    bgColor = "bg-gradient-to-t from-teal-600 via-teal-400 to-teal-600";
  } else if (status == "attack") {
    bgColor = "bg-gradient-to-t from-red-600 via-red-500 to-red-600";
  } else {
    bgColor = "bg-gradient-to-t from-amber-500 via-yellow-300 to-amber-500";
  }

  return (
    <>
      <div className={`text-white h-screen pt-4 relative ${bgColor}`}>
        <ConnectionState isConnected={isConnected} />
        <Events events={DataFetchEvent} />
        {/* <MyForm /> */}
        <div className="w-[400px] mx-auto">
          <div className="pt-2 border-b border-gray-300 grid grid-cols-2 w">
            <button
              onClick={() => toggleTab(1)}
              className={`${
                isActive == 1 ? "font-semibold border-b-2 border-gray-300" : ""
              } p-4`}
            >
              Status
            </button>
            <button
              onClick={() => toggleTab(2)}
              className={`${
                isActive == 2 ? "font-semibold border-b-2 border-gray-300" : ""
              } p-4`}
            >
              Details
            </button>
          </div>
        </div>
        {/* icon  */}

        {isActive === 1 && <Status condition={status} />}
        {isActive === 2 && <Details />}
      </div>
    </>
  );
}

export default Dashboad;

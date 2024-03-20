import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Status from "./Status";
import Details from "./Details";
import { socket } from "../socket";
import { ConnectionState } from "./ConnectionState";
import { Events } from "./Events";
import { MyForm } from "./MyForm";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
function Dashboad() {
  const [status, setStatus] = useState("");
  const [LoggedinUser, setLoggedinUser] = useState(null);
  const [isActive, setIsActive] = useState(1);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [DataFetchEvent, setDataFetchEvent] = useState([]);
  const navigate = useNavigate();

  const toggleTab = (tab) => {
    setIsActive(tab);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setLoggedinUser(user);
        console.log("uid", uid);
      } else {
        // User is signed out
        navigate("/");
        // ...
        console.log("user is logged out");
      }
    });
    const filteredResult = DataFetchEvent?.filter((e) => e.predicted == 1);
    // setAttacks(filteredResult);
    if (filteredResult.length != 0) {
      setStatus("attack");
    }

    function onConnect() {
      setIsConnected(true);
      setStatus("normal");
    }

    function onDisconnect() {
      setIsConnected(false);
      setStatus("");
    }

    function onDataFetchEvent(value) {
      // console.log(value);
      // console.log(DataFetchEvent);
      setDataFetchEvent((previous) => [...previous, value]);
    }

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
    bgColor = "bg-gradient-to-t from-amber-600 via-yellow-400 to-amber-600";
  }

  return (
    <>
      <div className={`text-white h-screen pt-4 relative ${bgColor}`}>
        <ConnectionState isConnected={isConnected} />
        {/* <Events events={DataFetchEvent} /> */}
        {/* <MyForm /> */}
        <div className="w-[400px] mx-auto mb-4">
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
        {isActive === 2 && (
          <Details events={DataFetchEvent} setStatus={setStatus} />
        )}
      </div>
    </>
  );
}

export default Dashboad;

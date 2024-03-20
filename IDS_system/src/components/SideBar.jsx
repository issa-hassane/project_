import { Link, useNavigate } from "react-router-dom";
import { ListTodo, LogOut, Radar, CloudOff } from "lucide-react";
import { ConnectionManager } from "./ConnectionManager";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
function SideBar() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };
  return (
    <>
      <div className="absolute top-0 w-64 py-5 h-screen bg-slate-900">
        <div className="flex items-center ms-5 my-10 space-x-2">
          <Radar size={30} />
          <h1 className="text-3xl  font-mono ">CyberRadar</h1>
        </div>
        <ul className="drop-shadow-md space-y-3">
          <li className="p-2 ps-4 w-full space-x-4 flex hover:bg-sky-500/20 hover:border-s-4 hover:border-sky-500 transition-all">
            <ListTodo />
            <Link className="w-full text-start">Status</Link>
          </li>
          {/* <li className="p-2 ps-4 w-full space-x-4 flex hover:bg-sky-500/20 hover:border-s-4 hover:border-sky-500 transition-all">
            <CloudOff />
            <Link>Disconnect form server</Link>
          </li> */}
          <li className="p-2 ps-4 w-full space-x-4 flex hover:bg-sky-500/20 hover:border-s-4 hover:border-sky-500 transition-all">
            <LogOut />
            <button
              className="w-full text-start"
              type="submit"
              onClick={(e) => logoutUser(e)}
            >
              Logout
            </button>
          </li>
        </ul>
        {/* bottom side */}
        <div className="absolute bottom-0 px-2 pb-4 w-full">
          <ConnectionManager />
        </div>
      </div>
    </>
  );
}

export default SideBar;

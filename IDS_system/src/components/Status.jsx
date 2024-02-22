import { CheckCircle2, AlertTriangle, AlertCircle } from "lucide-react";
import Lottie from "react-lottie";
import pulse from "../assets/pulse.json";

function ShowIcon({ condition }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pulse,
  };
  //   console.log(condition);
  if (condition == "normal") {
    return (
      <CheckCircle2 color="#fff" className="absolute top-50 w-96 h-80 z-30" />
    );
  } else if (condition == "attack") {
    return (
      <>
        <div className="absolute w-[38rem] h-[38rem] mt-5">
          <Lottie className="" options={defaultOptions} />
        </div>
        <AlertTriangle
          className="absolute top-50 w-52 h-52 z-30 animate-ping"
          color="red"
        />
        <p className="text-3xl text-red-500 z-10 font-mono">
          Alert! there is an attack
        </p>
      </>
    );
  } else {
    return (
      <>
        <div className="absolute w-[38rem] h-[38rem] mt-6">
          <Lottie className="" options={defaultOptions} />
        </div>
        <AlertCircle
          className="absolute top-50 w-60 h-60 z-30"
          color="yellow"
        />
      </>
    );
  }
}
export default function Status({ condition }) {
  return (
    <>
      <div className="relative flex justify-center items-center h-[80vh]">
        <ShowIcon condition={condition} />
        {/* <AlertCircle size={48} color="#ffffff" /> */}
        {/* <AlertTriangle size={48} color="#ffffff" /> */}
      </div>
    </>
  );
}

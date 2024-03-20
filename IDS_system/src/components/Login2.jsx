// import { Link } from "react-router-dom";
import { Radar } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { buttonVariants } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import robot from "../assets/robot.svg";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login2() {
  const [authForm, setAuthForm] = useState("login");

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  return (
    <>
      {/* <div className="hidden md:block">
        <img
          src={robot}
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src={robot}
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div> */}
      <div className="container mt-24 md:mt-0 relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-screen">
        {/* <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link> */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 space-x-3 flex items-center text-4xl font-medium font-mono">
            <Radar size={38} />
            <p>CyberRadar</p>
          </div>
          <img
            src={robot}
            className="z-40 w-1/2 absolute top-[22%] left-[22%] transform transition duration-1000 
            hover:scale-110 "
            alt="Authentication"
          />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Cyber Radar: "Machine Learning-Driven Intrusion Detection
                and Attack Recognition System".&rdquo;
              </p>
              {/* <footer className="text-sm">Sofia Davis</footer> */}
            </blockquote>
          </div>
        </div>
        {/* <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div> */}
        {authForm == "login" ? (
          <LoginForm setAuthForm={setAuthForm} />
        ) : (
          <RegisterForm setAuthForm={setAuthForm} />
        )}

        {/* </div>
        </div> */}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { socket } from "../socket";
import { Button } from "./ui/button";
import { MonitorCheck, ScreenShareOff, Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { Separator } from "./ui/separator";

export function ConnectionManager() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  function connect() {
    setIsLoading(true);
    socket.connect();
    socket.on("connect", () => {
      setIsConnected(true); // Update connection status to connected
      setIsLoading(false);
      toast({
        variant: "",
        title: "Success !!",
        description: "Successfully connnect to the server",
      });
      socket.emit("dataFetch", "send data", () => {
        setIsLoading(false);
      });
    });
    socket.on("connect_error", (error) => {
      //  handle the error here
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "oh no ! Something went wrong.",
        description: "There was a problem Please TRY AGAIN.",
      });
      console.error("Socket connection error:", error);
      setIsConnected(false);
    });
    socket.on("disconnect", () => {
      setIsConnected(false); // Update connection status to disconnected
      toast({
        variant: "destructive",
        title: "Disconnection",
        description: "Got disconnected from the server.",
      });
    });
  }

  function disconnect() {
    socket.disconnect();
    setIsConnected(false);
  }
  // useEffect(() => {
  //   console.log(isConnected);
  // }, [isConnected, isLoading]);
  return (
    <>
      <Separator className="h-[2px]" />
      {isConnected ? (
        <div>
          <div className="flex justify-between items-center w-full mb-2">
            <p className="p-2">Connected </p>
            <MonitorCheck className="text-green-500" />
          </div>
          <Button className="w-full" onClick={disconnect} variant="destructive">
            Disconnect
          </Button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="p-2">Disconnected</p>
            <ScreenShareOff className="text-red-500" />
          </div>

          <Button
            className="w-full bg-green-500 hover:bg-green-700"
            onClick={connect}
            variant="outline"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Connect
          </Button>
        </div>
      )}
    </>
  );
}

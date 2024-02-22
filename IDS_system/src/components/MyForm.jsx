import React, { useState } from "react";
import { socket } from "../socket";
import { Button } from "@/components/ui/button";

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit("create-something", value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />

      <Button type="submit" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
}

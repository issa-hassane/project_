import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container px-6 py-4 mx-auto flex justify-between">
        <p className="text-3xl font-bold">IDS</p>
        <div>
          <ModeToggle className="justify-end"></ModeToggle>
        </div>
      </div>
      <div className="flex justify-center items-center h-[85vh]">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Please login with your credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" placeholder="Enter Username" />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="framework">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                  {/* <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select> */}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button className="w-full">Login</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Login;

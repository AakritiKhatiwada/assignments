import React from "react";
import {
  Card,
  Input,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  return (
    <div className="grid h-screen place-items-center">
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">LOGIN</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Input type="email" label="Email" />
          <br />
          <Input type="password" label="Password" />
          <br />
          <Button
            radius="full"
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            Login
          </Button>
        </CardBody>
        <Divider />
        <CardFooter>
          <button>
            <span className="text-black">Dont have an account? </span>
            <Link className="text-green-600" href="/register">
              SignUp
            </Link>
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}

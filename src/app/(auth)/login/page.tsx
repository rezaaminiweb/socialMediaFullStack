// import { Form } from "react-hook-form";
import Image from "next/image";
import FormLogin from "./Forms/LoginForms";
import LoginImage from "@/assets/images/chris-lee-70l1tDAI6rM-unsplash 1.svg";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "login",
};
export default function Login() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex w-full max-w-[64rem] h-full max-h-[40rem] shadow-md ">
        <div className="w-full md:w-1/2 p-5 ">
          <h3 className="text-center font-extrabold uppercase">ورود </h3>
          <FormLogin />
        </div>
        <div className="w-1/2 hidden md:flex">
          <Image src={LoginImage} alt="" />
        </div>
      </div>
    </main>
  );
}

// import { Form } from "react-hook-form";
import Image from "next/image";
import FormSignup from "./Forms/SignupForms";
import LoginImage from "@/assets/images/chris-lee-70l1tDAI6rM-unsplash 1.svg";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signup",
};
export default function Login() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex w-full max-w-[64rem] h-full max-h-[40rem] shadow-2xl bg-white ">
        <div className="w-full md:w-1/2 p-5 ">
          <h3 className="text-center font-extrabold uppercase text-2xl">
            ثبت نام
          </h3>
          <FormSignup />
        </div>
        <div className="w-1/2 hidden md:flex">
          <Image src={LoginImage} className="object-cover" alt="" />
        </div>
      </div>
    </main>
  );
}

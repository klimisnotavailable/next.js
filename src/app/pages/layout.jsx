"use client";
import { useEffect } from "react";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import Header from "../components/Header/Header";

const layout = ({ children }) => {
  console.log("hi");
  const router = useRouter();
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push("/auth/sign-in");
    }
  }, []);

  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default layout;

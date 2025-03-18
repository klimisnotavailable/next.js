"use client";
import SignInForm from "@/app/components/SignInForm/SignInForm";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Page = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/pages/dashboard");
    }
  }, [isLoggedIn]);

  return <SignInForm />;
};

export default Page;

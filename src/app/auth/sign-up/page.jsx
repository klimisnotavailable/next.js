"use client";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/auth/selectors";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/pages/dashboard");
    }
  }, [isLoggedIn]);

  return <SignUpForm />;
};

export default Page;

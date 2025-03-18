"use client";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useEffect } from "react";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/sign-up");
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

"use client";
import "./globals.css";
import AppBar from "./components/AppBar/AppBar";
import StoreProvider from "@/app/StoreProvider";
import { PersistGate } from "redux-persist/es/integration/react";
import persistor from "@/redux/store";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`flex`}>
        <StoreProvider>
          <PersistGate persistor={persistor}>
            <AppBar></AppBar>
            <main className="w-full">{children}</main>
          </PersistGate>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;

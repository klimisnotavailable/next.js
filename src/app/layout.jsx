import "./globals.css";
import AppBar from "./components/AppBar/AppBar";
import StoreProvider from "@/app/StoreProvider";

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
        <AppBar></AppBar>
        <main className="w-full">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;

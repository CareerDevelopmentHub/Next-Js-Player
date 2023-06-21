import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Player",
  description: "This is a Simple Next Js Video Player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className = " w-full flex justify-center bg-[#1d1d1d]")
        }
      >
        {children}
      </body>
    </html>
  );
}

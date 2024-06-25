import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next Hero",
    template:"%s | Next Hero"
  },
  description: "CHEAPEST HERO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="h-screen">
        {children}
        </div>
        <footer>
          This is my footer
        </footer>
        </body>
    </html>
  );
}

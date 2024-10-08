import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carzz",
  description: "Car reparing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

     <body className={inter.className} data-theme="mytheme">
      <ToastContainer></ToastContainer>
     <AuthProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </AuthProvider>
        </body>
   
    </html>
  );
}

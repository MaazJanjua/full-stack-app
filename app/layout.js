import { Inter } from "next/font/google";
import "./globals.css"

//Components Imports
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Get Me A Chai - Fund Your Projects With Chai",
  description: "This Website Is A Crowdfunding Platform For Chai creators!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[88vh]  bg-[#00000] bg-[radial-gradient(#ffffff33_.1px,#00091d_.8px)] bg-[size:20px_20px] text-white">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html >
  );
}

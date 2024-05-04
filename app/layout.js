import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lights & Life",
  description:
    "Lights & Life web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, Smartphone Compatible web template, free webDesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web Designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <meta name="google-site-verification" content="lkhQSALU4Q44_E9p44oOPMObygFuBPDZTOuQ8YfyWZ4" />
      
      <GoogleAnalytics gaId="G-RMNNKW13LX" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

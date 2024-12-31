import "./globals.css";
import { Roboto } from "next/font/google";

import NavBar from "./components/NavBar/NavBar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you want (optional).
});

export const metadata = {
  title: "Ahamed-Asif",
  description: "Ahamed-Asif Protfoliyo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto.variable} antialiased`}>
        <div className="max-w-screen-lg mx-auto">
          <NavBar></NavBar>
          {children}
        </div>
      </body>
    </html>
  );
}

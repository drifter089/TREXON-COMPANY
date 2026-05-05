import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "THREXON — Software, Websites & Digital Marketing",
  description:
    "Custom software, websites, and digital marketing — top quality, delivered fast, priced fair. Offices in India and South Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

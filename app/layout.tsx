import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

export const metadata: Metadata = {
  title: "THREXON — Software, Websites & Digital Marketing",
  description:
    "A small studio building software, websites, and growth — for teams who'd rather ship than pitch. Briefs welcome. Decks not required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingScreen />
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

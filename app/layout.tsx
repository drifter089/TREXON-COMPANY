import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.threxon.org"),
  // The mark is transparent black, so it disappears against a dark tab strip.
  // Serve an inverted (white) copy to dark-scheme browsers; favicon.ico stays
  // the universal fallback for clients that ignore `media`.
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.png",
        type: "image/png",
        sizes: "512x512",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  title: "THREXON — Software, Websites & Digital Marketing",
  description:
    "A small studio building software, websites, and growth — for teams who'd rather ship than pitch. Briefs welcome. Decks not required.",
  openGraph: {
    title: "THREXON — Software, Websites & Digital Marketing",
    description:
      "A small studio building software, websites, and growth — for teams who'd rather ship than pitch.",
    siteName: "THREXON",
    type: "website",
  },
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

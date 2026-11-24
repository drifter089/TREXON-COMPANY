import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
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
  title: "Polyester Resin Supply for FRP & Composite Manufacturing",
  description:
    "Polyester resin supply, grade-selection support and commercial quotations for FRP and composite manufacturers in Uttar Pradesh.",
  openGraph: {
    title: "Polyester Resin Supply for FRP & Composite Manufacturing",
    description:
      "Polyester resin supply, grade-selection support and commercial quotations for FRP and composite manufacturers in Uttar Pradesh.",
    siteName: "Resin Supply",
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
        {children}
      </body>
    </html>
  );
}

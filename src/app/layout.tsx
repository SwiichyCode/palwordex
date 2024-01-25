import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Palworld Suitability Filter",
  description:
    "This application serves the Palworld gaming community by providing a filter for 'pal' characters based on their 'worksuitability'. This allows players to identify the most efficient pals for their camp management strategies.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

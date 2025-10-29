import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { AdminProvider } from "@/context/AdminContextNew";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capacity Growth Initiative",
  description:
    "An organization dedicated to empowering communities through education and resources.",
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} flex flex-col min-h-screen text-gray-900 bg-white`}
    >
      <AdminProvider>
        <main className="flex-grow">{children}</main>
      </AdminProvider>
    </div>
  );
}

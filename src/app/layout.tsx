import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlueprintNav",
  description: "Healthcare navigation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-grey-50 antialiased">{children}</body>
    </html>
  );
}

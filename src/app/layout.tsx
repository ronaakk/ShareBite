import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShareBite",
  description: "Help your local community!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`antialiased`}>
          {children}
        </body>
    </html>
  );
}

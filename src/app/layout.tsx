import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "writeme",
  description:
    "Um editor de texto para escritores que desejam escrever uma obra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

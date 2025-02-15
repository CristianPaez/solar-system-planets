import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalStyles } from "@/config/styled/GlobalStyles";
import StyledComponentsRegistry from "@/config/styled/StyledComponentsRegistry";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Planets",
  description: "List of planets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <GlobalStyles />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}

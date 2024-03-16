import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import { getCookie, setCookie } from "cookies-next";
import SideBar from "./_components/SideBar";
import "@radix-ui/themes/styles.css";
import Loader from "./_components/Loader";

export const metadata: Metadata = {
  title: process.env.name,
  description: process.env.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appearance = getCookie("theme") || setCookie("theme", "dark");
  return (
    <html lang={process.env.language?.split("_")[0]} suppressHydrationWarning>
      <body className="w-full h-screen">
        <ThemeProvider attribute="class">
          <Theme
            appearance={appearance as any}
            accentColor={process.env.color as any}
            className="w-full h-screen flex"
            radius="medium"
            id="root"
          >
            <Loader></Loader>
            <SideBar></SideBar>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

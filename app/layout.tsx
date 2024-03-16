import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import { getCookie } from "cookies-next";
import SideBar from "./_components/SideBar";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appearance = getCookie("theme") || undefined;
  return (
    <html lang={process.env.language?.split("_")[0]} suppressHydrationWarning>
      <body className="w-full h-screen">
        <ThemeProvider attribute="class">
          <Theme
            appearance={appearance as any}
            accentColor="green"
            className="w-full h-screen flex"
            id="root"
          >
            <SideBar></SideBar>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}

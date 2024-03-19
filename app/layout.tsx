import type { Metadata } from 'next'

import './globals.css'

import { getCookie, setCookie } from 'cookies-next'
import { ThemeProvider } from 'next-themes'

import { Theme } from '@radix-ui/themes'

import SideBar from './_components/SideBar'

import '@radix-ui/themes/styles.css'

import { NextIntlClientProvider, useMessages } from 'next-intl'

export const metadata: Metadata = {
  title: process.env.NAME,
  description: process.env.DESCRIPTION,
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const appearance = getCookie('theme') || setCookie('theme', 'dark')
  const locale = process.env.LANGUAGE
  const messages = useMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      {/* <Suspense> */}
      {/* <Loader language={process.env.LANGUAGE as 'zh_CN' | 'en_US'}></Loader> */}
      {/* </Suspense> */}
      <body className="h-screen w-full">
        <ThemeProvider attribute="class">
          <Theme
            appearance={appearance as any}
            accentColor={process.env.COLOR as any}
            className="flex h-screen w-full"
            radius="medium"
            id="root"
          >
            <SideBar></SideBar>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout

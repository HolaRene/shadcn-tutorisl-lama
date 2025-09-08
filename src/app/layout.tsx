import AppSideBar from "@/components/AppSideBar"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import './globals.css'

import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers"
import { icons } from "lucide-react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Don | Shadcn UI',
  description: 'GTutorial de Lamadev',
  icons: {
    icon: '/favicon.ico',
  }

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // estado = abierto o cerrado
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSideBar />
            <main className="  w-full">
              <Navbar />
              <div className=" px-4">{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

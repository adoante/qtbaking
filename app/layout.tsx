import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import DesktopNav from "@/components/DesktopNav";
import DesktopFooter from "@/components/DesktopFooter"
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    title: "QT Bakealong Archive",
    description: "All QTCinderella bakealongs in one place",
    openGraph: {
        title: "QT Bakealong Archive",
        description: "All QTCinderella bakealongs in one place",
        url: "https://qtbaking.com",
        siteName: "QT Bakealong Archive",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "QT Bakealong Archive",
        description: "All QTCinderella bakealongs in one place",
        images: ["/og-image.png"],
    },
};

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
        >
            <body>
                <ThemeProvider>
                    <DesktopNav />
                    {children}
                    <Analytics />
                    <DesktopFooter />
                </ThemeProvider>
            </body>
        </html>
    )
}

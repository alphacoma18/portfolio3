import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { env } from "@/server/env";
import type { Metadata } from "next";
import { Viewport } from "next";
const metaData = {
  app_name: "Alpha Romer Coma",
  title: "Portfolio | ARComa",
  url: env.NEXT_PUBLIC_HOST_URL,
  description: "",
  iconURL: `${env.NEXT_PUBLIC_HOST_URL}/android-chrome-512x512.png`,
  emails: "alpharomercoma@proton.me",
};
const { app_name, url, description, title, iconURL, emails } = metaData;

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: true,
  width: "device-width",
};

export const metadata: Metadata = {
  appleWebApp: {
    capable: true,
  },
  applicationName: app_name,
  appLinks: {
    web: {
      should_fallback: false,
      url,
    },
  },
  // NOTE: Do not enable this. It will display a white screen.
  // assets: "",
  generator: "Alpha Romer Coma",
  authors: {
    name: "Alpha Romer Coma",
    url: "https://www.linkedin.com/in/alpharomercoma/",
  },
  category: "",
  classification: "",
  creator: "Alpha Romer Coma",
  description,
  formatDetection: {
    telephone: false,
  },
  icons: [
    { rel: "icon", url: iconURL },
    { rel: "apple-touch-icon", url: iconURL },
  ],
  keywords: ["Alpha Romer Coma", "ARComa", "Portfolio", "Website", "Software Engineer"],
  manifest: "/manifest.webmanifest",
  metadataBase: new URL(url),
  openGraph: {
    description,
    images: [
      {
        url: "",
      },
    ],
    siteName: app_name,
    title,
    type: "website",
    url,
    emails,
  },
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title,
  publisher: "Alpha Romer Coma",
  referrer: "no-referrer",
  twitter: {
    card: "summary_large_image",
    site: "@alpharomercoma",
    creator: "@alpharomercoma",
    images: "",
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
    me: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

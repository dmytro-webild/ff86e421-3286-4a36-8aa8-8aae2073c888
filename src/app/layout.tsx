import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Комбит Про | Радарные Уровнемеры ЛИМАКО',
  description: 'Официальный дилер Комбит Про предлагает высокоточные радарные уровнемеры ЛИМАКО. Поставки, монтаж, обслуживание и импортозамещение для промышленных измерений.',
  keywords: ["Комбит Про, ЛИМАКО, радарные уровнемеры, измерение уровня, промышленные датчики, шефмонтаж, пусконаладка, обслуживание, импортозамещение, нефтепродукты, сыпучие продукты"],
  openGraph: {
    "title": "Комбит Про | Радарные Уровнемеры ЛИМАКО",
    "description": "Официальный дилер Комбит Про предлагает высокоточные радарные уровнемеры ЛИМАКО. Поставки, монтаж, обслуживание и импортозамещение для промышленных измерений.",
    "url": "https://www.kombit-pro.ru",
    "siteName": "Комбит Про",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/air-force-officer-performing-tactical-level-surveillance-command-room_482257-100230.jpg",
        "alt": "Радарный уровнемер в промышленном резервуаре"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Комбит Про | Радарные Уровнемеры ЛИМАКО",
    "description": "Официальный дилер Комбит Про предлагает высокоточные радарные уровнемеры ЛИМАКО. Поставки, монтаж, обслуживание и импортозамещение для промышленных измерений.",
    "images": [
      "http://img.b2bpic.net/free-photo/air-force-officer-performing-tactical-level-surveillance-command-room_482257-100230.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}

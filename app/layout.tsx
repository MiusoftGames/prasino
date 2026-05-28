import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://miusoftgames.github.io/prasino"),
  title: {
    default: "Prásino",
    template: "%s | Prásino",
  },
  description:
    "Prásino is a survival adventure where you plant trees, fight trash-born monsters, and restore life to a dying world. Free on browser & Android. Pro on PC & itch.io.",
  keywords: [
    "Prásino", "prasino game", "survival game", "android game",
    "indie game", "plant trees game", "miusoft", "itch.io game",
  ],
  authors: [{ name: "Miusoft" }],
  creator: "Miusoft",
  publisher: "Miusoft",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miusoftgames.github.io/prasino",
    siteName: "Prásino",
    title: "Prásino — Last Hope in a Trash-Cursed World",
    description:
      "Plant trees, fight trash-born monsters, and restore life to a dying world. Free on browser & Android.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prásino – survival adventure game",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prásino — Last Hope in a Trash-Cursed World",
    description:
      "Plant trees, fight trash-born monsters, and restore life to a dying world.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

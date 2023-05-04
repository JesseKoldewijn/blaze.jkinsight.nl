import "@/styles/tailwind.css";

import appleTouch from "@/meta/apple-touch-icon.png";
import fav32 from "@/meta/favicon-32x32.png";
import fav16 from "@/meta/favicon-16x16.png";

export const metadata = {
  title: {
    template: "%s 🔥 | JKinsight Blaze",
    default: "...",
  },
  description:
    "JKinsight Blaze 🔥 - build using Next.js + Tailwind + TypeScript and Prisma",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={fav32.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={fav16.src} />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;

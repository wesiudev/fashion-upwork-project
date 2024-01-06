import "./globals.css";
import { Metadata } from "next";
import { Libre_Baskerville, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Ecommerce Project. Upwork",
  description: "This is just a starting template proving my Nextjs skills.",
  publisher: "wesiudev",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${libre.variable} ${poppins.variable} w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
const libre = Libre_Baskerville({
  weight: "400",
  variable: "--font-Libre_Baskerville",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif" 
});

export const metadata = {
  title: "Sagar Murgan | Machine Learning Engineer & Data Specialist",
  description: "B.Sc. Computer Science (Specialization) with Business Minor from UAlberta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-sagar-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
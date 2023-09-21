import "./globals.css";
import { Inter } from "next/font/google";
import { TodosPage } from "./pages/TodosPage/TodosPage";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo",
  description: "Page that create todos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative overflow-auto h-screen w-screen">
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}

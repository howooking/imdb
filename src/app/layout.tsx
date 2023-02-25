import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import "./globals.css";

export const metadata = {
  title: "IMDB",
  description: "created by howoo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Navbar />
        <SearchBox />
        {children}
      </body>
    </html>
  );
}

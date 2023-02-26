import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import DarkmodeProvider from "./DarkmodeProvider";

import "./globals.css";
import TanstackProvider from "./TanstackProvider";

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
        <DarkmodeProvider>
          <TanstackProvider>
            <div className='mx-auto max-w-3xl'>
              <Header />
              <Navbar />
              <SearchBox />
              {children}
            </div>
          </TanstackProvider>
        </DarkmodeProvider>
      </body>
    </html>
  );
}

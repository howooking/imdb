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
      <body>{children}</body>
    </html>
  );
}

"use client";

import { ThemeProvider } from "next-themes";

export default function DarkmodeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider enableSystem attribute='class'>
      <div className='min-h-screen bg-white text-gray-700 transition-colors duration-300 dark:bg-gray-600 dark:text-white'>
        {children}
      </div>
    </ThemeProvider>
  );
}

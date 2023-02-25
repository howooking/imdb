"use client";

import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkmodeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (mounted) {
    return (
      <div>
        {currentTheme === "dark" ? (
          <BsFillSunFill
            className='cursor-pointer text-2xl hover:text-orange-400'
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className='cursor-pointer text-2xl hover:text-orange-400'
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    );
  }
  return <></>;
}

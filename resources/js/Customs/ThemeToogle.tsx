import React, { useState, useEffect } from 'react'; 
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/Components/ui/dropdown-menu'; // Replace with actual import paths
import { useTheme } from 'next-themes';
import { Button } from '@/Components/ui/button';
import { MonitorCogIcon, MoonStarIcon, SunIcon } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // State to track system preference
  const [systemTheme, setSystemTheme] = useState('light');

  useEffect(() => {
    // Function to update system theme preference
    const updateSystemTheme = (e:any) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Media query to check for dark mode preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set initial system theme based on media query
    setSystemTheme(darkModeMediaQuery.matches ? 'dark' : 'light');

    // Add listener to update system theme on changes
    darkModeMediaQuery.addEventListener('change', updateSystemTheme);

    // Clean up listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener('change', updateSystemTheme);
    };
  }, []);

  // Determine the currently active theme, accounting for system preference
  const activeTheme = theme === 'system' ? systemTheme : theme;

  const handleThemeChange = (selectedTheme:any) => {
    setTheme(selectedTheme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-10 h-10 text-sm focus:outline-none focus-visible:ring-0">
          {activeTheme === 'dark' ? (
            <MoonStarIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[10rem] mt-1 -ml-[130px] themes-wrapper">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          textValue="light"
          onSelect={() => handleThemeChange('light')}
          className={theme === 'light' ? 'active' : ''}
        >
          <SunIcon className="w-4 h-4 mr-2" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          textValue="dark"
          onSelect={() => handleThemeChange('dark')}
          className={theme === 'dark' ? 'active' : ''}
        >
          <MoonStarIcon className="w-4 h-4 mr-2" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          textValue="system"
          onSelect={() => handleThemeChange('system')}
          className={theme === 'system' ? 'active' : ''}
        >
          <MonitorCogIcon className="w-4 h-4 mr-2" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggle;

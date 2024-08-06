import { TooltipProvider } from '@/Components/ui/tooltip';
import { SidebarContent } from '@/Customs/Templates/SideBarContent';
import { Head } from '@inertiajs/react';
import { ThemeProvider } from '@/Components/Providers'
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ThemeSwitcher } from '@/Customs/Themes/Theme-Switcher';
import { MinimalViewContent } from '@/Customs/Templates/MinimalViewContent';

interface GuestProps {
  title?: string,
  children?: React.ReactNode
}

export default function ContainerLayout({ title, children }: GuestProps) {

  const [smallScreenView, setSmallScreenView] = useState<boolean>(false)
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        const { offsetWidth } = elementRef.current;

        if (offsetWidth > 1464) {
          setSmallScreenView(true)
        } else {
          setSmallScreenView(false)
        }
      }
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);
    // Run the handleResize function initially to set dimensions
    handleResize();
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); //

  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <Head title={title} />
      <div vaul-drawer-wrapper="" ref={elementRef} className='themes-wrapper bg-background'>
        {smallScreenView ? (<div className="flex flex-col w-auto">
          <SidebarContent />
          <TooltipProvider>{children}</TooltipProvider>
        </div>) : <MinimalViewContent /> }
      </div>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

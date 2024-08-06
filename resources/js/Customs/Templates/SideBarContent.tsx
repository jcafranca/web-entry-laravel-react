'use client'

import {
    Bell,
    Bookmark,
    Home,
    List,
    Mail,
    MoreHorizontal,
    User,
    Users,
} from 'lucide-react';
import { SideBarMenu } from '@/Customs/SideBar-Components/SideBarMenu';
import { SidebarItems } from '@/types/sidebar-items';
import { SideBarButton } from '@/Customs/SideBar-Components/SideBarButton';
import { TooltipProvider } from '@/Components/ui/tooltip';

const sidebarItems: SidebarItems = {
    links: [
        { label: 'Home', href: '/home', icon: Home },
        { label: 'Notification', href: '/notification', icon: Bell },
        { label: 'Messages', href: '/messages', icon: Mail },
        {
            href: '/lists',
            icon: List,
            label: 'Lists',
        },
        {
            href: '/bookmarks',
            icon: Bookmark,
            label: 'Bookmarks',
        },
        {
            href: '/communities',
            icon: Users,
            label: 'Communities',
        },
        {
            href: '/profile',
            icon: User,
            label: 'Profile',
        },
    ],
    extras: (
        <div className='flex flex-col gap-2'>
            <SideBarButton icon={MoreHorizontal} className='w-full'>
                More
            </SideBarButton>
            <SideBarButton
                className='justify-center w-full text-white'
                variant='default'
            >
                Tweet
            </SideBarButton>
        </div>
    ),
};

export function SidebarContent() {
    return (
        <TooltipProvider>
            <SideBarMenu sidebarItems={sidebarItems} />
        </TooltipProvider>
  )
}
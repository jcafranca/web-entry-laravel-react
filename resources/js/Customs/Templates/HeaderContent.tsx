import ThemeToggle from "@/Customs/ThemeToogle";
import { Button } from "@/Components/ui/button";
import { Calendar, Link, MailQuestionIcon, MessageCircleQuestionIcon, MessagesSquare, MessagesSquareIcon, Share, Slash, SunIcon } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import { ThemesSwitcher } from "../Themes/Themes-Selector";
import { ThemesStyle } from "../Themes/Themes-Style";

interface HeaderProps {
    title?: string
    subtitle?: string
}

export function HeaderContent({ title, subtitle }: HeaderProps) {
    return (
        <header className="sticky top-0 flex items-center gap-4 px-4 mt-1 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <div className="flex flex-col space-y-1.5">
                <h3 className="text-3xl font-semibold leading-none tracking-tight">{title}</h3>
                <p className="hidden text-sm text-muted-foreground sm:inline">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2 sm:ml-auto">
                <Button
                    className="ml-auto gap-1.5 text-sm" >
                    <MessagesSquareIcon className="size-3.5" />
                    Chat with HR
                </Button>
                <ThemeToggle />
                <Button
                    variant="outline"
                    size="default"
                    className="ml-auto gap-1.5 text-sm" onClick={() => {
                        window.location.href = 'http://idcsi-officesuites.com:8080/hrms/howto/TIME%20-%20HOW%20TOs.pdf'
                    }}>
                    <MessageCircleQuestionIcon className="size-3.5" />
                    Help
                </Button>
            </div>
        </header>
    )
}
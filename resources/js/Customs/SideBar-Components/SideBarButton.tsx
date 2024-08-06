import { LucideIcon } from 'lucide-react'
import { Button, ButtonProps } from '@/Components/ui/button'
import { cn } from '../../lib/utils'
import { SheetClose } from '@/Components/ui/sheet'

interface SideBarButtonProps extends ButtonProps {
    icon?: LucideIcon;
  }
  export function SideBarButton({
    icon: Icon,
    className,
    children,
    ...props
  }: SideBarButtonProps) {
    return (
      <Button
        variant='ghost'
        className={cn('gap-2 justify-start ', className)}
        {...props}
      >
        {Icon && <Icon size={20} />}
        <span>{children}</span>
      </Button>
    );
  }
  
  export function SideBarButtonSheet(props: SideBarButtonProps) {
    return (
      <SheetClose asChild>
        <SideBarButton {...props} />
      </SheetClose>
    );
  }
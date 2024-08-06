export default function FooterContent() {
    return (
        <footer className="bottom-0 py-6 md:px-8 md:py-2">
            <div className="flex flex-col items-center content-center justify-center md:h-fit md:flex-row">
                <p className="text-sm leading-loose text-center text-balance text-muted-foreground md:text-left">
                    Built by&nbsp;
                    <a href="https://twitter.com/shadcn" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">software department</a>.
                    The source code is available on&nbsp;
                    <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
                </p>
            </div>
        </footer>
    )
}
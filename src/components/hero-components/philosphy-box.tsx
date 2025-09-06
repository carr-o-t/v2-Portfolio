const PhilosophyBox = () => {
    return (
        <div className="flex h-full flex-col justify-between rounded-lg bg-accent p-6 transition-all duration-500 hover:shadow-lg">
            <div>
                <h3 className="mb-3 text-lg font-semibold">Philosophy</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    Clean code, scalable architecture, and continuous optimization to
                    deliver exceptional digital solutions.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
                    Code
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
                    Scale
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
                    Optimize
                </span>
            </div>
        </div>
    )
}

export { PhilosophyBox }

const DotPulse = () => {
    return (
        <div
            className="flex space-x-1 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
        >
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="h-2 w-2 rounded-full bg-primary animate-dot-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}
        </div>
    )
}

export { DotPulse }

import { cn } from "@nextui-org/react";

export function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ...props
}) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden py-6 relative [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                vertical ? "flex-col" : "flex-row",
                className
            )}
        >
            <div className="absolute right-0 -top-6 h-[calc(100%+1.5rem)] w-[10%] bg-gradient-to-l from-background to-transparent z-10"></div>
            <div className="absolute left-0 -top-6 h-[calc(100%+1.5rem)] w-[10%] bg-gradient-to-r from-background to-transparent z-10"></div>
            {Array.from({ length: repeat }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "flex shrink-0 justify-around [gap:var(--gap)]",
                        vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
                        pauseOnHover && "group-hover:[animation-play-state:paused]",
                        reverse && "[animation-direction:reverse]"
                    )}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}
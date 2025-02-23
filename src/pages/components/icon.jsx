import { useEffect, useRef } from "react";
import { Player } from '@lordicon/react';

export default function Icon({ name, size, handleAnimate, Icon, color }) {
    let iconSize = 42;

    switch (size) {
        case 'sm':
            iconSize /= 2;
            break;
        case 'md':
            iconSize /= 1.5;
            break;
        default:
            break;
    }

    const playerRef = useRef(null);

    useEffect(() => {
        if (handleAnimate && playerRef.current) {
            playerRef.current.playFromBeginning();
        }
    }, [handleAnimate]);

    if (!Icon) return null;

    return (
        <div className="relative" style={{ width: iconSize, height: iconSize }}>
            <Player
                ref={playerRef}
                icon={Icon}
                colorize={color || "#255aff"}
                size={iconSize}
                key={name}
            />
        </div>
    );
}
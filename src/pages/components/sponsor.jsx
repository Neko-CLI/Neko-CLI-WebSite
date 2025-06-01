import { Image } from "@nextui-org/react";

export default function Sponsor({ name, iconURL, color, URL, iconOnly, width }) {
    return (
        <a className="flex flex-row gap-1 items-center no-underline" href={URL}>
            <Image radius="none" alt={name} className="bg-transparent" isBlurred src={iconURL} width={iconOnly ? (width || 150) : 40} />
            {
                !iconOnly &&
                <p className={`text-base font-bold mb-1`} style={{ color: color }}>{name}</p>
            }
        </a>
    )
}
import { Button, Link, NavbarItem } from "@nextui-org/react";
import Icon from "../icon";
import { useState } from "react";

export default function MenuItem({ name, icon, link }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <NavbarItem isActive>
            <Button
                as={Link}
                disableRipple
                color="default"
                href={link}
                // target="_blank"
                variant="light"
                radius="full"
                routerOptions={{replace: true}}
                startContent={
                    <Icon
                    name={name}
                    size="sm"
                    handleAnimate={isHovered}
                    Icon={icon}
                    color='#fff'
                />
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {name}
            </Button>
        </NavbarItem>
    )
}
import React, { useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Image,
} from "@nextui-org/react";

import bookIcon from '../../static/animated/bookIcon.json'
import confettiIcon from '../../static/animated/confettiIcon.json'
import shareIcon from '../../static/animated/shareIcon.json'
import MenuItem from "./menuItem";

import nekoCLILogo from '../../static/logos/nekoCLILogo.png'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [version, setVersion] = React.useState(false);

    const menuItems = [
        { name: 'Docs', icon: bookIcon, link: 'https://neko-cli.unstackss.dev/docs' },
        { name: 'Github', icon: shareIcon, link: 'https://github.com/Neko-CLI/Neko-CLI-WebSite' },
        { name: 'Discord', icon: shareIcon, link: 'https://nekods.unstackss.dev' },
        { name: 'Donate', icon: confettiIcon, link: 'https://www.paypal.com/paypalme/UnStackss?country.x=IT&locale.x=en_US' }
    ];

    useEffect(() => {
        const fetchDownloads = async () => {
            try {
                const info = await fetch(
                    "https://registry.npmjs.org/neko-cli/latest"
                ).then((res) => res.json());

                setVersion(info.version)
            } catch (error) {
                console.error("Error fetching downloads data:", error);
            }
        };

        fetchDownloads();
    }, []);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Image
                        alt="NekoCLI Logo"
                        src={nekoCLILogo}
                        width={50}
                    />
                    <div className="flex flex-col gap-0">
                        <span className="font-bold text-inherit text-lg">Neko-CLI</span>
                        <span className="text-inherit text-small -mt-2">{version}</span>
                    </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-4" justify="center">
                {
                    menuItems.map((x, index) => (
                        <MenuItem name={x.name} link={x.link} icon={x.icon} key={index} />
                    ))
                }
            </NavbarContent>
            <NavbarMenu>
                {
                    menuItems.map((x, index) => (
                        <MenuItem name={x.name} link={x.link} icon={x.icon} key={index} />
                    ))
                }
            </NavbarMenu>
        </Navbar>
    );
}
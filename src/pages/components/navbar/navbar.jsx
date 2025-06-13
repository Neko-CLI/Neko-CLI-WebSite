import React, { useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    Image,
    Kbd,
    Button,
    Link,
    NavbarItem,
    Accordion,
    AccordionItem,
} from "@nextui-org/react";

import nekoCLILogo from '../../../static/logos/nekoCLILogo.png';
import { SearchIcon } from "../../../static/icons/search";
import { useLocation } from "react-router-dom";
import { useKBar } from "kbar";
import PageSelector from "../../docs/pageSelector";
import { pages } from "../../docs/pages/pages";

export default function NavBar({ selectedLink, setSelectedLink }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [version, setVersion] = React.useState(null);

    const menuItems = [
        { name: 'Docs', link: '/docs', hasAccordion: true, accordion: <PageSelector selectedLink={selectedLink} setSelectedLink={setSelectedLink} pages={pages} isNavBar={true} /> },
        { name: 'Reviews', link: '/reviews' },
        { name: 'Github', link: 'https://github.com/Neko-CLI/Neko-CLI-WebSite' },
        { name: 'Discord', link: 'https://ds.neko-cli.com' },
        { name: 'Donate', link: 'https://www.paypal.com/paypalme/UnStackss?country.x=IT&locale.x=en_US' }
    ];

    useEffect(() => {
        const fetchVersion = async () => {
            try {
                const info = await fetch(
                    "https://registry.npmjs.org/neko-cli/latest"
                ).then((res) => res.json());

                setVersion(info.version);
            } catch (error) {
                console.error("Error fetching Neko-CLI version:", error);
                setVersion('N/A');
            }
        };

        fetchVersion();
    }, []);

    const location = useLocation();
    const { query } = useKBar();

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                wrapper: [
                    "max-w-[1440px]",
                    "w-full"
                ],
                item: [
                    "text-foreground",
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:text-primary",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-4",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ]
            }}
            position="sticky"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
                <NavbarBrand>
                    <Link href="/" className="text-foreground">
                        <Image
                            alt="NekoCLI Logo"
                            src={nekoCLILogo}
                            width={50}
                        />
                        <div className="flex flex-col gap-0">
                            <span className="font-bold text-inherit text-lg">Neko-CLI</span>
                            {version && <span className="text-inherit text-small -mt-2">v{version}</span>}
                        </div>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarMenu className="flex flex-col gap-6">
                {
                    menuItems.map((x, index) => (
                        <NavbarItem isActive={location.pathname.includes(x.link)} key={index} className="h-auto w-fit after:hidden">
                            {
                                x.hasAccordion ? (
                                    <Accordion
                                        defaultExpandedKeys={new Set(["0"])}
                                        isCompact
                                        showDivider={false}
                                        selectionMode="multiple"
                                        className="p-0"
                                        itemClasses={{
                                            trigger: ["w-auto", "p-0"],
                                            indicator: ["text-foreground"],
                                            title: ["font-normal"]
                                        }}
                                    >
                                        <AccordionItem key="0" aria-label={x.name} title={x.name}>
                                            {x.accordion}
                                        </AccordionItem>
                                    </Accordion>
                                ) : (
                                    <Link href={x.link} className="text-[unset]">
                                        {x.name}
                                    </Link>
                                )
                            }
                        </NavbarItem>
                    ))
                }
            </NavbarMenu>

            <NavbarContent as="div" className="items-center flex gap-12" justify="end">
                <NavbarContent className="hidden lg:flex gap-6" justify="end">
                    {
                        menuItems.map((x, index) => (
                            <NavbarItem isActive={location.pathname.includes(x.link)} key={index}>
                                <Link href={x.link} className="text-[unset]">
                                    {x.name}
                                </Link>
                            </NavbarItem>
                        ))
                    }
                </NavbarContent>

                <Button
                    className="flex flex-row items-center gap-2 border-1 border-x-1.5 p-2 h-fit pl-2.5 text-foreground-500"
                    variant="bordered"
                    radius="full"
                    onClick={() => query.toggle()}
                >
                    <SearchIcon size={16} />
                    <span className="mr-2 pr-2">Search</span>
                    <Kbd keys={["command"]} className="rounded-full px-2 bg-content1">k</Kbd>
                </Button>
            </NavbarContent>
        </Navbar>
    );
}
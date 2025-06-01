import { Accordion, AccordionItem, Link } from "@nextui-org/react";

export const generateHref = (accordionTitle, linkName) => {
    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "");
    return `/docs/${slugify(accordionTitle)}/${slugify(linkName)}`;
};

export default function PageSelector({ pages, selectedLink, setSelectedLink, isNavBar }) {
    const keys = pages.map((x) => x.title);

    return (
        <div className={`w-64 h-full relative ${!isNavBar && 'hidden'} lg:block`}>
            <div className={`h-full w-60 overflow-visible ${!isNavBar && 'fixed top-36'}`}>
                <Accordion
                    isCompact
                    showDivider={false}
                    selectionMode="multiple"
                    defaultExpandedKeys={new Set(keys)}
                    itemClasses={{
                        trigger: ["w-auto"],
                        indicator: ["text-foreground"]
                    }}
                >
                    {pages.map(({ title, links }) => (
                        <AccordionItem key={title} aria-label={title} title={title}>
                            <div className="flex flex-col gap-3">
                                {links.map((linkName) => (
                                    <Link
                                        key={linkName}
                                        href={generateHref(title, linkName)}
                                        onClick={() => {
                                            setSelectedLink({ page: title.replaceAll(' ', '_'), link: linkName.replaceAll(' ', '_') });
                                        }}
                                        className={`${selectedLink.link === linkName.replaceAll(' ', '_')
                                            ? "text-foreground"
                                            : "text-foreground-500"
                                            } text-sm`}
                                    >
                                        <span className="h-1 w-1 bg-foreground-300 rounded-full mr-4"></span>
                                        {linkName}
                                    </Link>
                                ))}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
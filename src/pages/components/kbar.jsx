import {
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
    useMatches,
    useKBar,
} from "kbar";
import { SearchIcon } from '../../static/icons/search';
import { Kbd, Link } from '@nextui-org/react';

import { generateHref } from '../docs/pageSelector';
import { scroolIntoView } from '../docs/pageLinks';

import { pages } from '../docs/pages/pages';
import { componentsMap } from '../docs/pages/pages';

const normalizeLinkKey = (linkName) => {
    return linkName
        .replace(/ /g, "_");
};

export const actions = pages.flatMap(page => {
    const pageTitleKey = page.title.replaceAll(" ", "_");

    return [
        ...page.links.map(link => {
            const normalizedLinkKey = normalizeLinkKey(link);
            return {
                id: normalizedLinkKey,
                name: link,
                link: normalizedLinkKey,
                type: "page",
                page: pageTitleKey,
                href: generateHref(page.title, link),
                priority: 2
            };
        }),

        ...page.links.flatMap(link => {
            const normalizedLinkKey = normalizeLinkKey(link);

            const componentPage = componentsMap[pageTitleKey]?.[normalizedLinkKey];

            if (!componentPage || !componentPage.sections) {
                return [];
            }

            return componentPage.sections.map(section => ({
                id: section.id,
                name: section.name,
                page: pageTitleKey,
                link: normalizedLinkKey,
                keywords: link,
                type: "section",
                href: `${generateHref(page.title, link)}#${section.id}`,
                priority: 1
            }));
        })
    ];
});

function RenderResults({ setSelectedLink }) {
    const { results } = useMatches();
    const { query } = useKBar();

    return (
        <div className="max-h-96 overflow-auto relative">
            <div className="flex flex-col gap-2 p-4">
                {results.slice(0, 10).map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className={`result-item flex flex-col justify-center items-start h-16 px-4 py-2 rounded-md bg-content1 text-foreground hover:bg-primary group`}
                        data-active={item.active}
                        onClick={() => {
                            setSelectedLink({ page: item.page, link: item.link })
                            if (item.type === "section") {
                                scroolIntoView(item.id)
                            }
                            query.toggle();
                        }}
                    >
                        {item.type === 'page' ? (
                            <span className="text-foreground-500 group-hover:text-primary-foreground">
                                {item.name}
                            </span>
                        ) : (
                            <>
                                <span className="text-sm text-foreground-400 group-hover:text-primary-foreground">
                                    {item.keywords}
                                </span>
                                <span className="text-foreground-500 group-hover:text-primary-foreground">
                                    {item.name}
                                </span>
                            </>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default function Kbar({ setSelectedLink }) {
    return (
        <KBarPortal>
            <KBarPositioner className="z-50">
                <KBarAnimator className='border-foreground-300 border-small rounded-large w-[574px] text-lg bg-content1 bg-opacity-40 backdrop-blur-sm'>
                    <div className='flex flex-row items-center gap-2 px-4 h-14 text-foreground-700 border-b-small border-foreground-300'>
                        <SearchIcon size='24' />
                        <KBarSearch className="bg-transparent border-none h-full w-full focus:outline-none p-2" spellCheck="false" autoCorrect="off" autoComplete="off" placeholder='Search in docs' />
                        <Kbd keys={[]} className="rounded-full px-2 bg-content1 shadow-none" >esc</Kbd>
                    </div>
                    <RenderResults setSelectedLink={setSelectedLink} />
                </KBarAnimator>
            </KBarPositioner>
        </KBarPortal>
    )
}
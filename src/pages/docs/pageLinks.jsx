import { Link } from "@nextui-org/react";
import { componentsMap } from "./pages/pages";

export function scroolIntoView(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    } else {
        setTimeout(() => {
            const element = document.getElementById(id);
            
            element.scrollIntoView({ behavior: "smooth" });
        }, 1000);
    }
}

export default function PageLinks({ selectedLink }) {
    return (
        <div className="w-64 h-full relative text-sm font-medium hidden xl:block">
            <div className="overflow-visible fixed top-38">
                <p className="mb-3">On this page</p>
                <ul className="h-full w-60">
                    {componentsMap[selectedLink.page][selectedLink.link] &&
                        componentsMap[selectedLink.page][selectedLink.link].sections.map((section) => (
                            <li key={section.id} className="flex items-center mb-2">
                                <span className="block h-1 w-1 bg-foreground-300 rounded-full mr-2"></span>
                                <Link
                                    href={`#${section.id}`}
                                    className="text-foreground-400 text-tiny font-normal"
                                    onClick={() => scroolIntoView(section.id)}
                                >
                                    {section.name}
                                </Link>

                                {section.subsections && (
                                    <ul>
                                        {section.subsections.map((sub) => (
                                            <li key={sub.id}>
                                                <span className="block h-1 w-1 bg-foreground-300 rounded-full mr-2"></span>
                                                <Link
                                                    href={`#${sub.id}`}
                                                    className="text-foreground-400 text-tiny font-normal"
                                                    onClick={() => scroolIntoView(sub.id)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
            </div>
        </div >
    )
}
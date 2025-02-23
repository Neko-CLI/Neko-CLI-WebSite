import { Accordion, AccordionItem, Link } from "@nextui-org/react";
import Footer from "../components/footer";
import { useState } from "react";

import { componentsMap, pages } from "./pages/pages";

import PageSelector from "./pageSelector";
import PageLinks from "./pageLinks";

export default function Docs({ selectedLink, setSelectedLink}) {
    return (
        <>
            <div className="h-[calc(100vh-64px)] flex justify-center w-full z-10">
                <div className="max-w-[1440px] w-full flex flex-row px-6 mt-20">
                    <PageSelector 
                        selectedLink={selectedLink} 
                        setSelectedLink={setSelectedLink} 
                        pages={pages}
                    />

                    <article className="prose dark:prose-invert prose-base lg:pl-16 xl:px-16 w-full max-w-full">
                        <h1>{(componentsMap[selectedLink.page][selectedLink.link] || { title: "Error"}).title}</h1>
                        {(componentsMap[selectedLink.page][selectedLink.link] || { content: "Error"}).content}
                        <Footer className="not-prose" />
                    </article>

                    <PageLinks selectedLink={selectedLink} />
                </div>
            </div>
        </>
    );
}
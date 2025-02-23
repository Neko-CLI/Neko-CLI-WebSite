import Code from "../../../components/code";

// FINITO

export const projectInsightsPage = {
    title: "Project Insights",
    sections: [
        {
            id: "listDependencies",
            name: "List Dependencies",
        },
        {
            id: "binaryInfo",
            name: "Binary Information",
        },
        {
            id: "packageInfo",
            name: "Package Information",
        },
        {
            id: "languages",
            name: "Detected Languages",
        },
        {
            id: "checkErrors",
            name: "Error Detection",
        },
    ],
    content: (
        <>
            <section id="listDependencies">
                <h2>List Dependencies</h2>
                <p>
                    <Code fullWidth>meow list</Code> Use it to list all installed dependencies in your project.
                </p>
            </section>
            <section id="binaryInfo">
                <h2>Binary Information</h2>
                <p>
                    <Code fullWidth>meow bin</Code> Use to get the path to installed binaries (e.g., Node.js).
                </p>
            </section>
            <section id="packageInfo">
                <h2>Package Information</h2>
                <p>
                    Fetch detailed information about a package using <Code fullWidth>meow info &lt;pkg&gt;</Code>
                </p>
            </section>
            <section id="languages">
                <h2>Detected Languages</h2>
                <p>
                    <Code fullWidth>meow languages</Code> Use it to list programming languages and files detected in your project.
                </p>
            </section>
            <section id="checkErrors">
                <h2>Error Detection</h2>
                <p>
                    <Code fullWidth>meow checkerrors</Code> Use it to detect and list errors in your code.
                </p>
            </section>
        </>
    ),
};

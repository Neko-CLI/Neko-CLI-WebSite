import Code from "../../../components/code";

// FINITO

export const dependencyAnalysisPage = {
    title: "Dependency Analysis",
    sections: [
        {
            id: "outdated",
            name: "Outdated Dependencies",
        },
        {
            id: "analyze",
            name: "Analyze Dependencies",
        },
        {
            id: "security",
            name: "Security Scans",
        },
        {
            id: "prune",
            name: "Dependency Cleanup",
        },
        {
            id: "licenses",
            name: "Package Licenses",
        },
        {
            id: "doctor",
            name: "Project Diagnostics",
        },
    ],
    content: (
        <>
            <section id="outdated">
                <h2>Outdated Dependencies</h2>
                <p>
                    Check for outdated packages using <Code fullWidth>meow outdated</Code>
                </p>
            </section>
            <section id="analyze">
                <h2>Analyze Dependencies</h2>
                <p>
                    <Code fullWidth>meow analyze</Code> Use this command to report on bundle size and dependency details.
                </p>
            </section>
            <section id="security">
                <h2>Security Scans</h2>
                <p>
                    Scan your project for vulnerabilities using <Code fullWidth>meow seccheck</Code>
                </p>
            </section>
            <section id="prune">
                <h2>Dependency Cleanup</h2>
                <p>
                    <Code fullWidth>meow prune</Code> Use it to remove unnecessary dependencies and clean up unused packages.
                </p>
            </section>
            <section id="licenses">
                <h2>Package Licenses</h2>
                <p>
                    List all licenses for the installed packages using <Code fullWidth>meow licenses</Code>
                </p>
            </section>
            <section id="doctor">
                <h2>Project Diagnostics</h2>
                <p>
                    <Code fullWidth>meow doctor</Code> Use this command to check for common issues in your project.
                </p>
            </section>
        </>
    ),
};

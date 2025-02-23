import Code from "../../../components/code";

// FINITO

export const dependencyManagementPage = {
    title: "Dependency Management",
    sections: [
        {
            id: "addingDependencies",
            name: "Adding Dependencies",
        },
        {
            id: "removingDependencies",
            name: "Removing Dependencies",
        },
        {
            id: "installingDependencies",
            name: "Installing All Dependencies",
        },
    ],
    content: (
                <>
            <section id="addPackages">
                <h2>Adding Packages</h2>
                <p>
                    <Code fullWidth>meow add &lt;pkg1...pkgN&gt; [-g] [--dev]</Code> Use it to add one or more packages. Add the 
                    <code>-g</code> flag for global installation or <code>--dev</code> for development dependencies.
                </p>
            </section>
            <section id="removePackages">
                <h2>Removing Packages</h2>
                <p>
                    <Code fullWidth>meow remove &lt;pkg1...pkgN&gt; [-g] [--dev]</Code> Use to remove packages globally or 
                    from development dependencies.
                </p>
            </section>
            <section id="installAll">
                <h2>Installing All Dependencies</h2>
                <p>
                    <Code fullWidth>meow meow</Code> and <Code fullWidth>meow all</Code> install all dependencies specified in your 
                    project configuration.
                </p>
            </section>
        </>
    ),
};

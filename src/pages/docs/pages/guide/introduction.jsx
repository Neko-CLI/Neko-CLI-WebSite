export const introductionPage = {
    title: "Introduction",
    sections: [
        {
            id: "nekoRock",
            name: "Neko rock",
        },
        {
            id: "keyFeatures",
            name: "Key Features of Neko-CLI",
        },
        {
            id: "documentation",
            name: "Documentation and Resources",
        },
        {
            id: "whyNekoCLI",
            name: "Why Developers Love Neko-CLI",
        },
        {
            id: "gettingStarted",
            name: "Ready to Get Started?",
        },
    ],
    content: (
        <>
            <section id="introduction">
                <p>
                    Welcome to <strong>Neko-CLI</strong>, your custom package manager for Node.js! Neko-CLI is
                    designed to simplify and optimize your project's dependency management, making it faster, more
                    efficient, and more secure. Whether you're initializing a new project, managing packages, or
                    keeping your codebase clean, Neko-CLI provides all the tools you need in one streamlined package.
                </p>
            </section>

            <section id="nekoRock">
                <h2>🐾 neko.rock - The Native Package Manager of Neko CLI</h2>
                <p>
                    <strong>neko.rock</strong> is the beating heart of Neko CLI—a lock file that tracks packages
                    and their versions for each project managed. It functions as a dedicated dependency manager,
                    much like <code>package.json</code> in npm, but with a fun feline twist. Every package added
                    via Neko CLI is recorded in neko.rock, allowing you to easily manage your project's dependencies
                    with confidence.
                </p>
                <p>Neko-CLI provides advanced features for managing dependencies, including:</p>
                <ul>
                    <li>
                        <strong>Automated Dependency Updates:</strong> Stay up-to-date with the latest versions of
                        your dependencies without manual intervention.
                    </li>
                    <li>
                        <strong>Conflict Resolution:</strong> Quickly identify and resolve versioning conflicts in
                        your dependency tree.
                    </li>
                </ul>
            </section>

            <section id="keyFeatures">
                <h2>🌟 Key Features of Neko-CLI</h2>
                <p>With Neko-CLI, you can effortlessly:</p>
                <ul>
                    <li>
                        <strong>Install and Remove Packages:</strong> Manage project dependencies with simple and
                        intuitive commands.
                    </li>
                    <li>
                        <strong>Analyze Bundle Sizes:</strong> Keep track of your project's bundle size to optimize
                        performance.
                    </li>
                    <li>
                        <strong>Scan for Vulnerabilities:</strong> Ensure security by regularly scanning your
                        dependencies for known issues.
                    </li>
                    <li>
                        <strong>Backup Projects:</strong> Secure your work with robust project backup tools.
                    </li>
                    <li>
                        <strong>Ensure Compatibility:</strong> Guarantee compatibility with the latest Node.js
                        versions.
                    </li>
                    <li>
                        <strong>Clean Up:</strong> Remove unnecessary files and dependencies to keep your project tidy.
                    </li>
                </ul>
            </section>

            <section id="documentation">
                <h2>📘 Documentation and Resources</h2>
                <p>
                    Neko-CLI is well-documented, offering resources for both beginners and advanced users. Explore
                    detailed guides, API references, and tips to get the most out of Neko-CLI.
                </p>
                <p>
                    Additionally, the Neko-CLI community is active and supportive. Join discussions, share best practices,
                    and stay informed about the latest updates.
                </p>
            </section>

            <section id="whyNekoCLI">
                <h2>Why Developers Love Neko-CLI</h2>
                <p>
                    <strong>Neko-CLI</strong> stands out because it's built with developers in mind. It's fast, flexible,
                    and designed to simplify the challenges of modern development. Whether you're working on a personal
                    project or leading a team, Neko-CLI adapts to your needs.
                </p>
            </section>

            <section id="gettingStarted">
                <h2>Ready to Get Started?</h2>
                <p>
                    For more information, updates, and detailed documentation, visit the 
                    <a href="https://neko-cli.com" target="_blank" rel="noopener noreferrer" className="text-link">
                        official Neko-CLI website
                    </a>. 
                    <strong> Get ready to streamline your development process with Neko-CLI! 🐾</strong>
                </p>
            </section>
        </>
    ),
};
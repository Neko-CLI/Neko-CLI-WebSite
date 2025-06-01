import Code from "../../../components/code";
import {User, Link, Chip} from "@heroui/react";

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
        <section id="author">
                <User
                    avatarProps={{
                        src: "https://i.ibb.co/sp2J0s99/image.png",
                    }}
                    description={
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Link isExternal href="https://github.com/StrayVibes" size="sm">
                                @StrayVibes
                            </Link>
                            <Chip
                                color="danger"
                                variant="bordered"
                                size="sm"
                                startContent={
                                    <img
                                        src="https://img.icons8.com/glyph-neue/64/F25081/user-shield.png"
                                        alt="user-shield"
                                        style={{ width: 14, height: 14 }}
                                    />
                                }
                            >
                                Admin
                            </Chip>
                        </span>
                    }
                    name="Thomas Garau"
                />
                <p style={{ fontSize: '0.9em', color: '#666', marginTop: '8px' }}>
                    Published on June 1, 2025 at 11:20 AM
                </p>
            </section>
            <section id="addPackages">
                <h2>➕ Adding Packages - Grow Your Project!</h2>
                <p>
                    Bring new functionality into your project with ease! Use <Code fullWidth>meow add &lt;pkg1...pkgN&gt; [-g] [--dev]</Code> to add one or more packages.
                    Whether you need a global tool 🌐 (with the <code>-g</code> flag) or a specific development dependency 🛠️ (with <code>--dev</code>), Neko-CLI makes integration seamless.
                </p>
            </section>
            <section id="removePackages">
                <h2>🗑️ Removing Packages - Keep It Clean!</h2>
                <p>
                    Time to declutter your project? 🧹 Easily remove unneeded packages with <Code fullWidth>meow remove &lt;pkg1...pkgN&gt; [-g] [--dev]</Code>.
                    This command helps you maintain a lean and efficient codebase, whether you're tidying up global installations or specific development clutter. ✨
                </p>
            </section>
            <section id="installAll">
                <h2>⬇️ Installing All Dependencies - Get Ready to Run!</h2>
                <p>
                    Got a new project or just pulled the latest changes? 🚀 Get everything set up instantly! Both <Code fullWidth>meow meow</Code> and <Code fullWidth>meow all</Code> commands will install all dependencies specified in your project's configuration.
                    It’s the quickest way to get your project up and running! 🐈
                </p>
            </section>
        </>
    ),
};
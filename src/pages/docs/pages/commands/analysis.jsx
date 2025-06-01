import Code from "../../../components/code";
import {User, Link, Chip} from "@heroui/react";

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
            <section id="outdated">
                <h2>⏰ Outdated Dependencies - Stay Fresh!</h2>
                <p>
                    Don't let your project fall behind! 📉 Use <Code fullWidth>meow outdated</Code> to quickly check for any packages that are past their prime. Keeping your dependencies up-to-date helps with security and new features!
                </p>
            </section>
            <section id="analyze">
                <h2>🔬 Analyze Dependencies - Deep Dive into Your Code!</h2>
                <p>
                    Get a clear picture of your project's makeup! 🧐 The <Code fullWidth>meow analyze</Code> command provides detailed reports on bundle size and dependency specifics. Understand what's really contributing to your project's footprint.
                </p>
            </section>
            <section id="security">
                <h2>🔒 Security Scans - Protect Your Project!</h2>
                <p>
                    Keep your codebase safe and sound! 🛡️ Scan your project for potential vulnerabilities with <Code fullWidth>meow seccheck</Code>. Neko-CLI helps you identify and address security risks before they become a problem. Sleep easy! 💤
                </p>
            </section>
            <section id="prune">
                <h2>✂️ Dependency Cleanup - Trim the Fat!</h2>
                <p>
                    Is your project carrying extra weight? 🏋️‍♂️ Use <Code fullWidth>meow prune</Code> to remove unnecessary dependencies and clean up unused packages. It's great for keeping your project lean and efficient.
                </p>
            </section>
            <section id="licenses">
                <h2>📜 Package Licenses - Know Your Rights!</h2>
                <p>
                    Understand the legal side of your dependencies! ⚖️ List all licenses for your installed packages with <Code fullWidth>meow licenses</Code>. This is crucial for compliance and understanding usage rights.
                </p>
            </section>
            <section id="doctor">
                <h2>🩺 Project Diagnostics - Your Project's Health Check!</h2>
                <p>
                    Is your project feeling under the weather? 🤒 Run <Code fullWidth>meow doctor</Code> to perform a quick diagnostic check for common issues. Neko-CLI helps you pinpoint problems and get your project back to full health! ❤️‍🩹
                </p>
            </section>
        </>
    ),
};
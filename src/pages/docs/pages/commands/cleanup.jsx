import Code from "../../../components/code";
import {User, Link, Chip} from "@heroui/react";

export const cleanupPage = {
    title: "Cleanup and Compatibility",
    sections: [
        {
            id: "clean",
            name: "Clean Project",
        },
        {
            id: "compatibility",
            name: "Check Compatibility",
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
                                size="sm" // Make the chip slightly smaller to fit better in description
                                startContent={
                                    <img
                                        src="https://img.icons8.com/glyph-neue/64/F25081/user-shield.png"
                                        alt="user-shield"
                                        style={{ width: 14, height: 14 }} // Adjust icon size
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
            <section id="clean">
                <h2>🧹 Clean Project - Tidy Up Your Workspace!</h2>
                <p>
                    Is your project feeling a bit cluttered? 🗑️ Use <Code fullWidth>meow clean</Code> to effortlessly remove logs, old backups, and other unused files. It's the perfect command to keep your development environment neat and optimize your disk space. A clean workspace is a happy workspace! ✨
                </p>
            </section>
            <section id="compatibility">
                <h2>✅ Check Compatibility - Stay in Sync!</h2>
                <p>
                    Ensure all your dependencies are playing nicely together! 🎶 Run <Code fullWidth>meow compatibility</Code> to quickly verify if there are any conflicts or issues between your project's dependencies. This helps you avoid unexpected problems and keeps your project running smoothly. No more dependency drama! 🤝
                </p>
            </section>
        </>
    ),
};